import Link from "next/link";
import React from "react";
import { Logo } from "../Logo/Logo";

export interface Link {
  label: string;
  route: string;
}

interface FooterLinkProps extends React.HTMLProps<HTMLLIElement> {
  route: string;
}

interface FooterProps extends Partial<React.HTMLProps<HTMLElement>> {
  links: Link[];
}

const textClasses =
  "font-outfit text-[0.875rem] text-center font-semibold text-white";

const focusClasses = "focus:shadow-md focus:border-white focus:border-2";

const disabledClasses = "disabled:cursor-not-allowed disabled:bg-gray";

export const Footer = ({ links }: FooterProps) => {
  return (
    <footer
      className="flex justify-center bg-blue pb-14 pt-10 md:pt-14"
      aria-label="Footer"
      data-testid="footer"
    >
      <nav className="mx-2 flex max-w-5xl flex-col items-center justify-between self-start md:flex-row">
        <Link
          className={`rounded-sm border-2 border-transparent p-1 outline-none ${focusClasses}`}
          aria-label="Home"
          href={"/"}
        >
          <Logo className="h-auto w-20 md:w-24" darkBackground />
        </Link>
        <ul className="flex w-10/12 flex-col items-center justify-around pt-8 md:flex-row md:pt-0">
          {links.map(({ route, label }) => (
            <FooterItem key={route} route={route}>
              {label}
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
        className={`rounded-sm border-2 border-transparent p-1 outline-none hover:underline ${disabledClasses} ${textClasses} ${focusClasses}`}
        data-text={children}
        href={route}
      >
        {children}
      </Link>
    </li>
  );
};
