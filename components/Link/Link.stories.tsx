import { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

export default {
  title: "Link",
  component: Link,
  args: {
    href: "",
  },
  argTypes: {
    onClick: {
      action: "Clicked",
    },
  },
} as Meta<typeof Link>;

type Story = StoryObj<typeof Link>;

export const Button: Story = {
  args: {
    appearance: "button",
    children: "Pedir juguete",
  },
};

export const Link: Story = {
  args: {
    appearance: "link",
    children: "Ver todos los juguetes",
  },
};

export const ButtonWithIcon: Story = {
  args: {
    appearance: "buttonWithIcon",
    children: "Descargar",
  },
};
