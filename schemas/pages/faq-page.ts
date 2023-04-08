import { DocumentIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

const faqPage = defineType({
  title: "Preguntas y respuestas frequentes",
  name: "faqPage",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
    }),
    defineField({
      title: "Párrafo",
      name: "paragraph",
      type: "string",
    }),
    defineField({
      title: "Listado de preguntas y respuestas",
      description:
        "Este listado se mostrará en la página web. Para ordenar el listado, haga click en el primer ícono de la izquierda y arrastre la pregunta a la posición deseada.",
      name: "faqList",
      type: "array",
      of: [
        defineArrayMember({
          icon: DocumentIcon,
          name: "faq",
          type: "object",
          fields: [
            defineField({
              title: "Pregunta",
              name: "question",
              type: "string",
            }),
            defineField({
              title: "Respuesta",
              name: "answer",
              type: "array",
              of: [defineArrayMember({ type: "block" })],
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Página de preguntas y respuestas frequentes" }),
  },
});

export default faqPage;
