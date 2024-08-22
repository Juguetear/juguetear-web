import { z } from "zod";

const contactFields = {
  name: "name",
  email: "email",
  body: "body",
};
export const contactFormSchema = z.object({
  [contactFields.name]: z.string(),
  [contactFields.email]: z.string().email(),
  [contactFields.body]: z.string().max(500),
});
