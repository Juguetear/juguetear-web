import React from "react";
import NextLink from "next/link";

const baseStyle =
  " flex justify-between gap-2 font-extrabold rounded  text-base font-outfit";

const baseStyleLink =
  "py-1 px-2 text-blue focus:text-blue underline focus-within:shadow-md";

const Appearance = {
  link: `${baseStyle} ${baseStyleLink} hover:text-orange`,
  buttonWithIcon: `${baseStyle} ${baseStyleLink} hover:text-orange`,
  button: `${baseStyle} bg-orange focus:bg-orange  py-3 px-7 text-white hover:bg-blue  focus:border-blue`,
};

type Appearances = keyof typeof Appearance;

interface LinkProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appearance: Appearances;
}

export const Link: React.FC<LinkProps> = (props: LinkProps) => {
  const { appearance, children } = props;

  return (
    <NextLink
      href="/"
      className={`${Appearance[appearance]} disabled:cursor-not-allowed disabled:bg-gray`}
    >
      {children}
    </NextLink>
  );
};
