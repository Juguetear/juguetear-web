import { UserIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

const about = defineType({
  name: "about",
  title: "Acerca del proyecto",
  type: "document",
  icon: UserIcon,
  preview: {
    select: { title: "pageTitle" },
  },
  fields: [
    defineField({
      name: "pageTitle",
      type: "string",
      initialValue: "Información sobre el proyecto.",
      hidden: true,
    }),
    defineField({
      name: "title",
      title: "Titulo",
      type: "string",
    }),
    defineField({
      name: "content",
      type: "content",
      title: "Contenido",
    }),
    defineField({
      name: "team",
      title: "Equipo",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "member" }] })],
    }),
  ],
});

export default about;
