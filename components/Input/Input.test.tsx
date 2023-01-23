import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
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

  it("Check input with error prop", () => {
    let value = "";

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
      value = target.value;
    };

    const { container, getByText } = render(
      <Input
        label="error"
        value={value}
        onChange={handleChange}
        helperText="helper"
        name="input"
        error
      />
    );

    expect(container.getElementsByClassName("text-red").length).toBe(2);
    expect(getByText(/helper/i)).toBeInTheDocument();
  });

  it("Check input with required prop", () => {
    let value = "";

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
      value = target.value;
    };

    const { getByLabelText } = render(
      <Input
        label="required"
        value={value}
        onChange={handleChange}
        helperText="helper"
        name="input"
        required
      />
    );

    expect(getByLabelText(/ * /i)).toBeInTheDocument();
  });
});
