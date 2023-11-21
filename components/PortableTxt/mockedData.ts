const underline = {
  _type: "blockscontent",
  style: "normal",
  children: [
    {
      text: "underline text",
      _type: "span",
      marks: ["underline"],
    },
  ],
};

const strong = {
  _type: "blockscontent",
  children: [
    {
      _type: "span",
      marks: ["strong"],
      text: "Strong text",
    },
  ],
  style: "normal",
};

const span = {
  _type: "blockscontent",
  children: [
    {
      _type: "span",
      text: "Just a span",
    },
  ],
};

const h1 = {
  _type: "blockscontent",
  style: "h1",
  children: [
    {
      _type: "span",
      text: "H1",
    },
  ],
};

const h2 = {
  _type: "blockscontent",
  style: "h2",
  children: [
    {
      _type: "span",
      text: "H2",
    },
  ],
};

const em = {
  _type: "blockscontent",
  style: "normal",
  children: [
    {
      text: "inline code",
      _type: "span",
      marks: ["code"],
    },
  ],
};

const images = {
  _type: "images",
  images: [
    {
      _type: "img",
      altText: "Imagen doble",
      asset: {
        _ref: "image-54942b7ea04fa5820b3e9d3f03df0a602a7d67c5-420x236-png",
        _type: "reference",
      },
      placeholder: "image-54942b7ea04fa5820b3e9d3f03df0a602a7d67c5-420x236-png",
    },
    {
      _type: "img",
      altText: "Otra imagen doble",
      asset: {
        _ref: "image-849770bef25dd174bb17c55af8f840c53a6debb0-420x236-png",
        _type: "reference",
      },
      placeholder: "image-54942b7ea04fa5820b3e9d3f03df0a602a7d67c5-420x236-png",
    },
  ],
};

export { em, h1, h2, images, span, strong, underline };
