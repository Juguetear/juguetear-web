import { defineField, defineType } from 'sanity';
import VideoEmbedPreview from "../components/VideoEmbedPreview";

export default defineType({
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
      url: "url",
    },
  },
});
