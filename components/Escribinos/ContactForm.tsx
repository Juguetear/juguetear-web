"use client";

import { postClient } from "lib/sanity-client";

interface ContactFormProps {
  children: React.ReactNode;
}

export const ContactForm = ({ children }: ContactFormProps) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const { name, email, body } = Object.fromEntries(formData);

    const response = await postClient.create({
      _type: "message",
      name,
      email,
      body,
    });
    return response;
  };

  return (
    <form className="container max-w-2xl" onSubmit={handleSubmit}>
      {children}
    </form>
  );
};
