import NextLink, { LinkProps as NextLinkProps } from "next/link";

const styles = {
  link: "link",
  buttonWithIcon: "link",
  button: "button",
};

type appearances = keyof typeof styles;

interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    NextLinkProps {
  appearance: appearances;
  children: string;
  disabled: boolean;
}

export const Link: React.FC<LinkProps> = ({
  appearance = "link",
  children,
  ...rest
}: LinkProps) => {
  return (
    <NextLink {...rest} className={styles[appearance]}>
      {children}
    </NextLink>
  );
};
