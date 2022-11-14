export default {
  name: "movement",
  title: "Movimiento del juguete",
  type: "document",
  fields: [
    {
      name: "toyName",
      title: "Nombre del juguete.",
      type: "string",
      description: "Indicar el nombre del juguete.",
    },
    {
      name: "noMvt",
      title: "Sin movimiento",
      type: "boolean",
      description: "El juguete no tiene movimiento.",
    },
    {
      name: "forwardMvt",
      title: "Movimiento hacia delante",
      type: "boolean",
      description: "El juguete solo se mueve hacia delante.",
    },
    {
      name: "backwardsMvt",
      title: "Movimiento hacia atrás",
      type: "boolean",
      description: "El juguete solo se mueve hacia atrás.",
    },
    {
      name: "leftMvt",
      title: "Movimiento hacia la izquierda",
      type: "boolean",
      description: "El juguete solo se mueve hacia la izquierda.",
    },
    {
      name: "rightMvt",
      title: "Movimiento hacia la derecha",
      type: "boolean",
      description: "El juguete solo se mueve hacia la derecha.",
    },
    {
      name: "randomMvt",
      title: "Movimiento aleatorio",
      type: "boolean",
      description: "El juguete tiene movimientos aleatorios.",
    },
  ],
  preview: {
    select: {
      title: "toyName",
    },
    prepare({ title }: { title: string }) {
      return {
        title: `Movimiento del juguete "${title}"`,
        subtitle: `Movimientos posibles por el juguete.`,
      };
    },
  },
};
