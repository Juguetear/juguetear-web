import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import { IconError } from "./IconError";

test("IconError className prop render", () => {
  const { container } = render(<IconError className="fill-red" />);
  expect(container.getElementsByClassName("fill-red").length).toBe(1);
});
