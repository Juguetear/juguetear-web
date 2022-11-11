import { UserIcon } from "@sanity/icons";

export default {
  name: "memberlist",
  title: "Member list",
  type: "document",
  icon: UserIcon,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "member",
      title: "Member",
      type: "array",
      of: [{ type: "reference", to: [{ type: "member" }] }],
    },
  ],
  preview: {
    select: { title: "title" },
  },
};
