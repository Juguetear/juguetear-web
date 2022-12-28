import { Icon } from "../Icon/Icon";

interface StateProps {
  available: boolean;
}

export const State = ({ available }: StateProps) => {
  return (
    <>
      <p
        className={`text-sm font-bold flex align-center ${
          available ? "text-green" : "text-red"
        }`}
      >
        {available ? "Disponible" : "Prestado"} <Icon available={available} />
      </p>
    </>
  );
};
