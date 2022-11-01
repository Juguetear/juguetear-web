import { LinkIcon } from "@sanity/icons";

export default {
  name: "link",
  title: "Link",
  type: "document",
  icon: LinkIcon,
  fields: [
    {
      name: "name",
      title: "Nombre",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "string",
    },
  ],
  preview: {
    select: { title: "name", media: "image" },
  },
};
