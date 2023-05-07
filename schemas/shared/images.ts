import { defineArrayMember, defineField, defineType } from "sanity";

const images = defineType({
  title: "Imágenes",
  name: "images",
  type: "object",
  description: "Cada imagen necesita un texto alternativo.",
  fields: [
    defineField({
      type: "array",
      name: "imgContainer",
      title: "Imagen/es",
      of: [
        defineArrayMember({
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
        }),
      ],
      validation: (Rule) =>
        Rule.required()
          .max(2)
          .error("Este componente permite máximo dos imágenes."),
    }),
  ],
  // FIX: Add small img for preview.
});

export default images;
