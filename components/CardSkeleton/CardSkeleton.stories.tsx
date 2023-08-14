import { Meta, StoryObj } from "@storybook/react";
import { CardSkeleton } from "./CardSkeleton";

const meta = {
  title: "Component/CardSkeleton",
  component: CardSkeleton,
} as Meta<typeof CardSkeleton>;

export default meta;

type Story = StoryObj<typeof CardSkeleton>;

export const Default: Story = {};
