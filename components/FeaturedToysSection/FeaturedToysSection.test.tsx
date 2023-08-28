import React from "react";
import { render } from "@testing-library/react";
import { FeaturedToysSection } from "./FeaturedToysSection";
import { featuredToysData } from "components/FeaturedToysSection/featuredToysData";

describe("FeaturedToysSection", () => {
  test("renders correctly", () => {
    render(<FeaturedToysSection {...featuredToysData} />);
  });
});
