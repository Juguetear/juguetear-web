import React from "react";
import { render } from "@testing-library/react";
import { FeaturedToysSection } from "./FeaturedToysSection";
import { featuredToysData } from "components/FeaturedToysSection/featuredToysData";

jest.mock("swiper/css", jest.fn());
jest.mock("swiper/css/navigation", jest.fn());

describe("FeaturedToysSection", () => {
  test("renders correctly", () => {
    render(<FeaturedToysSection {...featuredToysData} />);
  });
});
