import { defineField, defineType } from "sanity";

const accessibilityDeclaration = defineType({
  name: "accessibilityDeclaration",
  type: "document",
  title: "Declaración de accesibilidad",
  description: "Declaración que se mostrará en la pagina web.",
  fields: [
    defineField({
      name: "pageName",
      type: "string",
      initialValue: "Página de declaración de accesibilidad",
      hidden: true,
    }),
    defineField({
      name: "content",
      type: "content",
      title: "Contenido",
    }),
  ],
  preview: { select: { title: "pageName" } },
});

export default accessibilityDeclaration;
