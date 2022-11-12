import { DocumentIcon } from "@sanity/icons";

export default {
  name: "doc",
  title: "Documento",
  type: "document",
  icon: DocumentIcon,
  fields: [
    {
      name: "title",
      title: "Titulo",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Descripción",
      type: "string",
    },
    {
      name: "file",
      title: "Archivo",
      type: "file",
    },
  ],
};
