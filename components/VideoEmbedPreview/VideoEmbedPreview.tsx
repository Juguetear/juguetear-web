import getYouTubeID from "get-youtube-id";
import { PreviewLayoutKey, PreviewProps } from "sanity";

export interface VideoEmbedPreviewProps
  extends Partial<PreviewProps<PreviewLayoutKey>> {
  video?: {
    url: string | undefined;
  };
}

const VideoEmbedPreview = ({ video }: VideoEmbedPreviewProps) => {
  const url = video?.url;
  const videoId = url ? getYouTubeID(url) : undefined;
  const YTUrl = `https://www.youtube.com/embed/${videoId}`;

  if (!videoId) {
    return <p>Se necesita un enlace valido de Youtube.</p>;
  }

  return (
    <iframe
      className="aspect-video h-full w-full"
      src={YTUrl}
      title="Reproductor de videos de Youtube"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
};

export default VideoEmbedPreview;
