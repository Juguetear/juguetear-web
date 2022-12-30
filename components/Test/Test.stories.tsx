import { Meta, StoryFn } from "@storybook/react";
import { Test } from "./Test";

export default {
  title: "Test",
  component: Test,
} as Meta<typeof Test>;

export const Default: StoryFn<typeof Test> = () => <Test />;
