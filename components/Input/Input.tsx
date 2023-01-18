import { useState } from "react";

interface Props {
  id?: string;
  error?: boolean;
  touched?: boolean;
  type?: string;
  value?: string | number | readonly string[];
  onChange?: (value: string) => void;

  name: string;
  label: string;
  helperText: string;
}

const Input = ({
  id = "",
  value = "",
  type = "text",
  onChange = () => {},
  error = false,
  touched = false,
  name,
  label,
  helperText,
}: Props) => {
  const [defaultValue, setDefaultValue] = useState("");
  const [isTouched, setIsTouched] = useState(touched);

  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className={`
        font-medium text-base transition-3 transition-all flex flex-col
        ${isTouched || error ? "font-bold" : ""} 
        ${error ? "text-red" : ""}`}
      >
        {label}

        <input
          type={type}
          id={id}
          name={name}
          aria-label={name}
          className={`
           border-[1px] border-solid border-blue transition-6 font-normal transition-all w-[680px] h-[48px] box-border rounded-[4px]
           ${isTouched ? "border-[3px] shadow-input bg-blue-light" : ""}
           ${error ? "border-red border-[2px]" : ""} `}
          value={value || defaultValue}
          onChange={({ target }) => {
            onChange(target.value);
            setDefaultValue(target.value);
          }}
          onClick={() => setIsTouched(true)}
          onBlur={() => setIsTouched(false)}
        />
      </label>

      <p
        className={`font-bold text-base text-red 
          ${error ? "visible" : "hidden"}`}
      >
        {helperText}
      </p>
    </div>
  );
};

export default Input;
