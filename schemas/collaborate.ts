import { defineArrayMember, defineField, defineType } from "sanity";

const contentBlock = [
  defineField({
    name: "sectionTitle",
    title: "Título de la sección",
    type: "document",
    fields: [
      defineField({
        name: "content",
        type: "content",
        title: "Contenido",
      }),
    ],
  }),
];

const sectionList = defineField({
  name: "sectionList",
  title: "Lista de secciones sobre cómo colaborar con el proyecto",
  description:
    "Este listado se mostrará en la página web. Para ordenar el listado, haga click en el primer ícono de la izquierda y arrastre la sección a la posición deseada.",
  type: "array",
  of: [
    defineArrayMember({
      name: "section",
      type: "object",
      fields: [...contentBlock],
    }),
  ],
});

const collaborate = defineType({
  name: "collaborate",
  title: "Colaborar con el proyecto",
  type: "document",
  fields: [
    defineField({
      name: "pageTitle",
      type: "string",
      initialValue: "Colaborar con el proyecto",
      hidden: true,
    }),
    sectionList,
  ],
  preview: {
    select: { title: "pageTitle" },
  },
});

export default collaborate;
