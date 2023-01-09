import { MouseEventHandler } from "react";

interface ArrowButtonProps {
  disabled?: boolean;
  direction?: "left" | "right";
  handleClick: MouseEventHandler;
}

export const ArrowButton = ({
  disabled = false,
  direction = "left",
  handleClick,
}: ArrowButtonProps) => {
  return (
    <div className="rounded-full p-1 lg:p-2 m-2 w-fit focus-within:shadow-2md shadow-turquoise">
      <button
        aria-label={`Pasar al slide ${
          direction === "right" ? "siguiente" : "anterior"
        }`}
        className="group font-inter font-extrabold text-xl h-6 w-6 rounded-full border-2 border-orange flex 
      justify-center items-center lg:h-12 lg:w-12 hover:border-blue disabled:border-gray focus-within:outline-none"
        disabled={disabled}
        onClick={handleClick}
      >
        <svg
          className={`h-2 w-2 lg:h-4 lg:w-4 fill-none ${
            direction === "left" && "rotate-180"
          }`}
          viewBox="0 0 5 8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-orange group-hover:fill-blue group-disabled:fill-gray"
            d="M4.37483 4.09818C4.57009 3.90292 4.57009 3.58634 4.37483 3.39108L1.19285 0.209095C0.997588 0.0138325 0.681005 0.0138324 0.485743 0.209095C0.290481 0.404357 0.290481 0.720939 0.485743 0.916201L3.31417 3.74463L0.485742 6.57306C0.29048 6.76832 0.29048 7.0849 0.485742 7.28016C0.681004 7.47542 0.997587 7.47542 1.19285 7.28016L4.37483 4.09818ZM3 4.24463L4.02128 4.24463L4.02128 3.24463L3 3.24463L3 4.24463Z"
          />
        </svg>
      </button>
    </div>
  );
};
