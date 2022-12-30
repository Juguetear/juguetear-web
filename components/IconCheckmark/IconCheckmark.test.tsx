import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import { IconCheckmark } from "./IconCheckmark";

test("IconCheckmark className prop render", () => {
  const { container } = render(<IconCheckmark className="fill-green" />);
  expect(container.getElementsByClassName("fill-green").length).toBe(1);
});
