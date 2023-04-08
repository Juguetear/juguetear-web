import { defineField, defineType } from "sanity";

const collaboratePage = defineType({
  name: "collaboratePage",
  title: "Colaborar con el proyecto",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titulo",
      type: "string",
    }),
    defineField({
      name: "heroSection",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Título de la sección",
          type: "string",
        }),
        defineField({
          title: "Párrafo",
          name: "paragraph",
          type: "string",
        }),
        defineField({
          name: "image",
          type: "image",
        }),
      ],
    }),
    defineField({
      name: "sections",
      title: "Lista de secciones sobre cómo colaborar con el proyecto",
      description:
        "Este listado se mostrará en la página web. Para ordenar el listado, haga click en el primer ícono de la izquierda y arrastre la sección a la posición deseada.",
      type: "content",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Colaborar con el proyecto" }),
  },
});

export default collaboratePage;
