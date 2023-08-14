import { Meta, StoryFn } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import TextArea from "./TextArea";

export default {
  title: "Component/TextArea",
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
  <TextArea {...args} label="Texto" helperText="Mensaje" />
);

Focus.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const item = await canvas.findByLabelText(/Texto/i);
  await userEvent.click(item);
};

export const Required: StoryFn<typeof TextArea> = (args) => (
  <TextArea {...args} label="Texto" helperText="Mensaje" required />
);

export const Disabled: StoryFn<typeof TextArea> = (args) => (
  <TextArea {...args} label="Texto" helperText="Mensaje" required disabled />
);
