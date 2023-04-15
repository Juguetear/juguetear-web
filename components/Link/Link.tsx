import NextLink, { LinkProps as NextLinkProps } from "next/link";
import React from "react";

const baseStyle =
  " inline-flex justify-between gap-2 font-extrabold rounded  text-base font-outfit focus-within:shadow-md";

const baseStyleLink = "py-1 px-2 text-blue focus:text-blue underline ";

const styles = {
  link: `${baseStyle} ${baseStyleLink} hover:text-orange`,
  buttonWithIcon: `${baseStyle} ${baseStyleLink} hover:text-orange`,
  button: `${baseStyle} bg-orange focus:bg-orange py-3 px-7 text-white hover:bg-blue focus:outline outline-blue active:bg-blue`,
};

type appearances = keyof typeof styles;

interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    NextLinkProps {
  appearance: appearances;
}

export const Link: React.FC<LinkProps> = (props: LinkProps) => {
  const { appearance = "link", children } = props;

  return (
    <NextLink
      {...props}
      className={`${styles[appearance]} disabled:cursor-not-allowed disabled:bg-gray`}
    >
      {children}
    </NextLink>
  );
};
