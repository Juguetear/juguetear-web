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
}

interface NavbarProps extends Partial<React.HTMLProps<HTMLElement>> {
  links: Link[];
}

export const Navbar = ({ links, ...props }: NavbarProps) => {
  const pathname = usePathname();
  const isCurrentIndex = pathname === "/";
  return (
    <nav aria-label="Navegacion principal" {...props}>
      <div className="flex max-w-[1000px] mx-auto items-center justify-between">
        <Link
          aria-label="Home"
          href={"/"}
          aria-current={isCurrentIndex ? "page" : false}
        >
          <Logo className="w-28 h-auto" />
        </Link>
        <ul className="flex flex-row border-b-gray border-b-[0.5px] space-x-[55px] self-start pt-1">
          {links.map(({ route, label }) => (
            <NavbarItem key={route} route={route}>
              {label}
            </NavbarItem>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export const NavbarItem = ({ children, route, ...props }: NavbarLinkProps) => {
  const pathname = usePathname();
  const currentClasses = "border-b-orange text-orange font-bold";
  const notCurrentClasses = "border-transparent text-blue font-medium";
  const isCurrent = pathname === route;
  const conditionalClasses = isCurrent ? currentClasses : notCurrentClasses;

  return (
    <li
      className={`font-outfit pb-2 text-base h-[60px] flex items-center border-b-[5px]  ${conditionalClasses}`}
      key={route}
      {...props}
    >
      <Link
        data-text={children}
        className="hover:text-orange hover:font-extrabold duration-300 before:font-extrabold before:overflow-hidden before:content-[attr(data-text)] before:invisible before:h-0 before:block"
        href={route}
        aria-current={isCurrent ? "page" : false}
      >
        {children}
      </Link>
    </li>
  );
};
