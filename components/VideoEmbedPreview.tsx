import getYouTubeID from "get-youtube-id";

function VideoEmbedPreview(value: { url: { url: string } }) {
  const videoId = getYouTubeID(value.url?.url);
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
}

export default VideoEmbedPreview;
