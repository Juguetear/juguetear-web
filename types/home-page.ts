import type {
  CallToAction,
  PortableTextContent,
  SanityImage,
  Toy,
} from "./common";

export interface HomePage {
  heroSection: HeroSection;
  twoImagesSection: TwoImagesSection;
  featuredToysSection: FeaturedToysSection;
  cooperateSection: CooperateSection;
}

export interface HeroSection {
  title: string;
  description: string;
  cta: CallToAction;
  photo: SanityImage;
}

export interface TwoImagesSection {
  title: string;
  description: string;
  photos: [SanityImage, SanityImage];
}

export interface FeaturedToysSection {
  title: string;
  description: string;
  toys: Toy[];
  cta: CallToAction;
}

export interface CooperateSection {
  title: string;
  description: string;
  blocks: [SectionBlock, SectionBlock];
  callOut: PortableTextContent;
}

export interface SectionBlock {
  _key: string;
  image: SanityImage;
  title: string;
  description: string;
}
