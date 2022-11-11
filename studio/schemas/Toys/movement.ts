export default {
  name: "movement",
  title: "Movimiento",
  type: "document",
  fields: [
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
    prepare() {
      return {
        title: `Movimiento del juguete.`,
        subtitle: `Movimientos posibles por el juguete.`,
      };
    },
  },
};
