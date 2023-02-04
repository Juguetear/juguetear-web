import { MouseEventHandler } from "react";

const APPEARANCE = ["link", "button", "buttonWithIcon"] as const;

type Appearance = typeof APPEARANCE[number];

interface ButtonProps {
  disabled?: boolean;
  appearance: Appearance;
  handleClick: MouseEventHandler;
  buttonAttributes: HTMLButtonElement;
}

export const Button = ({
  disabled = false,
  appearance,
  handleClick,
}: //   buttonAttributes,
ButtonProps) => {
  const getAppearance = (appearance: Appearance): string => {
    switch (appearance) {
      case "link":
        return "  md:rounded focus-within:shadow-md shadow-turquoise py-1 px-2 text-xl font-extrabold text-blue hover:text-orange  focus:text-blue  font-outfit underline";
      case "buttonWithIcon":
        return "";
      case "button":
        return "bg-orange hover:bg-blue focus:bg-orange  md:rounded  focus-within:shadow-md shadow-turquoise py-4 px-8 text-xl font-extrabold text-white font-outfit ";
      default:
        return "";
    }
  };

  return (
    <button
      disabled={disabled}
      className={getAppearance(appearance)}
      onClick={handleClick}
      //   {...buttonAttributes}
    >
      Pedir Juguete
    </button>
  );
};
