"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Logo } from "../Logo/Logo";
import { NavbarLink } from "types/layout-schema-types";

interface NavbarLinkProps extends React.HTMLProps<HTMLLIElement> {
  route: string;
}

interface NavbarProps extends Partial<React.HTMLProps<HTMLElement>> {
  links: NavbarLink[];
}

export const Navbar = ({ links, ...props }: NavbarProps) => {
  const pathname = usePathname();
  const isCurrentIndex = pathname === "/";
  return (
    <nav aria-label="Navegacion principal" {...props}>
      <div className="mx-auto flex max-w-[1000px] items-center justify-between">
        <Link
          aria-label="Home"
          href={"/"}
          aria-current={isCurrentIndex ? "page" : false}
        >
          <Logo className="h-auto w-28" />
        </Link>
        <ul className="flex flex-row space-x-[55px] self-start border-b-[0.5px] border-b-gray pt-1">
          {links.map(({ url, name }) => (
            <NavbarItem key={name} route={url}>
              {name}
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
      className={`flex h-[60px] items-center border-b-[5px] pb-2 font-outfit text-base  ${conditionalClasses}`}
      key={route}
      {...props}
    >
      <Link
        data-text={children}
        className="duration-300 before:invisible before:block before:h-0 before:overflow-hidden before:font-extrabold before:content-[attr(data-text)] hover:font-extrabold hover:text-orange"
        href={route}
        aria-current={isCurrent ? "page" : false}
      >
        {children}
      </Link>
    </li>
  );
};
