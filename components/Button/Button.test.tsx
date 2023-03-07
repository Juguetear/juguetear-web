import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
        test
      </Button>
    );
    const button = screen.getByRole("button", { name: "test" });

    expect(button).toBeInTheDocument();
  });

  it("HandleClick is run on button click", async () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} appearance={"button"}>
        test
      </Button>
    );
    const button = screen.getByRole("button");

    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it("HandleClick is not run click when button is disabled", async () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled={true} appearance={"button"}>
        test
      </Button>
    );
    const button = screen.getByRole("button");

    await userEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
