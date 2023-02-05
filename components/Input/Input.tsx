import { InputHTMLAttributes } from "react";

interface InputProps
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
  label,
  required,
  helperText,
  className,
  ...props
}: InputProps) => (
  <div className="flex flex-col">
    <label
      htmlFor={id}
      className={`
        font-medium text-base transition-3 transition-all flex flex-col focus:font-bold
        ${error ? "text-red" : ""}`}
    >
      <span className="h-[35px] block">{`${
        required ? "*" : ""
      } ${label}`}</span>

      <div className="relative">
        <input
          id={id}
          required={required}
          aria-invalid={error}
          aria-describedby="error"
          className={`
           ${className}
           border-solid transition-6 font-normal transition-all w-full p-2 box-border rounded
           focus:ring-3 focus:shadow-2md focus:bg-blue-light 
           ${error ? "ring-red ring-2" : "ring-1 ring-blue"}`}
          {...props}
        />

        <svg
          className={`absolute right-[13px] top-[11px] ${
            error ? "block" : "hidden"
          }`}
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
        className={`font-bold text-base text-red pt-[3px]
        ${error ? "visible" : "hidden"}`}
      >
        {helperText}
      </p>
    </div>
  </div>
);

export default Input;
