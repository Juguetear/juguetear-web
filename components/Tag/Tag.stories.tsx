import { Meta, StoryFn } from "@storybook/react";
import { Tag, TagProps } from "./Tag";

export default {
  title: "Tag",
  component: Tag,
  argTypes: {
    onClick: { action: "onClick" },
    numTags: {
      type: "number",
      defaultValue: 2,
    },
  },
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

interface MultipleTagsProps extends TagProps {
  numTags: number;
}

const MultiTagsTemplate: StoryFn<MultipleTagsProps> = (args) => {
  const { numTags } = args;
  return (
    <ul className="flex">
      {Array.from({ length: numTags }, (_, i) => (
        <Tag key={i} {...args} />
      ))}
    </ul>
  );
};

export const MultipleTags = MultiTagsTemplate.bind({});
MultipleTags.storyName = "Multiple Tags";
MultipleTags.args = { label: "Tag", numTags: 2 };
