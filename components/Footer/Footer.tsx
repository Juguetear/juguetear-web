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

const textClasses =
  "font-outfit md:text-base text-center font-semibold text-white";

const focusClasses = "focus:shadow-md focus:border-white focus:border-[3px]";

const disabledClasses = "disabled:cursor-not-allowed disabled:bg-gray";

export const Footer = ({ links }: FooterProps) => {
  return (
    <footer
      className="flex justify-center bg-blue pb-14 pt-10 md:pt-14"
      aria-label="Footer"
      data-testid="footer"
    >
      <nav className="mx-2 flex w-full max-w-5xl flex-col items-center justify-between md:flex-row">
        <Link
          className={`rounded-sm border-[3px] border-transparent p-1 outline-none ${focusClasses}`}
          aria-label="Home"
          href={"/"}
        >
          <Logo className="h-auto w-20 md:w-24" darkBackground />
        </Link>
        <ul className="flex w-10/12 flex-col items-center justify-around pt-8 md:flex-row md:pt-0">
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
    <li key={route} className="pb-5 md:pb-0" {...props}>
      <Link
        className={`rounded-sm border-[3px] border-transparent p-1 outline-none hover:underline ${disabledClasses} ${textClasses} ${focusClasses}`}
        data-text={children}
        href={route}
      >
        {children}
      </Link>
    </li>
  );
};
