import { Meta, StoryObj } from "@storybook/react";
import { PortableTxt } from "./PortableTxt";
import mockedData from "./mockedData.json";

type Story = StoryObj<typeof PortableTxt>;

const meta: Meta<typeof PortableTxt> = {
  title: "PortableText",
  component: PortableTxt,
};

export const Content: Story = {
  render: () => <PortableTxt content={mockedData.description} />,
};

export default meta;
