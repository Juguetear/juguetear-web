import { defineField, defineType } from "sanity";

const image = defineType({
  title: "Imagen con texto alternativo",
  name: "img",
  options: { hotspot: true },
  type: "image",
  fields: [
    defineField({
      name: "altText",
      title: "Texto alternativo",
      type: "string",
      validation: (Rule) =>
        Rule.required().error(
          "Las imágenes deben contener un texto alternativo"
        ),
    }),
  ],
  validation: (Rule) =>
    Rule.required().error(
      "Para utilizar este componente es necesario una imagen."
    ),
});

export default image;
