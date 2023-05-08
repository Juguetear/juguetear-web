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
      text: "emphasis",
      _type: "span",
      marks: ["em"],
    },
  ],
};

export { em, h1, h2, span, strong, underline };
