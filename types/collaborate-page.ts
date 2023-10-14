import type { MaybeImage, PortableTextContent } from "./common";

export interface CollaboratePage {
  title: string;
  heroSection: CollaboratePageHeroSection;
  description: PortableTextContent;
}

export interface CollaboratePageHeroSection {
  title: string;
  paragraph: string;
  image: MaybeImage;
}
