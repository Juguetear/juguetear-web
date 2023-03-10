import { render, screen } from "@testing-library/react";

import { IconChevron } from "./IconChevron";

test("IconChevron className prop render", () => {
  render(<IconChevron className="fill-orange" open={false} />);
  const svgElement = screen.getByTestId("false-fill-orange");
  expect(svgElement).toBeInTheDocument();
});

test("IconChevron open prop render", () => {
  render(<IconChevron className="fill-orange" open={true} />);
  const svgElement = screen.getByTestId("true-fill-orange");
  expect(svgElement).toHaveClass("rotate-180");
});

test("IconChevron has aria-hidden attribute", () => {
  render(<IconChevron className="fill-orange" open={false} />);
  const svgElement = screen.getByTestId("false-fill-orange");
  expect(svgElement).toHaveAttribute("aria-hidden", "true");
});
