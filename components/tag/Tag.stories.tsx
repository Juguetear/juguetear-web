import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tag from "./Tag";

export default {
  title: "Tag",
  component: Tag,
  argTypes: { onClick: { action: "onClick" } },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => (
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
