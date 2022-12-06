import { HelpCircleIcon } from "@sanity/icons";

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

export default {
  title: "FAQ",
  name: "faq",
  type: "document",
  icon: HelpCircleIcon,
  fields: [
    {
      title: "Listado de preguntas y respuestas",
      name: "faqList",
      type: "array",
      of: [
        {
          icon: HelpCircleIcon,
          name: "questionAndAnswer",
          type: "object",
          fields: [question, answer],
        },
      ],
    },
  ],
  preview: {
    select: { title: "fields[0].name" },
    prepare({ title }: { title: string }) {
      return {
        title: title,
      };
    },
  },
};
