import type { Preview } from "@storybook/react";
import React from "react";
import "../app/globals.css";
import fontVariables from "../lib/font-variables";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <div className={fontVariables}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
