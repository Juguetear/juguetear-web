import { Meta, StoryFn } from "@storybook/react";
import TextArea from "./TextArea";

export default {
  title: "TextArea",
  component: TextArea,
  args: {
    required: false,
    name: "TextArea",
  },
} as Meta<typeof TextArea>;

export const Default: StoryFn<typeof TextArea> = (args) => (
  <TextArea {...args} label="Texto" helperText="Mensaje" name="TextArea" />
);

export const Error: StoryFn<typeof TextArea> = (args) => (
  <TextArea {...args} label="Texto" helperText="Mensaje" error />
);

export const Focus: StoryFn<typeof TextArea> = (args) => (
  <TextArea
    {...args}
    label="Texto"
    helperText="Mensaje"
    className="ring-[3px] shadow-2md bg-blue-light"
  />
);

export const Required: StoryFn<typeof TextArea> = (args) => (
  <TextArea {...args} label="Texto" helperText="Mensaje" required />
);

export const Disabled: StoryFn<typeof TextArea> = (args) => (
  <TextArea {...args} label="Texto" helperText="Mensaje" required disabled />
);
