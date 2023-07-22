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
      validation: (Rule) =>
        Rule.required().regex(
          /^[A-Za-zñÑáÁéÉíÍóÓúÚ]+( [A-Za-zñÑáÁéÉíÍóÓúÚ]+)*$/
        ),
    }),
    defineField({
      name: "email",
      title: "*Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "body",
      title: "*Mensaje",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export default message;
