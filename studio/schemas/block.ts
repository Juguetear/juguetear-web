export default {
  name: "content",
  type: "array",
  title: "Contenido",
  of: [
    { type: "block", title: "Texto", name: "blockscontent" },
    { type: "img", title: "Image", name: "blocksimage" },
  ],
};
