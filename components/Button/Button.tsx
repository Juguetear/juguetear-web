import Image from "next/image";
import React, { MouseEventHandler } from "react";
interface Appearance {
  link: string;
  buttonWithIcon: string;
  button: string;
}

const BASE_STYLE =
  "font-extrabold rounded focus-within:shadow-md shadow-turquoise text-base font-outfit";

const BASE_STYLE_LINK = "py-1 px-2 text-blue focus:text-blue underline";

const APPEARANCE: Appearance = {
  link: `${BASE_STYLE} ${BASE_STYLE_LINK} hover:text-orange`,
  buttonWithIcon: `${BASE_STYLE} flex items-center ${BASE_STYLE_LINK} "hover:text-orange"`,
  button: `${BASE_STYLE} bg-orange focus:bg-orange  py-3 px-7 text-white hover:bg-blue`,
};

type Appearances = keyof Appearance;

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  disabled?: boolean;
  appearance: Appearances;
  handleClick: MouseEventHandler;
  buttonAttributes?: Partial<HTMLButtonElement>;
  icon?: string;
  text: string;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { appearance, text, disabled, icon, handleClick, ...rest } = props;

  return (
    <button
      disabled={disabled}
      className={`${APPEARANCE[appearance]} disabled:cursor-not-allowed disabled:bg-gray`}
      onClick={handleClick}
      {...rest}
    >
      {icon && (
        <div className="pr-3">
          <Image src={icon} alt="SVG" width={27} height={35} />
        </div>
      )}
      {text}
    </button>
  );
};
