import React from "react";
import { render, screen } from "@testing-library/react";
import { Hero, HeroSection } from "./Hero";

const mockedHero: HeroSection = {
  title:
    "Adaptamos y prestamos juguetes para niños y niñas con discapacidades motrices complejas.",
  description: "El prestamo no tiene costo",
  cta: {
    name: "Ver juguetes",
    url: "##",
  },
  photo: {
    _type: "photo",
    placeholder:
      "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAOABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUEBgf/xAAgEAABBAIDAAMAAAAAAAAAAAABAgMEEQAFBhIxExVx/8QAFgEBAQEAAAAAAAAAAAAAAAAABAID/8QAGxEAAgMAAwAAAAAAAAAAAAAAAQMAAgQRElH/2gAMAwEAAhEDEQA/AIHGJLC9cw3JkK+BlXZIq7OPNjszJMaNAkqYIctfcV+Yh4o86riK1xujL5spcCbIOGhiDcwC7t1F+aHClTwNXXmFeuygL8xSmVb2oBNHgbtMeKhuW4pbw9UB7hlF+nfRaW5zoSPATeGYjXf0SRkE/9k=",
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
