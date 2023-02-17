import { defineArrayMember, defineField, defineType } from "sanity";

// TODO: Extract to a new schema?, it seems that it can be reused.
const textFields = [
  defineField({
    title: "Título",
    name: "title",
    type: "string",
  }),
  defineField({
    title: "Descripción",
    name: "description",
    type: "string",
  }),
];

const heroModule = defineType({
  title: "Sección principal",
  name: "heroModule",
  type: "object",
  fields: [
    ...textFields,
    defineField({
      title: "Llamada a la acción",
      name: "cta",
      type: "link",
    }),
    defineField({
      title: "Foto",
      name: "photo",
      type: "img",
    }),
  ],
});

const featuredToysModule = defineType({
  title: "Sección juguetes destacados",
  name: "featuredToysModule",
  type: "object",
  fields: [
    ...textFields,
    defineField({
      title: "Llamada a la acción",
      name: "cta",
      type: "link",
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
});

const twoImagesModule = defineType({
  title: "Sección destacado de dos fotos",
  name: "twoImagesModule",
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
    }),
  ],
});

const cooperateModule = defineType({
  title: "Sección cooperar",
  name: "cooperateModule",
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
          name: "blockModule",
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
});

export default defineType({
  title: "Home",
  name: "homePage",
  type: "document",
  fields: [
    defineField({
      ...textFields[0],
      initialValue: "Página de inicio",
      hidden: true,
    }),
    defineField(heroModule),
    defineField(featuredToysModule),
    defineField(twoImagesModule),
    defineField(cooperateModule),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
