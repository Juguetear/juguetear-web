import { ComponentMeta, ComponentStory } from "@storybook/react";

import { State } from "./State";

export default {
  title: "State",
  component: State,
} as ComponentMeta<typeof State>;

const Template: ComponentStory<typeof State> = (args) => <State {...args} />;

export const StateDefault = Template.bind({});

StateDefault.args = {
  available: true,
};
