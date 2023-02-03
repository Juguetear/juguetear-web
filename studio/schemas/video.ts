import VideoEmbedPreview from "../../components/VideoEmbedPreview";

export default {
  name: "video",
  title: "Video en YouTube",
  type: "object",
  fields: [
    {
      title: "Enlace del video en Youtube",
      name: "url",
      type: "link",
    },
  ],
  components: {
    preview: VideoEmbedPreview,
  },
  preview: {
    select: {
      url: "url",
    },
  },
};
