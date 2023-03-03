import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Button } from "./Button";

describe("Button", () => {
  it("Component renders without crashing", () => {
    render(
      <Button onClick={jest.fn()} appearance={"button"}>
        test
      </Button>
    );
  });

  it("Button is correctly aria labeled", () => {
    const { getByRole } = render(
      <Button onClick={jest.fn()} appearance={"button"}>
        test
      </Button>
    );
    expect(getByRole("button", { name: "test" })).toBeInTheDocument();
  });

  it("HandleClick is run on button click", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <Button onClick={handleClick} appearance={"button"}>
        test
      </Button>
    );
    const button = getByRole("button");
    act(() => {
      fireEvent.click(button);
    });
    expect(handleClick).toHaveBeenCalled();
  });

  it("HandleClick is not run click when button is disabled", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <Button onClick={handleClick} disabled={true} appearance={"button"}>
        test
      </Button>
    );
    const button = getByRole("button");
    act(() => {
      fireEvent.click(button);
    });
    expect(handleClick).not.toHaveBeenCalled();
  });
});
