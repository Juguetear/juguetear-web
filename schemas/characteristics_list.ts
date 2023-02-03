import { MenuIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

const CharacteristicsList = defineType({
  name: "characteristics_list",
  title: "Categorías de Características",
  type: "document",
  icon: MenuIcon,
  fields: [
    defineField({
      name: "characteristics_list_name",
      title: "Nombre de la categoria de las caracteristicas",
      type: "string",
    }),
  ],
});

export default CharacteristicsList;
