interface NotificationProps {
  children: JSX.Element;
  hasIcon?: boolean;
}
export const Notification = ({
  children,
  hasIcon = false,
}: NotificationProps) => {
  return (
    <div
      className={`flex justify-between bg-turquoise/[0.1] rounded-lg py-8 px-[83px] ${
        hasIcon ? " pl-[7px]" : " pl-[83px]"
      }`}
    >
      {children}
    </div>
  );
};
