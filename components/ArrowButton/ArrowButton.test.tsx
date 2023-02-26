import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ArrowButton } from "./ArrowButton";

describe("ArrowButton", () => {
  it("Component renders without crashing", () => {
    render(<ArrowButton handleClick={jest.fn()} />);
  });

  it("Button is correctly aria labeled", () => {
    render(<ArrowButton handleClick={jest.fn()} />);

    expect(
      screen.getByRole("button", { name: "Pasar al slide anterior" })
    ).toBeInTheDocument();
  });

  it("HandleClick is run on button click", async () => {
    const handleClick = jest.fn();
    render(<ArrowButton handleClick={handleClick} />);
    const button = screen.getByRole("button");

    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });

  it("HandleClick is not run click when button is disabled", () => {
    const handleClick = jest.fn();
    render(<ArrowButton handleClick={handleClick} disabled={true} />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
