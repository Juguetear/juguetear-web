import { DocumentsIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

const documents = defineType({
  title: "Documentos",
  name: "documents",
  type: "document",
  icon: DocumentsIcon,
  fields: [
    defineField({
      title: "Categoría",
      name: "category",
      type: "string",
    }),
    defineField({
      title: "Lista de documentos",
      name: "documents_list",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "doc" }],
        }),
      ],
    }),
  ],
});

export default documents;
