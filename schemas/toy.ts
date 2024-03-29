import { defineArrayMember, defineField, defineType } from "sanity";

const toy = defineType({
  name: "toy",
  title: "Juguete",
  type: "document",
  preview: {
    select: {
      title: "name",
      subtitle: "description",
    },
  },
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Nombre del juguete.",
      description: "Completar con el nombre del juguete.",
    }),
    defineField({
      name: "shortDescription",
      type: "string",
      title: "Descripción corta del juguete.",
      description: "Completar con una descripción corta del juguete.",
    }),
    defineField({
      name: "highlight",
      title: "Destacar",
      type: "boolean",
      description:
        "Si se encuentra destacado, será mostrado en el carrusel de la pagina de inicio.",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      description:
        "Slug a traves del cual se accederá al juguete desde la web.",
      options: {
        source: "name",
        maxLength: 200,
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    }),
    defineField({
      name: "description",
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
      name: "isAvailable",
      type: "boolean",
      title: "¿El juguete se encuentra disponible?",
      description: "Indicar si el juguete se encuentra disponible o no.",
    }),
    defineField({
      title: "Lista de características",
      name: "characteristics",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "characteristic" }],
        }),
      ],
    }),
    defineField({
      title: "Lista de documentos",
      name: "documents",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "doc" }] })],
    }),
  ],
});

export default toy;
