import { DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

const doc = defineType({
  name: "doc",
  title: "Documentos",
  type: "document",
  icon: DocumentIcon,
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
