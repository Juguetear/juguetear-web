// TODO: Extract to a new schema?, it seems that it can be reused.
const textFields = [
  {
    title: "Título",
    name: "title",
    type: "string",
  },
  {
    title: "Descripción",
    name: "description",
    type: "string",
  },
];

const heroModule = {
  title: "Sección principal",
  name: "heroModule",
  type: "object",
  fields: [
    ...textFields,
    {
      title: "Llamada a la acción",
      name: "cta",
      type: "link",
    },
    {
      title: "Foto",
      name: "photo",
      type: "img",
    },
  ],
};

const featuredToysModule = {
  title: "Sección juguetes destacados",
  name: "featuredToysModule",
  type: "object",
  fields: [
    ...textFields,
    {
      title: "Llamada a la acción",
      name: "cta",
      type: "link",
    },
    {
      title: "Juguetes",
      name: "toys",
      type: "array",
      of: [{ type: "reference", to: [{ type: "toy" }] }],
    },
  ],
};

const twoImagesModule = {
  title: "Sección destacado de dos fotos",
  name: "twoImagesModule",
  type: "object",
  fields: [
    ...textFields,
    {
      title: "Fotos",
      name: "photos",
      type: "array",
      of: [{ type: "img" }],
    },
  ],
};

const cooperateModule = {
  title: "Sección cooperar",
  name: "cooperateModule",
  type: "object",
  fields: [
    ...textFields,
    {
      title: "Secciones",
      name: "blocks",
      type: "array",
      of: [
        {
          title: "modulo",
          name: "blockModule",
          type: "object",
          fields: [...textFields, { name: "image", type: "img" }],
        },
      ],
    },
    {
      title: "Mensaje destacado",
      name: "callOut",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default {
  title: "Home",
  name: "homePage",
  type: "document",
  fields: [
    {
      ...textFields[0],
      initialValue: "Página de inicio",
      hidden: true,
    },
    heroModule,
    featuredToysModule,
    twoImagesModule,
    cooperateModule,
  ],
  preview: { select: { title: "title" } },
};
