// TODO: Extract to a new schema?, it seen's that it can be reused.
const textFields = [
  {
    name: "title",
    type: "string",
  },
  {
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
