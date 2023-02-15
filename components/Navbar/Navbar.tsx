"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Logo } from "../Logo/Logo";

export interface Link {
  label: string;
  route: string;
}

interface NavbarLinkProps extends React.HTMLProps<HTMLLIElement> {
  route: string;
  isCurrent: boolean;
}

interface NavbarProps extends Partial<React.HTMLProps<HTMLElement>> {
  links: Link[];
}

export const Navbar = ({ links, ...props }: NavbarProps) => {
  const pathname = usePathname();
  const isCurrentIndex = pathname === "/";
  return (
    <nav aria-label="Navegacion principal" {...props}>
      <div className="flex max-w-5xl mx-auto items-end justify-between">
        <Link
          aria-label="Home"
          href={"/"}
          aria-current={isCurrentIndex ? "page" : false}
        >
          <Logo className="w-28 h-auto" />
        </Link>
        <ul className="flex flex-row border-b-gray border-b-[0.5px] space-x-16">
          {links.map(({ route, label }) => (
            <NavbarItem
              key={route}
              route={route}
              isCurrent={pathname === route}
            >
              {label}
            </NavbarItem>
          ))}
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
  const currentClasses = "border-b-orange text-orange font-extrabold";
  const notCurrentClasses = "border-transparent text-blue font-semibold  ";
  const conditionalClasses = isCurrent ? currentClasses : notCurrentClasses;

  return (
    <li
      className={`font-outfit text-[19px] h-24 flex items-center border-b-[5px] ${conditionalClasses}`}
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
