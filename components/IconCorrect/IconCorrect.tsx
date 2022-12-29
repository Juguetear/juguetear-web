interface IconCorrectProps {
    className: string
}

export const IconCorrect = ({className}: IconCorrectProps) => {
  return (
    <svg
      aria-hidden="true"
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C10.0899 13 13 10.0899 13 6.5C13 2.91015 10.0899 0 6.5 0ZM5.57144 9.34202L2.75757 6.52813L3.74245 5.54326L5.57141 7.37227L9.02543 3.91828L10.0103 4.90316L5.57144 9.34202Z"
      />
    </svg>
  );
};
