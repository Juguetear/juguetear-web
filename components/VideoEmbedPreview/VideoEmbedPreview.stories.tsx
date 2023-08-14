import { Meta, StoryObj } from "@storybook/react";
import VideoEmbedPreview from "./VideoEmbedPreview";

const meta = {
  title: "Component/VideoEmbedPreview",
  component: VideoEmbedPreview,
  args: {
    video: {
      url: "https://www.youtube.com/watch?v=eoGSR7kNARE",
    },
  },
} satisfies Meta<typeof VideoEmbedPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    viewport: {
      defaultViewport: "responsive",
    },
  },
};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

export const SmallMobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const LargeMobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile2",
    },
  },
};

export const WithInvalidURL: Story = {
  args: {
    video: {
      url: "this-is-invalid-url",
    },
  },
};
