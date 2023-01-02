import { Meta, StoryFn } from "@storybook/react";
import Tag from "./Tag";

export default {
  title: "Tag",
  component: Tag,
  argTypes: { onClick: { action: "onClick" } },
} as Meta<typeof Tag>;

const Template: StoryFn<typeof Tag> = (args) => (
  <ul>
    <Tag {...args} />
  </ul>
);

export const EmptyTag = Template.bind({});
EmptyTag.storyName = "Empty Tag";
EmptyTag.args = { label: "" };

export const LongTag = Template.bind({});
LongTag.storyName = "Long Tag";
LongTag.args = { label: "Long woooooooooooord" };
