import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
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
    render(
      <Button onClick={jest.fn()} appearance={"button"}>
        tests
      </Button>
    );
    const button = screen.getByRole("button", { name: "tests" });

    expect(button).toBeInTheDocument();
  });

  it("HandleClick is run on button click", () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} appearance={"button"}>
        test
      </Button>
    );
    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it("HandleClick is not run click when button is disabled", () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled={true} appearance={"button"}>
        test
      </Button>
    );
    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
