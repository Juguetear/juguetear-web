import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ArrowButton } from "./ArrowButton";

describe("Arrow button", () => {
  it("Component renders without crashing", () => {
    render(<ArrowButton handleClick={jest.fn()} />);
  });

  it("Button is correctly aria labeled", () => {
    render(<ArrowButton handleClick={jest.fn()} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("HandleClick is run on button click", async () => {
    const handleClick = jest.fn();
    render(<ArrowButton handleClick={handleClick} />);
    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it("HandleClick is not run click when button is disabled", async () => {
    const handleClick = jest.fn();
    render(<ArrowButton handleClick={handleClick} disabled={true} />);
    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
