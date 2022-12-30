import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../../app/page";

describe("Home", () => {
  it("renders a heading (h1)", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      level: 1,
      name: /Hola\!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
