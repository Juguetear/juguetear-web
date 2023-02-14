import Link from "next/link";
import React from "react";
import { Logo } from "../Logo/Logo";

interface NavbarLinkProps extends React.HTMLProps<HTMLLIElement> {
  route: string;
  isCurrent: boolean;
}

export const Navbar = ({
  children,
  ...props
}: Partial<React.HTMLProps<HTMLElement>>) => {
  return (
    <nav aria-label="Navegacion principal" data-testid="nav" {...props}>
      <div className="flex max-w-5xl mx-auto items-end justify-between">
        <Logo className="w-28 h-auto" />
        <ul className="flex flex-row border-b-gray border-b-[0.5px] space-x-16">
          {children}
        </ul>
      </div>
    </nav>
  );
};

export const NavbarItem = ({
  children,
  route,
  isCurrent,
  ...props
}: NavbarLinkProps) => {
  const currentClasses =
    "border-b-orange border-b-[5px] text-orange font-extrabold";
  const notCurrentClasses = "text-blue font-semibold";
  const conditionalClasses = isCurrent ? currentClasses : notCurrentClasses;

  return (
    <li
      className={`box-content font-outfit text-[19px] h-24 flex items-center ${conditionalClasses}`}
      data-testid={`li-${route}`}
      key={route}
      {...props}
    >
      <Link
        className="hover:text-orange hover:font-extrabold duration-300"
        href={route}
        data-testid={`link-${route}`}
        aria-current={isCurrent ? "page" : undefined}
      >
        {children}
      </Link>
    </li>
  );
};