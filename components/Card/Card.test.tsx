import { render } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
  const propDefault = {
    title: "Dragón",
    description: "Dragón que emite luces y sonido cuando se pulsa el botón.",
    available: true,
    link: "",
  };
  it("Card available", () => {
    render(<Card {...propDefault} />);
  });

  it("Card unavailable", () => {
    propDefault.available = false;
    render(<Card {...propDefault} />);
  });

  it("Card waith image", () => {
    render(<Card {...propDefault} />);
  });
});
