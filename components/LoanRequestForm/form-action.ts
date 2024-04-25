"use server";

import {
  loanReqFormSchema,
  type LoanReqFormSchemaErrors,
} from "./form-schema-validations";

type ErrorMessages = LoanReqFormSchemaErrors["fieldErrors"];

export async function loanReqFormAction(
  previousState: ErrorMessages,
  formData: FormData
): Promise<ErrorMessages> {
  "use server";

  const result = loanReqFormSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return result.error.flatten().fieldErrors;
  }
  // TODO: Handle form data
  result.data;

  return {};
}
