import { ReactNode } from "react";
interface NotificationProps {
  children: ReactNode;
}
const Notification = ({ children }: NotificationProps) => {
  return (
    <div className="flex justify-center rounded-lg bg-turquoise/[0.1] py-8 px-7 text-center text-blue">
      {children}
    </div>
  );
};

export default Notification;
