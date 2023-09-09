import { render, screen } from "@testing-library/react";
import HighlightedWrapper from "./HighlightedWrapper";

describe("HighlightedWrapper", () => {
  it("Component renders without crashing", () => {
    render(
      <HighlightedWrapper>
        <div>
          No tenemos juguetes disponibles en esta categoría. Volvé a intentarlo
          más tarde o mirá <span>todos los juguetes disponibles.</span>
        </div>
      </HighlightedWrapper>
    );
  });

  it("Component renders children", () => {
    render(
      <HighlightedWrapper>
        <p>No tenemos juguetes...</p>
      </HighlightedWrapper>
    );

    const children = screen.getByText("No tenemos juguetes...");
    expect(children).toBeInTheDocument();
  });
});
