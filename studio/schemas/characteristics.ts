import { EditIcon } from "@sanity/icons";

export default {
  name: "characteristics",
  title: "Características",
  type: "document",
  icon: EditIcon,
  fields: [
    {
      name: "characteristic_name",
      title: "Nombre de la característica",
      type: "string",
    },
    {
      name: "characteristics_category",
      title: "A qué categoría pertenece?",
      type: "reference",
      to: [{ type: "characteristics_list" }],
    },
  ],
};
