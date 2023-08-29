import { PortableTextContent } from "types/common";

export interface FaqPage {
  title: string;
  paragraph: string;
  faqList: Faq[];
}

export interface Faq {
  question: string;
  answer: PortableTextContent;
}
