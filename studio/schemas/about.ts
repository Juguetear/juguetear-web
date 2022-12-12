import { UserIcon } from "@sanity/icons";

const about = [
  {
    name: "title",
    title: "Titulo",
    type: "string",
  },
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
]

export default {
  name: "about",
  title: "Acerca del proyecto",
  type: "document",
  icon: UserIcon,
  fields: [
    {
      name: "pageTitle",
      type: "string",
      initialValue: "Información sobre el proyecto.",
      hidden: true,
    },
    ...about
  ],
  preview: {
    select: { title: "pageTitle" },
  }
};
