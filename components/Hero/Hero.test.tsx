import React from "react";
import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

jest.mock("sanity", () => ({
  usePreviewSubscription: jest.fn(),
  getClient: jest.fn(),
}));

const mockedHero = {
  title:
    "Adaptamos y prestamos juguetes para niños y niñas con discapacidades motrices complejas.",
  subTitle: "El prestamo no tiene costo",
  image: {
    src: "https://i.imgur.com/JujA9mV.jpg",
    alt: "Hero imagen",
  },
};

describe("Hero component", () => {
  it("renders the correct content", () => {
    render(<Hero {...mockedHero} />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByText(mockedHero.subTitle)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();

    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt");
  });
});
