import { defineArrayMember, defineType } from "sanity";

const content = defineType({
  title: "Contenido",
  name: "content",
  type: "array",
  of: [
    defineArrayMember({ type: "block", title: "Texto", name: "blockscontent" }),
    defineArrayMember({ type: "images" }),
  ],
});

export default content;
