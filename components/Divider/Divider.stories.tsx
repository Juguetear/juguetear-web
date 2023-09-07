import { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

export default {
  title: "Component/Divider",
  component: Divider,
  decorators: [
    (Story) => (
      <div className="flex h-[40px] items-center justify-center">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Divider>;

type Story = StoryObj<typeof Divider>;

export const HorizontalDivider: Story = {
  args: {
    type: "horizontal",
  },
};

export const VerticalDivider: Story = {
  args: {
    type: "vertical",
  },
};
