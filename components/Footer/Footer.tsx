import Link from "next/link";
import React from "react";
import { Logo } from "../Logo/Logo";

import { FooterLink } from "types/layout-schema-types";

interface FooterLinkProps extends React.HTMLProps<HTMLLIElement> {
  route: string;
}

interface FooterProps extends Partial<React.HTMLProps<HTMLElement>> {
  links: FooterLink[];
}

export const Footer = ({ links }: FooterProps) => {
  return (
    <footer
      className="flex justify-center bg-blue pb-14 pt-10 lg:pt-14"
      aria-label="Footer"
      data-testid="footer"
    >
      <nav className="mx-2 flex w-full max-w-5xl flex-col items-center justify-between lg:flex-row">
        <Link
          /* TODO: #318 Ajustar los estilos en links del Footer */
          className="rounded-sm border-[3px] border-transparent p-1 outline-none"
          aria-label="Home"
          href={"/"}
        >
          <Logo className="h-auto w-20 md:w-24" darkBackground />
        </Link>
        <ul className="flex w-10/12 flex-col items-center justify-around pt-8 text-center md:block md:columns-2 lg:flex lg:flex-row lg:pt-0">
          {links.map(({ url, name }) => (
            <FooterItem key={url} route={url}>
              {name}
            </FooterItem>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export const FooterItem = ({ children, route, ...props }: FooterLinkProps) => {
  return (
    <li key={route} className="pb-5 lg:pb-0" {...props}>
      <Link
        /* TODO: #318 Ajustar los estilos en links del Footer */
        className="rounded-sm border-[3px] border-transparent p-1 outline-none hover:underline"
        data-text={children}
        href={route}
      >
        {children}
      </Link>
    </li>
  );
};
