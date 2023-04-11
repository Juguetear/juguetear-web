import { DashboardIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

const layout = defineType({
  title: "Layout de la website",
  name: "layout",
  type: "document",
  icon: DashboardIcon,
  fields: [
    defineField({
      title: "Navbar Links",
      name: "navbarLinks",
      type: "array",
      of: [
        defineArrayMember({
          name: "absoluteUrl",
          type: "link",
        }),
        defineArrayMember({
          name: "relativeUrl",
          type: "relativeUrl",
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
          name: "relativeUrl",
          type: "relativeUrl",
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
