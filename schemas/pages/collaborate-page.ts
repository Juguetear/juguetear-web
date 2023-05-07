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
          type: "images",
        }),
      ],
    }),
    defineField({
      name: "description",
      title: "Descripción sobre cómo colaborar con el proyecto",
      description:
        "Acá podrás editar el contenido que se mostrará en esta sección.",
      type: "content",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Colaborar con el proyecto" }),
  },
});

export default collaboratePage;
