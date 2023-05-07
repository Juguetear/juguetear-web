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
      title: "Primera imagen",
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
    }),
  ],
  // FIX: Add small img for preview.
});

export default images;
