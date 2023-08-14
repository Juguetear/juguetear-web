import { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { SanityImage } from "types/common";

const meta = {
  title: "Component/Card",
  component: Card,
  args: {
    title: "Dragón",
    description: "Dragón que emite luces y sonido cuando se pulsa el botón.",
    link: "#",
  },
} as Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const CardAvailable: Story = {
  args: {
    available: true,
  },
  parameters: { viewport: "Small mobile" },
};

export const CardUnavailable: Story = {
  args: {
    available: false,
  },
};

export const CardWithImage: Story = {
  args: {
    image: {} as SanityImage,
    available: true,
  },
};
