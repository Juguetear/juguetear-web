import { defineField, defineType } from "sanity";

const loanApplication = defineType({
  title: "Solicitudes de préstamo",
  name: "loanApplication",
  type: "document",
  fields: [
    defineField({
      title: "Datos del adulto responsable",
      name: "responsable",
      type: "object",
      fields: [
        defineField({
          title: "Nombre y apellido",
          name: "fullname",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: "DNI",
          name: "dni",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: "Calle",
          name: "street",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: "Altura",
          name: "streetNumber",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: "Piso",
          name: "floor",
          type: "string",
        }),
        defineField({
          title: "Departamento",
          name: "department",
          type: "string",
        }),
        defineField({
          title: "Localidad",
          name: "locality",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: "Código Postal",
          name: "postalCode",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: "Codigo de Área",
          name: "codeAreaNumber",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: "Teléfono de contacto",
          name: "phoneNumber",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: "Email de contacto",
          name: "email",
          type: "string",
          validation: (Rule) => Rule.email().required(),
        }),
        defineField({
          title: "Vínculo con el niño o niña",
          name: "relation",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      title: "Datos del niño o niña",
      name: "recipient",
      type: "object",
      fields: [
        defineField({
          title: "Nombre y apellido del niño o niña",
          name: "fullname",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: "DNI del niño o niña",
          name: "dni",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: "¿Qué problemática motriz tiene?",
          name: "disability",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: "Información relevante",
          name: "additionalInfo",
          type: "text",
        }),
      ],
    }),
  ],
});

export default loanApplication;
