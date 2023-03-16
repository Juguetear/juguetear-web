import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event/";
import Input from "./Input";

describe("Input", () => {
  it("Component renders without crashing", () => {
    render(<Input label="texto" helperText="helper" name="" />);
  });

  it("Checks that input value is modified correctly", async () => {
    render(<Input label="Example" helperText="helper" name="input" />);

    const input = screen.getByLabelText(/Example/i);
    await userEvent.type(input, "Test");

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("Test");
  });

  it("Checks that errors are displayed correctly when error prop is set to true", () => {
    render(<Input label="error" helperText="helper" name="input" error />);

    const spanElement = screen.getByText(/error/);
    const helperText = screen.getByText(/helper/i);

    expect(helperText).toBeInTheDocument();
    expect(helperText).toHaveClass("text-red");
    expect(spanElement).toBeInTheDocument();
    expect(spanElement).toHaveClass("text-red");
  });

  it("Checks that the required prop of input is working correctly", () => {
    render(
      <Input label="required" helperText="helper" name="input" required />
    );

    const requiredInput = screen.getByLabelText(/ */i);

    expect(requiredInput).toBeInTheDocument();
    expect(requiredInput).toBeRequired();
  });
});
