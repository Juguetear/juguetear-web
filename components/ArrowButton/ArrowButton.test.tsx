import "@testing-library/jest-dom/extend-expect";
import { act, fireEvent, render } from "@testing-library/react";
import { ArrowButton } from "./ArrowButton";

describe("Arrow button", () => {
  it("Component renders without crashing", () => {
    render(<ArrowButton handleClick={jest.fn()} />);
  });

  it("Button is correctly aria labeled", () => {
    const { getByLabelText } = render(<ArrowButton handleClick={jest.fn()} />);
    expect(getByLabelText("Pasar al slide anterior")).toBeInTheDocument();
  });

  it("HandleClick is run on button click", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<ArrowButton handleClick={handleClick} />);
    const button = getByRole("button");
    act(() => {
      fireEvent.click(button);
    });
    expect(handleClick).toHaveBeenCalled();
  });

  it("HandleClick is not run click when button is disabled", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <ArrowButton handleClick={handleClick} disabled={true} />
    );
    const button = getByRole("button");
    act(() => {
      fireEvent.click(button);
    });
    expect(handleClick).not.toHaveBeenCalled();
  });
});
