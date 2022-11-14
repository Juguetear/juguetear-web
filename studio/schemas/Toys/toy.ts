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
      name: "toyDescription",
      type: "array",
      of: [{ type: "block" }],
      title: "Descripción del juguete.",
      description: "Completar con la descripción del juguete.",
    },
    {
      name: "toyPics",
      type: "image",
      title: "Imágenes del juguete.",
      description: "Incluir imágenes del juguete.",
      options: {
        hotspot: true,
      },
    },
    {
      name: "toySlug",
      type: "slug",
      title: "Slug",
      description:
        "Slug a traves del cual se accederá al juguete desde la web.",
    },
    {
      name: "available",
      type: "boolean",
      title: "¿El juguete se encuentra disponible?",
      description: "Indicar si el juguete se encuentra disponible o no.",
    },
    {
      name: "movementRef",
      type: "reference",
      to: [{ type: "movement" }],
      title: "Movimiento.",
      description: 'Referencia hacia el documento "Movimiento del juguete"',
    },
    {
      name: "inputRef",
      type: "reference",
      to: [{ type: "inputQuantity" }],
      title: "Inputs.",
      description: 'Referencia hacia el documento "Cantidad de inputs"',
    },
    {
      name: "lightsRef",
      type: "reference",
      to: [{ type: "lights" }],
      title: "Luces.",
      description: 'Referencia hacia el documento "Luces del juguete"',
    },
    {
      name: "soundRef",
      type: "reference",
      to: [{ type: "sound" }],
      title: "Movimiento.",
      description: 'Referencia hacia el documento "Sonido del juguete"',
    },
    // {
    // TODO Complete type with the name of the DocumentList schema and check the rest of the field.
    //   name: 'documentList',
    //   type: 'reference',
    //   to: [{ type: '' }],
    //   title: 'Lista de documentos.',
    //   description: 'Referencia hacia "Lista de documentos"',
    // },
  ],
  preview: {
    select: {
      title: "toyName",
      subtitle: "toyDescription",
    },
  },
};
