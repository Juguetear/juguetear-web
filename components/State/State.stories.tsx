import { expect } from "@storybook/jest";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { screen } from "@storybook/testing-library";

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

export const StateTrue = Template.bind({});

StateTrue.args = {
  available: true,
};

StateTrue.play = () => {
  expect(screen.getByText(/disponible/i)).toBeInTheDocument();
};

export const StateFalse = Template.bind({});

StateFalse.args = {
  available: false,
};

StateFalse.play = () => {
  expect(screen.getByText(/prestado/i)).toBeInTheDocument();
};

export const StatePrueba = Template.bind({});

StatePrueba.args = {
  available: false,
};