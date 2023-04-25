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
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "url",
    },
  },
});

export default link;
