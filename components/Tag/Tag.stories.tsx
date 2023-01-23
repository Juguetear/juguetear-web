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

export const SampleTag = Template.bind({});
SampleTag.storyName = "Sample Tag";
SampleTag.args = { label: "Movimiento" };

export const LongTag = Template.bind({});
LongTag.storyName = "Long Tag";
LongTag.args = { label: "Really long tagname" };

export const TestOnClick = Template.bind({});
TestOnClick.storyName = "Test On Click";
TestOnClick.args = {
  label: "On Click",
  onClick: () => alert("Button clicked"),
};
