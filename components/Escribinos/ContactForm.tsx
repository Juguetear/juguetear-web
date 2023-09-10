"use client";

import { postClient } from "lib/sanity-client";

interface ContactFormProps {
  children: React.ReactNode;
}

export const ContactForm = ({ children }: ContactFormProps) => {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLInputElement;
    const response = await postClient.create({
      _type: "message",
      // @ts-expect-error TODO: Correct type
      name: form.name.value,
      // @ts-expect-error TODO: Correct type
      email: form.email.value,
      // @ts-expect-error TODO: Correct type
      body: form.body.value,
    });
    return response;
  };

  return (
    <form className="container max-w-2xl" onSubmit={handleSubmit}>
      {children}
    </form>
  );
};
