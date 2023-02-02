import { block } from "../../schemas/block";

export default {
  name: "accessibilityDeclaration",
  type: "document",
  title: "Declaración de accesibilidad",
  description: "Declaración que se mostrará en la pagina web.",
  fields: [
    {
      name: "pageName",
      type: "string",
      initialValue: "Página de declaración de accesibilidad",
      hidden: true,
    },
    block,
  ],
  preview: { select: { title: "pageName" } },
};
