import type { TypedObject } from "sanity";

export interface Toy {
  _id: string;
  slug: Slug;
  name: string;
  shortDescription: string;
  description: PortableTextContent[];
  characteristics: Characteristic[];
  images: SanityImage[];
  isAvailable: boolean;
}

export interface Characteristic {
  _id: string;
  name: string;
  category: Category;
}

export interface Category {
  _id: string;
  name: string;
}

export type PortableTextContent = TypedObject | TypedObject[];

/** Resolves to an image URL with Sanity's helper function. */
export type SanityImage = {
  /** Alternative text description of the image   */
  altText: string;
  /**
   * LQIP (Low-Quality Image Preview) base64-encoded string or data URI.
   *
   * Useful for Next.js Image `blurDataUR` property.
   * _Only takes effect when combined with placeholder="blur"._
   */
  placeholder: string;
  _type: string;
  asset: {
    _ref: string;
    _type: "reference";
  };
};

export interface CallToAction {
  name: string;
  url: string;
}

export interface Slug {
  current: string;
}
