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
