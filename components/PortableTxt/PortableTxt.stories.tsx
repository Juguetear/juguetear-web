import { Meta, StoryObj } from "@storybook/react";
import { PortableTxt } from "./PortableTxt";

const mockedData = [
  {
    _type: "blockscontent",
    style: "h1",
    markDefs: [],
    children: [
      {
        _type: "span",
        text: "Heading 1",
        marks: [],
      },
    ],
  },
  {
    _type: "blockscontent",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        text: "Strong text",
        marks: ["strong"],
      },
    ],
  },
  {
    _type: "blockscontent",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        marks: ["em"],
        text: "Emphasise text",
      },
    ],
  },
  {
    _type: "blockscontent",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        marks: ["underline"],
        text: "Underline text",
      },
    ],
  },
  {
    _type: "blockscontent",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        marks: [],
        text: "",
      },
    ],
  },
  {
    _type: "blocksimage",
    asset: {
      _type: "reference",
      _ref: "image-7e560aeb0267f502f5aa17b8e8ae08e3e557f81d-862x485-jpg",
    },
    altText: "Persona modificando dinosaurio verde de juguete",
  },
];

type Story = StoryObj<typeof PortableTxt>;

const meta: Meta<typeof PortableTxt> = {
  title: "PortableText",
  component: PortableTxt,
};

export const Content: Story = {
  render: () => <PortableTxt content={mockedData} />,
};

export default meta;
