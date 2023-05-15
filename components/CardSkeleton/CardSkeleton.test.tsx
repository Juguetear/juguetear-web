import { render, screen } from "@testing-library/react";
import { CardSkeleton } from "./CardSkeleton";

describe("CardSkeleton component", () => {
  test("renders skeleton", () => {
    render(<CardSkeleton />);
    expect(screen.getByTestId("card-skeleton")).toBeInTheDocument();
  });
  test("renders six skeleton rectangles", () => {
    render(<CardSkeleton />);
    expect(screen.getAllByTestId("card-skeleton-rect")).toHaveLength(6);
  });
});
