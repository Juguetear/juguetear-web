import { Meta, StoryFn } from "@storybook/react";
import Input from "./Input";

export default {
  title: "Input",
  component: Input,
} as Meta<typeof Input>;

export const Default: StoryFn<typeof Input> = () => (
  <Input label="*Texto" helperText="Mensaje error" name="input" />
);

export const Error: StoryFn<typeof Input> = () => (
  <Input label="*Texto" helperText="Mensaje error" name="input-error" error />
);

export const Touch: StoryFn<typeof Input> = () => (
  <Input
    label="*Texto"
    helperText="Mensaje error"
    name="input-touched"
    touched
  />
);
