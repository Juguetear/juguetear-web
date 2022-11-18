const baseObject = {
  title: "",
  name: "",
  type: "boolean",
  initialValue: false,
  options: { layout: "checkbox" },
};

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
        slugify: (input) =>
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
      name: "imagesGallery",
      type: "array",
      title: "Imágenes del juguete.",
      description: "Incluir imágenes del juguete.",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "available",
      type: "boolean",
      title: "¿El juguete se encuentra disponible?",
      description: "Indicar si el juguete se encuentra disponible o no.",
    },
    {
      title: "Movimiento del juguete",
      name: "movement",
      type: "object",
      fieldsets: [{ name: "movimiento", title: "Movimiento del juguete" }],
      fields: [
        { ...baseObject, name: "sinMov", title: "Sin movimiento" },
        {
          ...baseObject,
          name: "forwardMvt",
          title: "Movimiento hacia delante",
        },
        {
          ...baseObject,
          name: "backwardsMvt",
          title: "Movimiento hacia atrás",
        },
        {
          ...baseObject,
          name: "leftMvt",
          title: "Movimiento hacia la izquierda",
        },
        {
          ...baseObject,
          name: "rightMvt",
          title: "Movimiento hacia la izquierda",
        },
        {
          ...baseObject,
          name: "randomMvt",
          title: "Movimiento aleatorio",
        },
      ],
    },
    {
      title: "Inputs del juguete",
      name: "input",
      type: "object",
      fieldsets: [{ name: "input", title: "Inputs del juguete" }],
      fields: [
        {
          name: "inputQty",
          title: "Cantidad de inputs",
          type: "number",
        },
      ],
    },
    {
      title: "Luces del juguete",
      name: "light",
      type: "object",
      fieldsets: [{ name: "luces", title: "Luces del juguete" }],
      fields: [
        { ...baseObject, name: "noLights", title: "Sin luces" },
        {
          ...baseObject,
          name: "switchLights",
          title: "Luces accionadas por un interruptor",
        },
        {
          ...baseObject,
          name: "randomLights",
          title: "Luces aleatorias",
        },
      ],
    },
    {
      title: "Sonidos del juguete",
      name: "sound",
      type: "object",
      fieldsets: [{ name: "sonidos", title: "Sonidos del juguete" }],
      fields: [
        {
          ...baseObject,
          name: "noSound",
          title: "Sin sonido",
        },
        {
          ...baseObject,
          name: "switchSound",
          title: "Sonido accionado por un interruptor",
        },
        {
          ...baseObject,
          name: "randomSound",
          title: "Sonido aleatorio",
        },
      ],
    },
    {
      name: "documentList",
      type: "reference",
      to: [{ type: "doc" }],
      title: "Lista de documentos.",
      description: 'Referencia hacia "Lista de documentos"',
    },
  ],
  preview: {
    select: {
      title: "toyName",
      subtitle: "toyDescription",
    },
  },
};
