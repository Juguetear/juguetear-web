import { MenuIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

const CharacteristicsList = defineType({
  name: "characteristicsCategory",
  title: "Categorías de características",
  type: "document",
  icon: MenuIcon,
  fields: [
    defineField({
      name: "name",
      title: "Nombre de la categoria de las caracteristicas",
      type: "string",
    }),
  ],
});

export default CharacteristicsList;
