import getYouTubeID from "get-youtube-id";
import { PreviewLayoutKey, PreviewProps } from "sanity";

type VideoSelect = {
  url?: {
    url: string;
  };
};

interface VideoEmbedPreviewProps extends PreviewProps<PreviewLayoutKey> {
  select?: VideoSelect;
}

const VideoEmbedPreview = (props: VideoEmbedPreviewProps) => {
  const { select } = props;
  const videoId =
    !select || !select.url ? undefined : getYouTubeID(select.url?.url);
  const YTUrl = `https://www.youtube.com/embed/${videoId}`;

  if (!videoId) {
    return <p>Se necesita un enlace valido de Youtube.</p>;
  }

  return (
    <iframe
      width="520"
      height="292.50"
      src={YTUrl}
      title="YouTube video player"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
};

export default VideoEmbedPreview;
