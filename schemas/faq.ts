import { DocumentIcon } from "@sanity/icons";
import { defineArrayMember, defineField } from "sanity";

const faqListField = defineField({
  title: "Listado de preguntas y respuestas",
  description:
    "Este listado se mostrará en la página web. Para ordenar el listado, haga click en el primer ícono de la izquierda y arrastre la pregunta a la posición deseada.",
  name: "faqList",
  type: "array",
  of: [
    defineArrayMember({
      icon: DocumentIcon,
      name: "questionAndAnswer",
      type: "object",
      fields: [
        defineField({
          title: "Respuesta",
          name: "answer",
          type: "array",
          of: [defineArrayMember({ type: "block" })],
        }),
        defineField({
          title: "Pregunta",
          name: "question",
          type: "string",
        }),
      ],
    }),
  ],
});

const faq = {
  title: "Preguntas y respuestas frequentes",
  name: "faq",
  type: "document",
  icon: DocumentIcon,
  fields: [
    {
      name: "pageTitle",
      type: "string",
      initialValue: "Página de preguntas y respuestas frequentes",
      hidden: true,
    },
    faqListField,
  ],
  preview: {
    select: { title: "pageTitle" },
  },
};

export default faq;
