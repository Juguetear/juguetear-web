import { render, screen } from "@testing-library/react";

import { IconCheckmark } from "./IconCheckmark";

test("IconCheckmark className prop render", () => {
  render(<IconCheckmark className="fill-green" />);
  const iconCkeckmark = screen.getByTestId("fill-green");
  expect(iconCkeckmark).toBeInTheDocument();
});
