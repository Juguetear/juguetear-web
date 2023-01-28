import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import { IconChevron } from "./IconChevron";

test("IconChevron className prop render", () => {
  const { container } = render(
    <IconChevron className="fill-orange" open={false} />
  );
  expect(
    container.getElementsByClassName(
      "fill-orange motion-reduce:transition-none motion-safe:transition-transform"
    )
  ).toHaveLength(1);
});

test("IconChevron open prop render", () => {
  const { container } = render(
    <IconChevron className="fill-orange" open={true} />
  );
  expect(
    container.getElementsByClassName(
      "fill-orange motion-reduce:transition-none motion-safe:transition-transform rotate-180"
    )
  ).toHaveLength(1);
});
