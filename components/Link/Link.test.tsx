import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Link } from "./Link";

describe("Link", () => {
  it("Component renders without crashing", () => {
    render(
      <Link onClick={jest.fn()} appearance={"button"}>
        test
      </Link>
    );
  });

  it("Link is correctly aria labeled", () => {
    const { getByRole } = render(
      <Link onClick={jest.fn()} appearance={"button"}>
        test
      </Link>
    );
    expect(getByRole("link", { name: "test" })).toBeInTheDocument();
  });

  it("HandleClick is run on link click", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <Link onClick={handleClick} appearance={"button"}>
        test
      </Link>
    );
    const link = getByRole("link");
    act(() => {
      fireEvent.click(link);
    });
    expect(handleClick).toHaveBeenCalled();
  });

  it("HandleClick is not run click when link is disabled", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <Link onClick={handleClick} disabled={true} appearance={"button"}>
        test
      </Link>
    );
    const link = getByRole("link");
    act(() => {
      fireEvent.click(link);
    });
    expect(handleClick).not.toHaveBeenCalled();
  });
});
