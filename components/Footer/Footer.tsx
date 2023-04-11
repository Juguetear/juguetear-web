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

const focusClasses = "focus:shadow-md focus:border-white focus:border-[2px]";

export const Footer = ({ links }: FooterProps) => {
  return (
    <footer
      className="flex items-center justify-center bg-blue pb-14 pt-10 md:pt-[52px]"
      aria-label="Footer"
      data-testid="footer"
    >
      <div className="mx-auto flex w-full max-w-[1040px] flex-col items-center justify-between md:flex-row">
        <Link
          className={`border-2 border-transparent outline-none md:pl-2 ${focusClasses}`}
          aria-label="Home"
          aria-current="page"
          href={"/"}
        >
          <Logo className="h-auto w-20 md:w-24" darkBackground={true} />
        </Link>
        <ul className="flex w-4/5 flex-col items-center justify-around pt-8 md:flex-row md:pt-0">
          {links.map(({ route, label }) => (
            <FooterItem key={route} route={route}>
              {label}
            </FooterItem>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export const FooterItem = ({ children, route, ...props }: FooterLinkProps) => {
  return (
    <li
      key={route}
      className={`flex items-center pb-[19px] font-outfit text-[14px] font-semibold leading-4 md:pb-0`}
      {...props}
    >
      <Link
        className={`rounded-sm border-2 border-transparent  px-1 font-semibold text-white outline-none hover:underline ${focusClasses}`}
        data-text={children}
        href={route}
        aria-current="page"
      >
        {children}
      </Link>
    </li>
  );
};
