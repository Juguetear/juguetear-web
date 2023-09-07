import { render, screen } from "@testing-library/react";
import React from "react";
import { CooperateSection } from "./CooperateSection";

type Props = React.ComponentProps<typeof CooperateSection>;

describe("CooperateSection", () => {
  const defaultProps: Props = {
    title: "¿Cómo puedo colaborar?",
    description:
      "Hay dos formas en las que las personas que así lo quieran pueden colaborar con nuestro proyecto.",
    blocks: [
      {
        _key: "5a523421c847",
        title: "Doná juguetes",
        image: {
          altText: "section 1",
          _type: "img",
          asset: {
            _ref: "image-01bfa19aa39d6a8fcfc29af44606099505687d65-156x165-png",
            _type: "reference",
          },
          placeholder:
            "data:image/png;base64,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",
        },
        description:
          "Quienes quieran participar pueden colaborar con juguetes a pilas y diversos materiales. Para ello, contactarse a través del mail juguetear2021@gmail.com",
      },
      {
        title: "Replicá el proyecto",
        image: {
          _type: "img",
          asset: {
            _ref: "image-0628f0011bd584495fad046400a6032329caacce-106x129-jpg",
            _type: "reference",
          },
          altText: "section 2",
          placeholder:
            "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAYABQDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAUHAgQGCP/EACQQAAEEAgEDBQEAAAAAAAAAAAIBAwQFAAZBERJhBxMhIjKR/8QAGAEAAwEBAAAAAAAAAAAAAAAAAgQFAwb/xAAhEQABBAICAgMAAAAAAAAAAAABAAIDBBEhMVESQaHB4f/aAAwDAQACEQMRAD8A9K7NYHWUsmQyiE8IqjYryXGVZ6W3GwMbA+1e9SjzCUkUl/JePGdL6ibJCalx60XUcfAkcdbHgc0rfYatxiKUIPs0qGZ9OnaicYw2EO8MtJz7+P0rRtp8LJI9bxyN96+lZ+Mj6W2h21azMhPi4yafBIvOMXQFpBwQqEotVurtZ2zyfq2aEaCX6NPGY61Fc2uRIr6xxWzQF7yJOiDjGFVvS14WxN4Pau36MV2ae1IMOiwABxo6z2oV9dm099ypH3QRslJO35RevKfzGMZCk8muIBK7WqY54WyvY3JAJ0v/2Q==",
        },
        description:
          "Podés donarnos juguetes electrónicos para que sean adaptados para niños y niñas con discapacidades motrices complejas",
        _key: "c73b0479a25b",
      },
    ],
    callOut: [
      {
        children: [
          {
            _type: "span",
            marks: [],
            text: "Si te interesa participar del proyecto podés leer más sobre nuestros talleres en la sección colaborar.",
            _key: "b799581834030",
          },
        ],
        _type: "block",
        style: "normal",
        _key: "1b1fcadc591a",
        markDefs: [],
      },
    ],
  };

  test("renders correctly", () => {
    render(<CooperateSection {...defaultProps} />);
  });

  test("The first block has a different font weight after the first dot", () => {
    render(<CooperateSection {...defaultProps} />);
    const firstBlock = screen.getByText(
      "Quienes quieran participar pueden colaborar con juguetes a pilas y diversos materiales."
    );

    expect(firstBlock.innerHTML).toBe(
      `Quienes quieran participar pueden colaborar con juguetes a pilas y diversos materiales.<strong> Para ello, contactarse a través del mail juguetear2021@gmail.com</strong>`
    );
  });
});
