import { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

export default {
  title: "Link",
  component: Link,
  argTypes: {
    onClick: {
      action: "Clicked",
    },
  },
} as Meta<typeof Link>;

type Story = StoryObj<typeof Link>

export const button: Story = {
  args: {
    appearance: "button",
    children: "Pedir juguete",
  },
};

export const link: Story = {
  args: {
    appearance: "link",
    children: "Ver todos los juguetes",
  },
};

export const buttonWithIcon: Story = {
  args: {
    appearance: "buttonWithIcon",
    children: "Descargar",
  },
};
