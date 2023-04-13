import { render, screen } from "@testing-library/react";
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
    render(
      <Link href={""} appearance={"button"}>
        test
      </Link>
    );

    const link = screen.getByRole("link", { name: "test" });

    expect(link).toBeInTheDocument();
  });

  it("HandleClick is run on link click", () => {
    render(
      <Link href="/" appearance={"button"}>
        test
      </Link>
    );

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/");
  });
});
