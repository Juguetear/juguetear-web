import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import { IconChevron } from "./IconChevron";

test("IconChevron className prop render", () => {
  render(<IconChevron className="fill-orange" open={false} />);
  const container = screen.getByTestId("false-fill-orange");
  expect(container).toBeInTheDocument();
});

test("IconChevron open prop render", () => {
  render(<IconChevron className="fill-orange" open={true} />);
  const container = screen.getByTestId("true-fill-orange");
  expect(container).toBeInTheDocument();
});
