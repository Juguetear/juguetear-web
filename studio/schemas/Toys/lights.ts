export default {
  name: "lights",
  title: "Luces del juguete",
  type: "document",
  fields: [
    {
      name: "noLights",
      type: "boolean",
      title: "El juguete no tiene luces.",
      description: "Seleccionar en caso de que el juguete no tenga luces.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "switchLights",
      type: "boolean",
      title: "El juguete tiene un interruptor para activar las luces.",
      description:
        "Seleccionar en caso de que el juguete tenga un interruptor/switch para activar/desactivar las luces del mismo.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "randomLights",
      type: "boolean",
      title: "El juguete tiene luces aleatorias.",
      description:
        "Seleccionar en caso de que el juguete tenga luces aleatorias.",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Luces del juguete.`,
      };
    },
  },
};
