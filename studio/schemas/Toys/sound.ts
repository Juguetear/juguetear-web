export default {
  name: "sound",
  title: "Sonido del juguete",
  type: "document",
  fields: [
    {
      name: "toyName",
      title: "Nombre del juguete.",
      type: "string",
      description: "Indicar el nombre del juguete.",
    },
    {
      name: "noSound",
      type: "boolean",
      title: "El juguete no tiene sonido.",
      description: "Seleccionar en caso de que el juguete no tengas sonido.",
    },
    {
      name: "switchSound",
      type: "boolean",
      title: "El juguete tiene un interruptor para activar el sonido.",
      description:
        "Seleccionar en caso de que el juguete tenga un interruptor/switch para activar/desactivar el sonido del mismo.",
    },
    {
      name: "randomSound",
      type: "boolean",
      title: "El juguete tiene sonido aleatorio.",
      description: "Seleccionar en caso de que el juguete no tengas sonido.",
    },
  ],
  preview: {
    select: {
      title: "toyName",
    },
    prepare({ title }: { title: string }) {
      return {
        title: `Sonido del juguete ${title}`,
      };
    },
  },
};
