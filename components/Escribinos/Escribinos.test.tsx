import React from "react";
import { render, screen } from "@testing-library/react";

import { Escribinos } from "components/Escribinos/Escribinos";

describe("Escribinos", () => {
  it("should render correctly", () => {
    render(<Escribinos />);
    expect(screen.getByText("Escribinos")).toBeInTheDocument();
  });
});
