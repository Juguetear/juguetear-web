import { render } from "@testing-library/react";
import { Link } from "./Link";

describe("Link", () => {
  it("Component renders without crashing", () => {
    render(
      <Link href={""} appearance={"button"}>
        test
      </Link>
    );
  });

  it("Link is correctly aria labeled", () => {
    const { getByRole } = render(
      <Link href={""} appearance={"button"}>
        test
      </Link>
    );
    expect(getByRole("link", { name: "test" })).toBeInTheDocument();
  });

  it("HandleClick is run on link click", () => {
    const { getByRole } = render(
      <Link href="/" appearance={"button"}>
        test
      </Link>
    );

    const link = getByRole("link");

    expect(link).toHaveAttribute("href", "/");
  });
});
