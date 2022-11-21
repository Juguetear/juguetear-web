import { MenuIcon } from "@sanity/icons";

export default {
  name: "characteristics_list",
  title: "Categorías de Características",
  type: "document",
  icon: MenuIcon,
  fields: [
    {
      name: "characteristics_list_name",
      title: "Nombre de la categoria de las caracteristicas",
      type: "string",
    },
  ],
};
