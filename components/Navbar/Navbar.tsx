"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";
import type { NavbarLink } from "types/layout";
import { Logo } from "../Logo/Logo";
import XMark from "components/XMark/XMark";
import IconBars from "components/IconBars/IconBars";

interface NavbarLinkProps extends React.HTMLProps<HTMLLIElement> {
  route: string;
}

interface NavbarProps {
  links: NavbarLink[];
}

export const Navbar = ({ links }: NavbarProps) => {
  const pathname = usePathname();
  const isCurrentIndex = pathname === "/";

  return (
    <Disclosure as="nav" aria-label="Navegacion principal">
      {({ open, close }) => (
        <>
          <div className="mx-auto flex max-w-[1000px] items-center justify-between">
            <Link
              aria-label="Home"
              href={"/"}
              aria-current={isCurrentIndex ? "page" : false}
            >
              <Logo className="h-auto w-20 sm:w-28 p-2" />
            </Link>

            {/* Mobile menu open button*/}
            <Disclosure.Button className="sm:hidden p-2">
              {!open && (
                <div className="flex items-center space-x-5  text-orange">
                  <p
                    className="font-outfit text-base font-bold"
                    data-text="Menú"
                  >
                    Menú
                  </p>
                  <IconBars className="block h-6 w-6" aria-hidden="true" />
                </div>
              )}
            </Disclosure.Button>

            {/* nav items desktop */}
            <ul className="flex-row space-x-[55px] self-start border-b-[0.5px] border-b-gray pt-1 hidden sm:flex">
              {links.map(({ url, name }) => (
                <NavbarItem key={name} route={url}>
                  {name}
                </NavbarItem>
              ))}
            </ul>

            {/* nav items mobile */}
            <Disclosure.Panel
              className={`${
                open ? "block" : "hidden"
              } sm:hidden fixed inset-0 z-50 bg-orange`}
            >
              {/* Mobile menu close button*/}
              {open && (
                <div className="flex justify-end">
                  <Disclosure.Button className="p-6 ">
                    <div className="flex items-center space-x-5">
                      <p
                        className="font-outfit text-base font-bold text-white"
                        data-text="Cerrar"
                      >
                        Cerrar
                      </p>
                      <XMark className="block h-6 w-6" aria-hidden="true" />
                    </div>
                  </Disclosure.Button>
                </div>
              )}
              <div className="flex flex-col space-y-9 px-6">
                {links.map(({ url, name }) => (
                  <NavBarItemMobile
                    key={name}
                    route={url}
                    onClick={() => close()}
                  >
                    {name}
                  </NavBarItemMobile>
                ))}
              </div>
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export const NavbarItem = ({ children, route, ...props }: NavbarLinkProps) => {
  const pathname = usePathname();
  const currentClasses = "border-b-orange text-orange";
  const notCurrentClasses = "border-transparent text-blue";
  const isCurrent = pathname === route;
  const conditionalClasses = isCurrent ? currentClasses : notCurrentClasses;

  return (
    <li
      className={`flex h-[60px] items-center rounded-none border-b-[5px] pb-2 font-outfit text-base font-medium ${conditionalClasses}`}
      key={route}
      {...props}
    >
      <Link
        data-text={children}
        className="link block overflow-hidden font-medium hover:text-orange"
        href={route}
        aria-current={isCurrent ? "page" : false}
      >
        {children}
      </Link>
    </li>
  );
};

const NavBarItemMobile = ({ children, route, ...props }: NavbarLinkProps) => {
  const pathname = usePathname();
  const isCurrent = pathname === route;

  return (
    <li className={`flex h-[36px] rounded-none`} key={route} {...props}>
      <Link
        data-text={children}
        className="block overflow-hidden font-outfit font-extrabold text-xl text-white"
        href={route}
        aria-current={isCurrent ? "page" : false}
      >
        {children}
      </Link>
    </li>
  );
};
