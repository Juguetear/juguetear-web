export default {
  name: "toy",
  title: "Juguete",
  type: "document",
  fields: [
    {
      name: "toyName",
      type: "string",
      title: "Nombre del juguete.",
      description: "Completar con el nombre del juguete.",
    },
    {
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
    },
    {
      name: "toyDescription",
      type: "array",
      of: [{ type: "block" }],
      title: "Descripción del juguete.",
      description: "Completar con la descripción del juguete.",
    },
    {
      name: "images",
      type: "array",
      title: "Imágenes del juguete.",
      description: "Incluir imágenes del juguete.",
      of: [{ title: "Imagen", type: "img" }],
    },
    {
      name: "available",
      type: "boolean",
      title: "¿El juguete se encuentra disponible?",
      description: "Indicar si el juguete se encuentra disponible o no.",
    },
    {
      title: "Lista de características",
      name: "characteristics_list_array",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "characteristics" }],
        },
      ],
    },
    {
      title: "Lista de documentos",
      name: "documents_list",
      type: "array",
      of: [{ type: "reference", to: [{ type: "doc" }] }],
    },
  ],
  preview: {
    select: {
      title: "toyName",
      subtitle: "toyDescription",
    },
  },
};
