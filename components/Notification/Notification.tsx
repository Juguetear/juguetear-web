interface NotificationProps {
  children: JSX.Element;
}
const Notification = ({ children }: NotificationProps) => {
  return (
    <div className="flex justify-between bg-turquoise/[0.1] rounded-lg py-8 px-7">
      {children}
    </div>
  );
};

export default Notification;
