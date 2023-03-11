import { render, screen } from "@testing-library/react";

import { IconError } from "./IconError";

test("IconError className prop render", () => {
  render(<IconError className="fill-red" />);
  const svgElement = screen.getByTestId("fill-red");
  expect(svgElement).toBeInTheDocument();
});

test("IconError has aria-hidden attribute", () => {
  render(<IconError className="fill-red" />);
  const svgElement = screen.getByTestId("fill-red");
  expect(svgElement).toHaveAttribute("aria-hidden", "true");
});
