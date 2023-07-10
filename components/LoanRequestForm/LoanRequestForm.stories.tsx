import type { Meta, StoryObj } from "@storybook/react";
import { LoanRequestForm } from "./LoanRequestForm";

const meta = {
  title: "LoanRequestForm",
  component: LoanRequestForm,
  args: {},
} satisfies Meta<typeof LoanRequestForm>;

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
