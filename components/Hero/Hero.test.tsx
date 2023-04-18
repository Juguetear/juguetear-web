import React from "react";
import { render, screen } from "@testing-library/react";
import { Hero, HeroSection } from "./Hero";

jest.mock("sanity", () => ({
  usePreviewSubscription: jest.fn(),
  getClient: jest.fn(),
}));

const mockedHero: HeroSection = {
  title:
    "Adaptamos y prestamos juguetes para niños y niñas con discapacidades motrices complejas.",
  description: "El prestamo no tiene costo",
  cta: {
    _type: "photo",
    name: "Ver juguetes",
    url: "##",
  },
  photo: {
    _type: "photo",
    altText: "Hero imagen",
    asset: {
      _ref: "image-maestro-750x478-jpg",
      _type: "image",
    },
  },
};

describe("Hero component", () => {
  it("renders the correct content", () => {
    render(<Hero {...mockedHero} />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByText(mockedHero.description)).toBeInTheDocument();
    expect(screen.getByRole("link")).toBeInTheDocument();

    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
    expect(image).toHaveAttribute("alt");
  });
});
