export default {
  name: "img",
  options: { hotspot: true },
  type: "image",
  fields: [
    {
      name: "alt_text",
      title: "Texto alternativo",
      type: "string",
      options: { isHighlighted: true },
      validation: (Rule: any) =>
        Rule.required().error(
          "Las imágenes deben contener un texto alternativo"
        ),
    },
  ],
};
