import { TextareaHTMLAttributes } from "react";

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
// TODO: El icono de error se ve fuera de lugar en Firefox.
const TextArea = ({
  id,
  error = false,
  label,
  required,
  helperText,
  disabled,
  ...props
}: InputProps) => {
  const spanStyles = `font-medium group-focus-within:font-bold ${
    error ? "text-red font-bold" : ""
  }`;
  const inputStyles = `resize-none w-full rounded-[3px] py-[.08rem] ring-1 mt-[0.44rem] px-2
   focus-visible:ring-3 outline-none ring-inset focus-visible:shadow-2md focus-visible:bg-blue-light focus:ring-orange 
   disabled:ring-gray-dark disabled:bg-gray-light ${
     error ? "ring-2 ring-red font-bold" : "ring-blue"
   } `;
  const svgStyles = `absolute right-5 top-11 ${error ? "block" : "hidden"}`;

  return (
    <div className="group space-y-1 font-inter text-base">
      <label htmlFor={id} className="relative">
        <span className={spanStyles}>
          {required ? "*" : ""}
          {label}
        </span>

        <textarea
          id={id}
          required={required}
          disabled={disabled}
          aria-invalid={error}
          rows={9}
          aria-describedby="error"
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
      </label>

      <p
        id="error"
        className={`font-bold text-red ${error ? "visible" : "invisible"}`}
      >
        {helperText}
      </p>
    </div>
  );
};

export default TextArea;
