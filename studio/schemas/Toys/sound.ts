export default {
  name: "sound",
  title: "Sonido del juguete",
  type: "document",
  fields: [
    {
      name: "noSound",
      type: "boolean",
      title: "El juguete no tiene sonido.",
      description: "Seleccionar en caso de que el juguete no tengas sonido.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "switchSound",
      type: "boolean",
      title: "El juguete tiene un interruptor para activar el sonido.",
      description:
        "Seleccionar en caso de que el juguete tenga un interruptor/switch para activar/desactivar el sonido del mismo.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "randomSound",
      type: "boolean",
      title: "El juguete tiene sonido aleatorio.",
      description: "Seleccionar en caso de que el juguete no tengas sonido.",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Sonido del juguete.`,
      };
    },
  },
};
