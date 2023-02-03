import { Meta } from "@storybook/react";

import { State } from "./State";

export default {
  title: "State",
  component: State,
} as Meta<typeof State>;

export const Disponible = {
  args: {
    available: true,
  },
};

export const Prestado = {
  args: {
    available: false,
  },
};
