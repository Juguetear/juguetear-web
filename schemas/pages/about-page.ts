import { UserIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

const aboutPage = defineType({
  name: "aboutPage",
  title: "Acerca del proyecto",
  type: "document",
  // @ts-expect-error Wrong type
  icon: UserIcon as unknown,
  preview: {
    prepare: () => ({ title: "Información sobre el proyecto." }),
  },
  fields: [
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

export default aboutPage;
