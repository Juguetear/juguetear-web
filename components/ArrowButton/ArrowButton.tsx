"use client";
import { MouseEventHandler } from "react";

interface ArrowButtonProps {
  disabled?: boolean;
  direction?: "left" | "right";
  handleClick: MouseEventHandler;
}

export const ArrowButton = ({
  disabled = false,
  direction = "right",
  handleClick,
}: ArrowButtonProps) => {
  return (
    <button
      className="font-inter font-extrabold text-xl h-24 w-24 border rounded-full border-orange flex 
      justify-center items-center hover:"
      disabled={disabled}
      onClick={handleClick}
    >
      {direction === "right" && (
        <svg
          width="5"
          height="8"
          viewBox="0 0 5 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.37483 4.09818C4.57009 3.90292 4.57009 3.58634 4.37483 3.39108L1.19285 0.209095C0.997588 0.0138325 0.681005 0.0138324 0.485743 0.209095C0.290481 0.404357 0.290481 0.720939 0.485743 0.916201L3.31417 3.74463L0.485742 6.57306C0.29048 6.76832 0.29048 7.0849 0.485742 7.28016C0.681004 7.47542 0.997587 7.47542 1.19285 7.28016L4.37483 4.09818ZM3 4.24463L4.02128 4.24463L4.02128 3.24463L3 3.24463L3 4.24463Z"
            fill="#D2451A"
          />
        </svg>
      )}
    </button>
  );
};
