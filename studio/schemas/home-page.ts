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
  name: "heroModule",
  type: "object",
  fields: [
    ...textFields,
    {
      name: "cta",
      type: "link",
    },
    {
      title: "Fotos",
      name: "photo",
      type: "img",
    },
  ],
};

const featuredToysModule = {
  name: "featuredToysModule",
  type: "object",
  fields: [
    ...textFields,
    {
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
  name: "cooperateModule",
  type: "object",
  fields: [
    ...textFields,
    {
      name: "blocks",
      type: "array",
      of: [
        {
          name: "blockModule",
          type: "object",
          fields: [...textFields, { name: "image", type: "img" }],
        },
      ],
    },
    {
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
