import type { CallToAction, PortableTextContent, SanityImage } from "./common";

export interface AboutPage {
  team: TeamMember[];
  content: PortableTextContent;
}

export interface TeamMember {
  _id: string;
  name: string;
  surname: string;
  pronouns: string;
  role: string;
  image?: SanityImage;
  contactLinks: ContactLink[];
}

export interface ContactLink extends CallToAction {
  _key: string;
}
