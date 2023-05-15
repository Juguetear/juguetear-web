import { DocumentsIcon } from "@sanity/icons";
import { pages } from "deskStructure";
import { defineField, defineType } from "sanity";

const page = defineType({
  title: "Pages",
  name: "page",
  type: "document",
  icon: DocumentsIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "path",
      type: "url",
      initialValue: "/",
      validation: (Rule) =>
        Rule.required().uri({ relativeOnly: true, allowRelative: true }),
    }),
    defineField({
      name: "pageRef",
      type: "reference",
      to: pages.filter((type) => type !== "layout").map((type) => ({ type })),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "path",
    },
  },
});

export default page;
