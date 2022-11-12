import { HelpCircleIcon } from "@sanity/icons";

export default {
  title: "FAQ",
  name: "faq",
  type: "document",
  icon: HelpCircleIcon,
  fields: [
    {
      title: "Pregunta",
      name: "question",
      type: "string",
    },
    {
      title: "Respuesta",
      name: "answer",
      type: "string",
    },
  ],
};
