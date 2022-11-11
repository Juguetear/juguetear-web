export default {
  name: "inputQuantity",
  title: "Cantidad de inputs",
  type: "document",
  fields: [
    {
      name: "inputQty",
      type: "number",
      title: "Cantidad de inputs que contiene el juguete.",
      description: "Ingresar la cantidad de inputs que contiene el juguete.",
      validation: (Rule) => Rule.integer(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Cantidad de inputs.`,
      };
    },
  },
};
