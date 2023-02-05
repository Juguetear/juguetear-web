import { EditIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

const characteristics = defineType({
  name: "characteristics",
  title: "Características",
  type: "document",
  icon: EditIcon,
  fields: [
    defineField({
      name: "characteristic_name",
      title: "Nombre de la característica",
      type: "string",
    }),
    defineField({
      name: "characteristics_category",
      title: "A qué categoría pertenece?",
      type: "reference",
      to: [{ type: "characteristics_list" }],
    }),
  ],
  preview: {
    select: {
      title: "characteristic_name",
      subtitle: "characteristics_category.characteristics_list_name",
    },
  },
});

export default characteristics;
