import { block } from "../../schemas/block";

const contentBlock = [
  {
    name: "sectionTitle",
    title: "Título de la sección",
    type: "string",
  },
  block,
];

const sectionList = {
  name: "sectionList",
  title: "Lista de secciones sobre cómo colaborar con el proyecto",
  description:
    "Este listado se mostrará en la página web. Para ordenar el listado, haga click en el primer ícono de la izquierda y arrastre la sección a la posición deseada.",
  type: "array",
  of: [
    {
      name: "section",
      type: "object",
      fields: [...contentBlock],
    },
  ],
};

export default {
  name: "collaborate",
  title: "Colaborar con el proyecto",
  type: "document",
  fields: [
    {
      name: "pageTitle",
      type: "string",
      initialValue: "Colaborar con el proyecto",
      hidden: true,
    },
    sectionList,
  ],
  preview: {
    select: { title: "pageTitle" },
  },
};
