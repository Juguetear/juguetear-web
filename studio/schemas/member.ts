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
      name: "pronouns",
      title: "Pronombres",
      type: "string",
    },
    {
      name: "contactLinks",
      type: "array",
      of: [
        {
          title: "Link de contacto",
          name: "contactLink",
          type: "link",
        },
      ],
      title: "Links de contacto",
    },
    {
      name: "image",
      title: "Avatar",
      type: "img",
    },
  ],
  preview: {
    select: { title: "name", media: "image" },
  },
};
