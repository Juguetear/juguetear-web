import { Meta, StoryObj } from "@storybook/react";
import { PortableTxt } from "./PortableTxt";
import { em, h1, h2, span, strong, underline } from "./mockedData";

const description = [em, h1, h2, span, strong, underline];

type Story = StoryObj<typeof PortableTxt>;

const meta: Meta<typeof PortableTxt> = {
  title: "PortableText",
  component: PortableTxt,
};

export const Content: Story = {
  render: () => <PortableTxt content={description} />,
};

export default meta;
