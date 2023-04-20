import { render, screen } from "@testing-library/react";
import VideoEmbedPreview from "./VideoEmbedPreview";

describe("VideoEmbedPreview", () => {
  test("renders video player with valid URL", () => {
    render(
      <VideoEmbedPreview
        renderDefault={() => <div>...loading</div>}
        video={{ url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }}
      />
    );
    const videoPlayer = screen.getByTitle("YouTube video player");
    expect(videoPlayer).toBeInTheDocument();
  });

  test("renders error message with invalid URL", () => {
    render(
      <VideoEmbedPreview
        renderDefault={() => <div>...loading</div>}
        video={{ url: "not-a-valid-url" }}
      />
    );
    const errorMessage = screen.getByText(
      "Se necesita un enlace valido de Youtube."
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
