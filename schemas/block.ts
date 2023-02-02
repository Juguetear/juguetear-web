import { defineType } from "sanity";

export const block = defineType({
  title: "Contenido",
  name: "content",
  type: "array",
  of: [
    { type: "block", title: "Texto", name: "blockscontent" },
    { type: "img", title: "Image", name: "blocksimage" },
  ],
});
