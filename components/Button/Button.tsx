const styles = {
  link: "link",
  buttonWithIcon: "link",
  button: "button",
};

type Appearances = keyof typeof styles;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appearance: Appearances;
}

export const Button: React.FC<ButtonProps> = ({
  appearance,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button {...rest} className={`${styles[appearance]}`}>
      {children}
    </button>
  );
};
