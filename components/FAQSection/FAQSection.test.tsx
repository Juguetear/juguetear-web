import { screen, render } from "@testing-library/react";
import { FAQSection } from "./FAQSection";
import { FAQMockData } from "components/FAQSection/FAQMockData";

describe("FAQSection", () => {
  it("should render", () => {
    render(<FAQSection {...FAQMockData} />);
  });
});
