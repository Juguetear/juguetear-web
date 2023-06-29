import { DocumentsIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

const docsCategory = defineType({
  title: "Categorías de documentos",
  name: "docsCategory",
  type: "document",
  // @ts-expect-error Wrong type
  icon: DocumentsIcon as unknown,
  fields: [
    defineField({
      title: "Categoría",
      name: "category",
      type: "string",
    }),
    defineField({
      title: "Lista de documentos",
      name: "documentsList",
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

export default docsCategory;
