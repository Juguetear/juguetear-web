import type { Meta, StoryObj } from "@storybook/react";
import { Escribinos } from "./Escribinos";

const meta = {
  title: "Module/Escribinos",
  component: Escribinos,
  args: {},
} satisfies Meta<typeof Escribinos>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    viewport: {
      defaultViewport: "responsive",
    },
  },
};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

export const SmallMobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const LargeMobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile2",
    },
  },
};
