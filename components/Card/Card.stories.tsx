import { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta = {
  title: "Card",
  component: Card,
} as Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const CardAvailable: Story = {
  args: {
    title: "Dragón",
    description: "Dragón que emite luces y sonido cuando se pulsa el botón.",
    available: true,
  },
  parameters: { viewport: "Small mobile" },
};

export const CardUnavailable: Story = {
  args: {
    title: "Dragón",
    description: "Dragón que emite luces y sonido cuando se pulsa el botón.",
    available: false,
  },
};

export const CardWithImage: Story = {
  args: {
    image: {
      src: "https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "dragon toy",
    },
    title: "Dragón",
    description: "Dragón que emite luces y sonido cuando se pulsa el botón.",
    available: true,
  },
};
