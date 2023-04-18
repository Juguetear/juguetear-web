export interface LayoutSchema {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  footerLinks: FooterLink[];
  navbarLinks: NavbarLink[];
}

export interface FooterLink {
  _key: string;
  _type: string;
  name: string;
  url: string;
}

export interface NavbarLink {
  _key: string;
  _type: string;
  name: string;
  url: string;
}

export interface CTA {
  _type: string;
  name: string;
  url: string;
}
export interface Photo {
  _type: string;
  altText: string;
  asset: Asset;
}
export interface Asset {
  _ref: string;
  _type: string;
}
