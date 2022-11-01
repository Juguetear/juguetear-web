import { UserIcon } from "@sanity/icons";

export default {
  name: "member",
  title: "Team Member",
  type: "document",
  icon: UserIcon,
  fields: [
    {
      name: "name",
      title: "Nombre",
      type: "string",
    },
    {
      name: "surname",
      title: "Apellido",
      type: "string",
    },
    {
      name: "role",
      title: "Rol",
      type: "string",
    },
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [{ type: "reference", to: [{ type: "link" }] }],
    },
    {
      name: "image",
      title: "Avatar",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: { title: "name", media: "image" },
  },
};
