import { DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

const doc = defineType({
  name: "doc",
  title: "Documentos",
  type: "document",
  // @ts-expect-error Wrong type
  icon: DocumentIcon as unknown,
  fields: [
    defineField({
      name: "title",
      title: "Titulo",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Descripción",
      type: "string",
    }),
    defineField({
      name: "file",
      title: "Archivo",
      type: "file",
    }),
  ],
});

export default doc;
