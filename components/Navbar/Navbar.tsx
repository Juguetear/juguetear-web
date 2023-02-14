import Link from "next/link";
import React from "react";
import { Logo } from "../Logo/Logo";

interface NavbarLinkProps extends React.HTMLProps<HTMLLIElement> {
  route: string;
  isCurrent: boolean;
}

interface NavbarProps extends Partial<React.HTMLProps<HTMLElement>> {
  isCurrentIndex: boolean;
}

export const Navbar = ({ children, isCurrentIndex, ...props }: NavbarProps) => {
  return (
    <nav aria-label="Navegacion principal" {...props}>
      <div className="flex max-w-5xl mx-auto items-end justify-between">
        <Link href={"/"} aria-current={isCurrentIndex ? "page" : false}>
          <Logo className="w-28 h-auto" />
        </Link>
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
      key={route}
      {...props}
    >
      <Link
        className="hover:text-orange hover:font-extrabold duration-300"
        href={route}
        aria-current={isCurrent ? "page" : false}
      >
        {children}
      </Link>
    </li>
  );
};
