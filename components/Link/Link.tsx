import NextLink, { LinkProps as NextLinkProps } from "next/link";

const styles = {
  link: "link",
  buttonWithIcon: "link",
  button: "button",
  disabled: "disabled",
};

type appearances = keyof typeof styles;

interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    NextLinkProps {
  appearance: appearances;
}

export const Link: React.FC<LinkProps> = ({
  appearance = "link",
  children,
  className,
  ...rest
}: LinkProps) => {
  return (
    <NextLink {...rest} className={`${styles[appearance]} ${className}`}>
      {children}
    </NextLink>
  );
};
