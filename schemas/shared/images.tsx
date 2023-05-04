import { defineArrayMember, defineField, defineType } from "sanity";

const images = defineType({
  title: "Imágenes",
  name: "images",
  type: "object",
  description: "Cada imagen necesita un texto alternativo.",
  fields: [
    defineField({
      type: "img",
      name: "firstImg",
      title: "Primera imagen",
    }),
    defineField({
      type: "img",
      name: "secondImg",
      title: "Segunda imagen",
    }),
  ],
  // FIX: Add small img for preview.
});

export default images;
