import { defineField, defineType } from "sanity";

const link = defineType({
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    defineField({
      title: "Titulo/Nombre de dominio",
      name: "name",
      type: "string",
    }),
    defineField({
      title: "Enlace",
      name: "url",
      type: "url",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validation: (Rule: any) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
    }),
  ],
});

export default link;
