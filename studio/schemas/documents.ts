import { DocumentsIcon } from "@sanity/icons";

export default {
  title: "Documentos",
  name: "documents",
  type: "document",
  icon: DocumentsIcon,
  fields: [
    {
      title: "Categoría",
      name: "category",
      type: "string",
    },
    {
      title: "Lista de documentos",
      name: "documents_list",
      type: "array",
      of: [{ type: "reference", to: [{ type: "doc" }] }],
    },
  ],
};
