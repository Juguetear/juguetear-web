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
          type: "img",
        }),
      ],
    }),
  ],
  // FIX: Add small img for preview.
});

export default images;
