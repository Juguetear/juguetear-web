import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  it("Component renders without crashing", () => {
    render(<Input label="texto" helperText="helper" name="" />);
  });

  it("Check input error state", () => {
    const { container } = render(
      <Input label="error" helperText="helper" name="" error />
    );

    expect(container.getElementsByClassName("text-red").length).toBe(2);
  });

  it("Check input focus state", () => {
    const { container } = render(
      <Input label="error" helperText="helper" name="" touched />
    );

    expect(container.getElementsByClassName("shadow-input").length).toBe(1);
  });
});
