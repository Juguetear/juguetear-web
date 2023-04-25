import React from "react";
import { render, screen } from "@testing-library/react";
import { Hero, HeroSection } from "./Hero";

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
      _ref: "image-2c6ca8b13a29f52d84ed64aca9ef05cc61c1f2b4-681x478-jpg",
      _type: "reference",
    },
  },
};

describe("Hero component", () => {
  it("renders the correct content", () => {
    render(<Hero {...mockedHero} />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByText(mockedHero.description)).toBeInTheDocument();
    expect(screen.getByRole("link")).toBeInTheDocument();

    const image = screen.getByRole("img") as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
    expect(image.src).toContain(mockedHero.photo.asset._ref.split("-")[1]);
    expect(image).toHaveAttribute("alt", mockedHero.photo.altText);
  });
});
