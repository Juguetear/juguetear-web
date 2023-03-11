import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event/";
import { ChangeEvent } from "react";
import Input from "./Input";

describe("Input", () => {
  it("Component renders without crashing", () => {
    let value = "";

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
      value = target.value;
    };

    render(
      <Input
        label="texto"
        value={value}
        onChange={handleChange}
        helperText="helper"
        name=""
      />
    );
  });

  it("Checks that input value is modified correctly", async () => {
    let value = "";

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
      value += target.value;
    };

    render(
      <Input
        label="Example"
        value={value}
        onChange={handleChange}
        helperText="helper"
        name="input"
      />
    );

    const input = screen.getByLabelText(/Example/i);
    await userEvent.type(input, "Test");

    expect(input).toBeInTheDocument();
    expect(value).toBe("Test");
  });

  it("Checks that errors are displayed correctly when error prop is set to true", () => {
    let value = "";

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
      value = target.value;
    };

    render(
      <Input
        label="error"
        value={value}
        onChange={handleChange}
        helperText="helper"
        name="input"
        error
      />
    );

    const spanElement = screen.getByText(/error/);
    const helperText = screen.getByText(/helper/i);

    expect(helperText).toBeInTheDocument();
    expect(helperText).toHaveClass("text-red");
    expect(spanElement).toBeInTheDocument();
    expect(spanElement).toHaveClass("text-red");
  });

  it("Checks that the required prop of input is working correctly", () => {
    let value = "";

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
      value = target.value;
    };

    render(
      <Input
        label="required"
        value={value}
        onChange={handleChange}
        helperText="helper"
        name="input"
        required
      />
    );

    const requiredInput = screen.getByLabelText(/ */i);

    expect(requiredInput).toBeInTheDocument();
    expect(requiredInput).toBeRequired();
  });
});
