import { useState } from "react";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

export const Checkbox = ({ label, id, ...props }: CheckboxProps) => {
  const [focus, setFocus] = useState<string>("");

  const containerStyle = "flex max-w-[13rem] items-center rounded p-1";

  const inputStyle =
    "peer appearance-none w-5 min-w-[1.25rem] h-5 border rounded-[2px] border-blue cursor-pointer checked:border-orange checked:bg-orange hover:enabled:border-2 focus:outline-none disabled:cursor-not-allowed disabled:border-gray-dark disabled:bg-gray-medium";

  const labelStyle =
    "text-blue text-sm font-outfit ml-2 peer-checked:text-orange font-medium peer-hover:font-bold peer-disabled:text-gray-dark peer-disabled:font-medium";

  const formattedId = id.toLowerCase().split(" ").join("");

  if (!label || label.trim().length === 0) {
    return null;
  }

  const handlerOnClick = () => {
    setFocus("");
  };

  const handlerOnFocus = () => {
    setFocus("focus-within:shadow-2md");
  };

  return (
    <div className={`${containerStyle} ${focus !== "" ? focus : null}`}>
      <input
        id={formattedId}
        type="checkbox"
        className={inputStyle}
        {...props}
        onClick={handlerOnClick}
        onFocus={handlerOnFocus}
      />
      <label htmlFor={formattedId} className={labelStyle}>
        {label}
      </label>
    </div>
  );
};
