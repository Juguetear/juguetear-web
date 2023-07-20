import { EnvelopeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

const message = defineType({
  name: "message",
  title: "Mensaje",
  type: "document",
  // @ts-expect-error Wrong type
  icon: EnvelopeIcon as unknown,
  fields: [
    defineField({
      name: "name",
      title: "*Nombre completo",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "*Email",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "*Mensaje",
      type: "text",
    }),
  ],
});

export default message;
