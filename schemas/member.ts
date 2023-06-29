import { UserIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

const member = defineType({
  name: "member",
  title: "Team Member",
  type: "document",
  // @ts-expect-error Wrong type
  icon: UserIcon as unknown,
  preview: {
    select: { title: "name", media: "image" },
  },
  fields: [
    defineField({
      name: "name",
      title: "Nombre",
      type: "string",
    }),
    defineField({
      name: "surname",
      title: "Apellido",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Rol",
      type: "string",
    }),
    defineField({
      name: "pronouns",
      title: "Pronombres",
      type: "string",
    }),
    defineField({
      name: "contactLinks",
      type: "array",
      title: "Links de contacto",
      of: [
        defineArrayMember({
          title: "Link de contacto",
          name: "contactLink",
          type: "link",
        }),
      ],
    }),
    defineField({
      name: "image",
      title: "Avatar",
      type: "img",
    }),
  ],
});

export default member;
