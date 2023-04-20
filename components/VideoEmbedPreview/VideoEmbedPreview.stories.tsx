import { Meta } from "@storybook/react";
import VideoEmbedPreview from "./VideoEmbedPreview";

export default {
  title: "VideoEmbedPreview",
  component: VideoEmbedPreview,
  args: {
    video: {
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} as Meta<typeof VideoEmbedPreview>;

export const Default = {};
