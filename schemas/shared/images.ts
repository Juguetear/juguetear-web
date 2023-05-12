import { defineArrayMember, defineField, defineType } from "sanity";

const images = defineType({
  title: "Imágenes",
  name: "images",
  type: "object",
  description: "Cada imagen necesita un texto alternativo.",
  fields: [
    defineField({
      type: "array",
      name: "images",
      title: "Imagen/es",
      of: [
        defineArrayMember({
          type: "img",
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
