export const Notification = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="bg-turquoise/[.1] rounded-lg p-4 m-4 flex justify-center">
      {children}
    </div>
  );
};
