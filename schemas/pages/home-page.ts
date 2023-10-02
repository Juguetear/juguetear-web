import { defineArrayMember, defineField, defineType } from "sanity";

const textFields = [
  defineField({
    title: "Título",
    name: "title",
    type: "string",
  }),
  defineField({
    title: "Descripción",
    name: "description",
    type: "block",
  }),
];

const homePage = defineType({
  title: "Home",
  name: "homePage",
  type: "document",
  fields: [
    defineField({
      title: "Sección principal",
      name: "heroSection",
      type: "object",
      fields: [
        ...textFields,
        defineField({
          title: "Llamada a la acción",
          name: "cta",
          type: "relativeUrl",
        }),
        defineField({
          title: "Foto",
          name: "photo",
          type: "img",
        }),
      ],
    }),
    defineField({
      title: "Sección destacado de dos fotos",
      name: "twoImagesSection",
      type: "object",
      fields: [
        ...textFields,
        defineField({
          title: "Fotos",
          name: "photos",
          type: "array",
          of: [
            defineArrayMember({
              type: "img",
            }),
          ],
          validation: (Rule) => Rule.max(2).error("Máximo dos fotos"),
        }),
      ],
    }),
    defineField({
      title: "Sección juguetes destacados",
      name: "featuredToysSection",
      type: "object",
      fields: [
        ...textFields,
        defineField({
          title: "Llamada a la acción",
          name: "cta",
          type: "relativeUrl",
        }),
        defineField({
          title: "Juguetes",
          name: "toys",
          type: "array",
          of: [
            defineArrayMember({
              type: "reference",
              to: [{ type: "toy" }],
            }),
          ],
        }),
      ],
    }),
    defineField({
      title: "Sección cooperar",
      name: "cooperateSection",
      type: "object",
      fields: [
        ...textFields,
        defineField({
          title: "Secciones",
          name: "blocks",
          type: "array",
          of: [
            defineArrayMember({
              title: "modulo",
              name: "blockSection",
              type: "object",
              fields: [
                ...textFields,
                defineField({
                  name: "image",
                  type: "img",
                }),
              ],
            }),
          ],
        }),
        defineField({
          title: "Mensaje destacado",
          name: "callOut",
          type: "array",
          of: [
            defineArrayMember({
              type: "block",
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Página de inicio" }),
  },
});

export default homePage;
