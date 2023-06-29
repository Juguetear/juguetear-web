import { EditIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

const characteristics = defineType({
  name: "characteristic",
  title: "Características",
  type: "document",
  // @ts-expect-error Wrong type
  icon: EditIcon as unknown,
  fields: [
    defineField({
      name: "name",
      title: "Nombre de la característica",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "A qué categoría pertenece?",
      type: "reference",
      to: [{ type: "characteristicsCategory" }],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category.name",
    },
  },
});

export default characteristics;
