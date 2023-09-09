interface BaseDividerProps {
  className?: string;
}

export const VerticalDivider: React.FC<BaseDividerProps> = ({
  className = "",
}) => (
  <div className={`h-full w-px justify-self-center bg-gray ${className}`}></div>
);

export const HorizontalDivider: React.FC<BaseDividerProps> = ({
  className = "",
}) => (
  <div className={`h-px w-full justify-self-center bg-gray ${className}`}></div>
);

interface IDivider extends BaseDividerProps {
  type?: "vertical" | "horizontal";
}

export const Divider: React.FC<IDivider> = ({
  type = "horizontal",
  className,
}) => {
  if (type === "vertical") {
    return <VerticalDivider className={className} />;
  }

  return <HorizontalDivider className={className} />;
};
