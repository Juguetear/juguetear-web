import { UserIcon } from "@sanity/icons";

export default {
  name: "about",
  title: "Acerca del proyecto",
  type: "document",
  icon: UserIcon,
  fields: [
    {
      name: "content",
      type: "content",
      title: "Contenido",
    },
    {
      name: "team",
      title: "Equipo",
      type: "array",
      of: [{ type: "reference", to: [{ type: "member" }] }],
    },
  ],
  preview: {
    select: { title: "name", media: "image" },
  },
};
