"use server";

import { ZodError } from "zod";
import { postClient } from "lib/sanity-client";
import { contactFormSchema } from "./contact-form.shcema";
import { Err, Fields, State, handleFail, handleSuccess } from "./state";

export async function contactFormAction(
  prevState: State,
  formData: FormData
): Promise<State> {
  if (prevState.showNotification) {
    return handleSuccess(prevState.data, false);
  }
  const allData = Object.fromEntries(formData.entries());
  const validatedData = contactFormSchema.safeParse(allData);

  if (!validatedData.success) {
    const zodError = validatedData.error as ZodError;
    const errorMap = zodError.flatten().fieldErrors;
    const err: Err = {
      name: errorMap.name?.[0] ?? "",
      email: errorMap.email?.[0] ?? "",
      body: errorMap.body?.[0] ?? "",
    };
    return handleFail(prevState, false, err);
  }
  try {
    await postClient.create({
      _type: "_message",
      ...validatedData.data,
    });
    return handleSuccess(
      { validatedData: validatedData.data as unknown as Fields },
      true
    );
  } catch (err) {
    const catchErr: Err = {
      name: "",
      email: "",
      body: "",
    };
    return handleFail(prevState, true, catchErr);
  }
}
