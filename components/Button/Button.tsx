import Image from "next/image";
import React, { MouseEventHandler } from "react";
interface Appearance {
  link: string;
  buttonWithIcon: string;
  button: string;
}

const APPEARANCE: Appearance = {
  link: "md:rounded focus-within:shadow-md shadow-turquoise py-1 px-2 text-xl font-extrabold text-blue hover:text-orange  focus:text-blue  font-outfit underline",
  buttonWithIcon:
    "flex items-center   md:rounded focus-within:shadow-md shadow-turquoise py-1 px-2 text-xl font-extrabold text-blue hover:text-orange  focus:text-blue  font-outfit underline",
  button:
    "bg-orange hover:bg-blue focus:bg-orange  md:rounded  focus-within:shadow-md shadow-turquoise py-4 px-8 text-xl font-extrabold text-white font-outfit ",
};

type Appearances = keyof Appearance;

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  disabled?: boolean;
  appearance: Appearances;
  handleClick?: MouseEventHandler;
  buttonAttributes?: Partial<HTMLButtonElement>;
  icon?: string;
  text: string;
}

export const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
  const { appearance, text, disabled, icon, handleClick, ...rest } = props;
  const getAppearance = (appearance: Appearances): string => {
    return APPEARANCE[appearance];
  };

  return (
    <button
      disabled={disabled}
      className={getAppearance(appearance)}
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
