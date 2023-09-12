import { Meta, StoryObj } from "@storybook/react";
import { FAQSection } from "./FAQSection";
import { FAQMockData } from "./FAQMockData";

const meta = {
  title: "FAQSection",
  component: FAQSection,
  args: FAQMockData,
} satisfies Meta<typeof FAQSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
