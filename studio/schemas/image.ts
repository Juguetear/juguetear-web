export default {
  name: "img",
  title: "Imagen con texto alternativo",
  options: { hotspot: true },
  type: "image",
  fields: [
    {
      name: "alt_text",
      title: "Texto alternativo",
      type: "string",
      validation: (Rule: any) =>
        Rule.required().error(
          "Las imágenes deben contener un texto alternativo"
        ),
    },
  ],
};
