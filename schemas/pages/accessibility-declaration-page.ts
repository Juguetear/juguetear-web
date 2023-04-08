import { defineField, defineType } from "sanity";

const accessibilityDeclarationPage = defineType({
  name: "accessibilityDeclarationPage",
  type: "document",
  title: "Declaración de accesibilidad",
  description: "Declaración que se mostrará en la pagina web.",
  fields: [
    defineField({
      name: "content",
      type: "content",
      title: "Contenido",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Página de declaración de accesibilidad" }),
  },
});

export default accessibilityDeclarationPage;
