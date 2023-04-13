import { LinkIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

const relativeUrl = defineType({
  title: "URL relativa",
  name: "relativeUrl",
  type: "object",
  icon: LinkIcon,
  fields: [
    defineField({
      title: "Nombre para URL",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "URL relativa a la pagina web",
      description: "Debe empezar con un '/'. Ej: '/about-us'",
      name: "url",
      type: "url",
      initialValue: "/",
      validation: (Rule) =>
        Rule.uri({ relativeOnly: true, allowRelative: true }).required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "url",
    },
  },
});

export default relativeUrl;
