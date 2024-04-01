type IconBarsProps = {
  className?: string;
};

const IconBars = ({ className }: IconBarsProps) => {
  return (
    <svg
      width="23"
      height="16"
      viewBox="0 0 23 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-testid={className}
      aria-hidden="true"
    >
      <rect width="23" height="4" rx="1" fill="#D2451A" />
      <rect y="6" width="23" height="4" rx="1" fill="#D2451A" />
      <rect y="12" width="23" height="4" rx="1" fill="#D2451A" />
    </svg>
  );
};

export default IconBars;
