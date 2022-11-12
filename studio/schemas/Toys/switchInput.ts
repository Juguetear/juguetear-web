export default {
  name: "inputQuantity",
  title: "Cantidad de inputs",
  type: "document",
  fields: [
    {
      name: "toyName",
      title: "Nombre del juguete.",
      type: "string",
      description: "Indicar el nombre del juguete.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "inputQty",
      type: "number",
      title: "Cantidad de inputs que contiene el juguete.",
      description: "Ingresar la cantidad de inputs que contiene el juguete.",
      validation: (Rule) => Rule.integer(),
    },
  ],
  preview: {
    select: {
      title: "toyName",
    },
    prepare({ title }) {
      return {
        title: `Cantidad de inputs del juguete ${title}`,
      };
    },
  },
};
