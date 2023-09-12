import { ReactNode } from "react";
interface NotificationProps {
  children: ReactNode;
  className?: string;
}
const HighlightedWrapper = ({
  children,
  className = "",
}: NotificationProps) => {
  return (
    <div
      className={`rounded-lg bg-turquoise/[0.1] px-7 py-8 text-blue ${className}`}
    >
      {children}
    </div>
  );
};

export default HighlightedWrapper;
