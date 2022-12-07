import React from "react";
import getYouTubeID from "get-youtube-id";

function VideoEmbedPreview({ value }: { value: { url: string } }) {
  const videoId = getYouTubeID(value.url);
  const url = `https://www.youtube.com/embed/${videoId}`;

  if (!videoId) {
    return <p>Se necesita un enlace valido de Youtube.</p>;
  }

  return (
    <iframe
      width="520"
      height="292.50"
      src={url}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      // allowFullScreen
    ></iframe>
  );
}

export default VideoEmbedPreview;
