import { defineArrayMember, defineType } from "sanity";

const block = defineType({
  title: "Contenido",
  name: "content",
  type: "array",
  of: [
    defineArrayMember({ type: "block", title: "Texto", name: "blockscontent" }),
    defineArrayMember({ type: "img", title: "Image", name: "blocksimage" }),
  ],
});

export default block;
