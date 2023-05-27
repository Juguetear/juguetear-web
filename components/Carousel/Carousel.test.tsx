import { render, screen } from "@testing-library/react";
import Carousel from "./Carousel";

describe("Carousel", () => {
  it("renders the Carousel component with children", () => {
    render(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Carousel>
    );
    expect(screen.getByText("Slide 1")).toBeInTheDocument();
    expect(screen.getByText("Slide 2")).toBeInTheDocument();
    expect(screen.getByText("Slide 3")).toBeInTheDocument();
  });

  it("renders the Carousel component with two ArrowButton components", () => {
    render(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Carousel>
    );
    const leftArrowButton = screen.getByLabelText(/anterior/i);
    const rightArrowButton = screen.getByLabelText(/siguiente/i);
    expect(leftArrowButton).toBeInTheDocument();
    expect(rightArrowButton).toBeInTheDocument();
  });
});
