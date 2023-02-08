import { TextareaHTMLAttributes, useState } from "react";

interface InputProps
  extends Pick<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    | "id"
    | "value"
    | "onChange"
    | "name"
    | "required"
    | "className"
    | "disabled"
    | "cols"
    | "rows"
  > {
  error?: boolean;
  label: string;
  helperText: string;
}

const TextArea = ({
  id,
  error = false,
  label,
  required,
  helperText,
  disabled,
  className,
  ...props
}: InputProps) => {
  const [isTouched, setIsTouched] = useState(false);
  const spanStyles = `h-[35.5px] font-medium ${isTouched ? "font-bold" : ""} ${
    error ? "text-red font-bold" : ""
  } transition-all ease-in-out duration-300`;
  const inputStyles = `${className} resize-none w-full h-[240px] rounded-[3px] p-2 ring-1
   focus-visible:ring-3 focus-visible:shadow-2md focus-visible:bg-blue-light active:ring-orange 
   transition-all ease-in-out duration-150
   ${disabled ? "ring-gray-dark" : ""} ${
    error ? "ring-3 ring-red" : "ring-blue"
  }`;
  const svgStyles = `absolute right-[13px] top-[11px] ${
    error ? "block" : "hidden"
  }`;

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="font-inter text-base flex flex-col ">
        <span className={spanStyles}>{`${required ? "*" : ""}${label}`}</span>

        <div className="relative">
          <textarea
            id={id}
            required={required}
            disabled={disabled}
            aria-invalid={error}
            rows={9}
            aria-describedby="error"
            onClick={() => setIsTouched(true)}
            onBlur={() => setIsTouched(false)}
            className={inputStyles}
            {...props}
          />

          <svg
            className={svgStyles}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="#A91E1E" />
            <path
              d="M11.1195 13.3659L10.7157 7.18848H13.2728L12.8691 13.3659H11.1195ZM11.9943 17.1476C11.6085 17.1476 11.2855 17.0175 11.0253 16.7574C10.774 16.4972 10.6484 16.1742 10.6484 15.7884C10.6484 15.4025 10.774 15.0795 11.0253 14.8194C11.2855 14.5592 11.6085 14.4291 11.9943 14.4291C12.3801 14.4291 12.6986 14.5592 12.9498 14.8194C13.201 15.0795 13.3266 15.4025 13.3266 15.7884C13.3266 16.1742 13.201 16.4972 12.9498 16.7574C12.6986 17.0175 12.3801 17.1476 11.9943 17.1476Z"
              fill="white"
            />
          </svg>
        </div>
      </label>

      <div className="h-[42px] pt-[3px]">
        <p
          id="error"
          className={`font-bold text-base text-red pt-[3px] ${
            error ? "visible" : "hidden"
          }`}
        >
          {helperText}
        </p>
      </div>
    </div>
  );
};

export default TextArea;
