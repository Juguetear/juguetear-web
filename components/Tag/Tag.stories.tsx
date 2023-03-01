import { Meta, StoryObj } from "@storybook/react";
import { Tag, TagProps } from "./Tag";
export default {
  title: "Tag",
  component: Tag,
  argTypes: {
    onClick: {
      action: "onClick",
    },
    numTags: {
      type: "number",
      defaultValue: 2,
    },
  },
} as Meta<typeof Tag>;
export const SampleTag: StoryObj<typeof Tag> = {
  render: (args) => (
    <ul>
      <Tag {...args} />
    </ul>
  ),
  name: "SampleTag",
  args: {
    label: "Movimiento",
  },
};
export const LongTag: StoryObj<typeof Tag> = {
  render: (args) => (
    <ul>
      <Tag {...args} />
    </ul>
  ),
  name: "LongTag",
  args: {
    label: "Really long tagname",
  },
};
export const TestOnClick: StoryObj<typeof Tag> = {
  render: (args) => (
    <ul>
      <Tag {...args} />
    </ul>
  ),
  name: "TestOnClick",
  args: {
    label: "On Click",
    onClick: () => alert("Button clicked"),
  },
};
interface MultipleTagsProps extends TagProps {
  numTags: number;
}
export const MultipleTags: StoryObj<MultipleTagsProps> = {
  render: (args) => {
    const { numTags } = args;
    return (
      <ul className="flex">
        {Array.from(
          {
            length: numTags,
          },
          (_, i) => (
            <Tag key={i} {...args} />
          )
        )}
      </ul>
    );
  },
  name: "MultipleTags",
  args: {
    label: "Tag",
    numTags: 2,
  },
};
