interface IconChevronProps {
  open: boolean;
  className: string;
}

export const IconChevron = ({ open, className }: IconChevronProps) => {
  return (
    <svg
      data-testid={`${open}-${className}`}
      width="16"
      height="9"
      viewBox="0 0 16 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} motion-safe:transition-transform motion-reduce:transition-none ${
        open ? "rotate-180" : ""
      }`}
    >
      <path d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 6V8H9V6H7Z" />
    </svg>
  );
};
