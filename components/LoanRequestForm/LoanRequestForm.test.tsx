import React from "react";
import { render, screen } from "@testing-library/react";

import { LoanRequestForm } from "components/LoanRequestForm/LoanRequestForm";

describe("LoanRequestForm", () => {
  it("should render correctly", () => {
    render(<LoanRequestForm />);
    expect(
      screen.getByText("Formulario para solicitar el préstamo")
    ).toBeInTheDocument();
  });
});
