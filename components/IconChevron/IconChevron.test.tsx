import { render } from "@testing-library/react";

import { IconChevron } from "./IconChevron";

describe("IconChevron", () => {
  it("IconChevron should render", () => {
    render(<IconChevron className="fill-orange" open={false} />);
  });

  it("IconChevron open should render", () => {
    render(<IconChevron className="fill-orange" open={true} />);
  });
});
