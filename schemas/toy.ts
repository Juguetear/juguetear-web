import { defineArrayMember, defineField, defineType } from "sanity";

const toy = defineType({
  name: "toy",
  title: "Juguete",
  type: "document",
  preview: {
    select: {
      title: "toyName",
      subtitle: "toyDescription",
    },
  },
  fields: [
    defineField({
      name: "toyName",
      type: "string",
      title: "Nombre del juguete.",
      description: "Completar con el nombre del juguete.",
    }),
    defineField({
      name: "toySlug",
      type: "slug",
      title: "Slug",
      description:
        "Slug a traves del cual se accederá al juguete desde la web.",
      options: {
        source: "toyName",
        maxLength: 200,
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    }),
    defineField({
      name: "toyDescription",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
      title: "Descripción del juguete.",
      description: "Completar con la descripción del juguete.",
    }),
    defineField({
      name: "images",
      type: "array",
      title: "Recursos visuales.",
      description: "Incluir recursos visuales del juguete.",
      of: [
        defineArrayMember({ title: "Imagen", type: "img" }),
        defineArrayMember({ type: "video" }),
      ],
    }),
    defineField({
      name: "available",
      type: "boolean",
      title: "¿El juguete se encuentra disponible?",
      description: "Indicar si el juguete se encuentra disponible o no.",
    }),
    defineField({
      title: "Lista de características",
      name: "characteristics_list_array",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "characteristics" }],
        }),
      ],
    }),
    defineField({
      title: "Lista de documentos",
      name: "documents_list",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "doc" }] })],
    }),
  ],
});

export default toy;
