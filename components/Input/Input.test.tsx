import { render, screen } from "@testing-library/react";
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

  it("Check text label", () => {
    let value = "";

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
      value = target.value;
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

    const label = screen.getByLabelText(/Example/i);

    expect(label).toBeInTheDocument();
  });

  it("Check input with error prop", () => {
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

  it("Check input with required prop", () => {
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
  });
});
