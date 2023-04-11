import { ReactNode } from "react";
interface NotificationProps {
  children: ReactNode;
}
const Notification = ({ children }: NotificationProps) => {
  return (
    <div className="rounded-lg bg-turquoise/[0.1] px-7 py-8 text-center text-blue">
      {children}
    </div>
  );
};

export default Notification;
