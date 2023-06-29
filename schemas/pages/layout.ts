import { DashboardIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

const layout = defineType({
  title: "Layout de la website",
  name: "layout",
  type: "document",
  // @ts-expect-error Wrong type
  icon: DashboardIcon as unknown,
  fields: [
    defineField({
      title: "Navbar Links",
      name: "navbarLinks",
      type: "array",
      of: [
        defineArrayMember({
          title: "Path/URL",
          name: "pageRef",
          type: "reference",
          to: [{ type: "page" }],
        }),
      ],
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      title: "Footer Links",
      name: "footerLinks",
      type: "array",
      of: [
        defineArrayMember({
          name: "absoluteUrl",
          type: "link",
        }),
        defineArrayMember({
          title: "Path/URL",
          name: "pageRef",
          type: "reference",
          to: [{ type: "page" }],
        }),
      ],
      validation: (Rule) => Rule.unique(),
    }),
  ],
  preview: {
    prepare: () => ({ title: "Layout de la website" }),
  },
});

export default layout;
