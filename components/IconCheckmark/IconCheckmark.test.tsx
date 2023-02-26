import { render } from "@testing-library/react";

import { IconCheckmark } from "./IconCheckmark";

describe("IconCheckmark", () => {
  it("IconCheckmark should render", () => {
    render(<IconCheckmark className="fill-green" />);
  });
});
