import React from "react";

const baseStyle =
  "font-extrabold rounded focus-within:shadow-md shadow-turquoise text-base font-outfit";

const baseStyleLink = "py-1 px-2 text-blue focus:text-blue underline";

const Appearance = {
  link: `${baseStyle} ${baseStyleLink} hover:text-orange`,
  buttonWithIcon: `${baseStyle} flex items-center ${baseStyleLink} hover:text-orange`,
  button: `${baseStyle} bg-orange focus:bg-orange  py-3 px-7 text-white hover:bg-blue`,
};

type Appearances = keyof typeof Appearance;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appearance: Appearances;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { appearance, children, ...rest } = props;

  return (
    <button
      {...rest}
      className={`${Appearance[appearance]} disabled:cursor-not-allowed disabled:bg-gray`}
    >
      {children}
    </button>
  );
};
