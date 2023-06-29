export interface Layout {
  navbarLinks: NavbarLink[];
  footerLinks: FooterLink[];
}

export interface NavbarLink {
  _key?: string;
  name: string;
  url: string;
}

export interface FooterLink {
  _key?: string;
  name: string;
  url: string;
}
