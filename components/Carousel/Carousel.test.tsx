import { render, screen } from "@testing-library/react";
import Carousel from "./Carousel";

/**
 * The "transformIgnorePatterns" on "jest.config.js" prevents the Swiper files from being
 * transformed by Jest but it affects the CSS files that are provided by this package.
 * Mocking these CSS files is the solution with the smallest configuration.
 *
 * See "transformIgnorePatterns" on "jest.config.js" for more information.
 */
jest.mock("swiper/css/navigation", jest.fn());

describe("Carousel", () => {
  const carouselContent = (
    <>
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
    </>
  );
  it("renders the Carousel component with children", () => {
    render(<Carousel>{carouselContent}</Carousel>);
    expect(screen.getByText("Slide 1")).toBeInTheDocument();
    expect(screen.getByText("Slide 2")).toBeInTheDocument();
    expect(screen.getByText("Slide 3")).toBeInTheDocument();
  });

  it("renders the Carousel component with two ArrowButton components", () => {
    render(<Carousel>{carouselContent}</Carousel>);
    const leftArrowButton = screen.getByLabelText(/anterior/i);
    const rightArrowButton = screen.getByLabelText(/siguiente/i);
    expect(leftArrowButton).toBeInTheDocument();
    expect(rightArrowButton).toBeInTheDocument();
  });
});
