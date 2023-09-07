export const VerticalDivider = () => (
  <div className="h-full w-px justify-self-center bg-gray"></div>
);

export const HorizontalDivider = () => (
  <div className="h-px w-full justify-self-center bg-gray"></div>
);

interface IDivider {
  type?: "vertical" | "horizontal";
}

export const Divider: React.FC<IDivider> = ({ type = "horizontal" }) => {
  if (type === "vertical") {
    return <VerticalDivider />;
  }

  return <HorizontalDivider />;
};
