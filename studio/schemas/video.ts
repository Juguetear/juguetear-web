import VideoEmbedPreview from "../../components/VideoEmbedPreview";

export default {
  name: "video",
  type: "object",
  fields: [
    {
      title: "Enlace del video en Youtube",
      name: "url",
      type: "url", // TODO: Add 'link' type
    },
  ],
  preview: {
    select: {
      url: "url",
    },
    component: VideoEmbedPreview,
  },
};
