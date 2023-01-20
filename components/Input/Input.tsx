import { InputHTMLAttributes } from "react";

interface Props
  extends Pick<
    InputHTMLAttributes<HTMLInputElement>,
    "id" | "type" | "value" | "onChange" | "name" | "required" | "className"
  > {
  error?: boolean;
  label: string;
  helperText: string;
}

const Input = ({
  id,
  error = false,
  value,
  onChange,
  type,
  name,
  label,
  required,
  className,
  helperText,
}: Props) => (
  <div className="flex flex-col">
    <label
      htmlFor={name}
      className={`
        font-medium text-base transition-3 transition-all flex flex-col focus:font-bold
        ${error ? "text-red" : ""}`}
    >
      {`${required ? "*" : ""} ${label}`}

      <input
        type={type}
        id={id}
        name={name}
        required={required}
        aria-invalid={error}
        aria-describedby="error"
        className={`
           border-solid transition-6 font-normal transition-all w-full py-2 box-border rounded
           focus:ring-3 focus:shadow-2md focus:bg-blue-light
           ${error ? "ring-red ring-2" : "ring-1 ring-blue"} 
           ${className}`}
        value={value}
        onChange={onChange}
      />
    </label>

    <p
      id="error"
      className={`font-bold text-base text-red 
        ${error ? "visible" : "hidden"}`}
    >
      {helperText}
    </p>
  </div>
);

export default Input;
