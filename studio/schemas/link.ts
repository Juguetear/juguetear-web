export default {
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    {
      title: "Titulo/Nombre de dominio",
      name: "name",
      type: "string",
    },
    {
      title: "Enlace",
      name: "url",
      type: "url",
      validation: (Rule: any) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
    },
  ],
};
