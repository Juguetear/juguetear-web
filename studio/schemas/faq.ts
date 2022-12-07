import { DocumentIcon } from "@sanity/icons";

const question = {
  title: "Pregunta",
  name: "question",
  type: "string",
};

const answer = {
  title: "Respuesta",
  name: "answer",
  type: "array",
  of: [{ type: "block" }],
};

const faqList = {
  title: "Listado de preguntas y respuestas",
  description:
    "Este listado se mostrará en la página web. Para ordenar el listado, haga click en el primer ícono de la izquierda y arrastre la pregunta a la posición deseada.",
  name: "faqList",
  type: "array",
  of: [
    {
      icon: DocumentIcon,
      name: "questionAndAnswer",
      type: "object",
      fields: [question, answer],
    },
  ],
};

export default {
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
    faqList,
  ],
  preview: {
    select: { title: "pageTitle" },
  },
};
