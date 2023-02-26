import { render } from "@testing-library/react";

import { IconError } from "./IconError";

describe("IconError", () => {
  it("IconError should render", () => {
    render(<IconError className="fill-red" />);
  });
});
