import VideoEmbedPreview from "components/VideoEmbedPreview";
import { defineField, defineType } from "sanity";

const video = defineType({
  name: "video",
  title: "Video en YouTube",
  type: "object",
  fields: [
    defineField({
      title: "Enlace del video en Youtube",
      name: "url",
      type: "link",
    }),
  ],
  components: {
    preview: VideoEmbedPreview,
  },
  preview: {
    select: {
      video: "url",
    },
  },
});

export default video;
