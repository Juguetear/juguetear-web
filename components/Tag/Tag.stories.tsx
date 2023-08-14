import { Meta, StoryObj } from "@storybook/react";
import { Tag, TagProps } from "./Tag";
export default {
  title: "Component/Tag",
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
  args: {
    label: "Tag",
    numTags: 2,
  },
};
