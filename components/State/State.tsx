import { IconCheckmark } from "../IconCheckmark/IconCheckmark";
import { IconError } from "../IconError/IconError";

interface StateProps {
  available: boolean;
}

export const State = ({ available }: StateProps) => {
  return (
    <div className="flex items-center gap-2">
      <p
        className={`font-extrabold font-inter text-base ${
          available ? "text-green" : "text-red"
        }`}
      >
        {available ? "Disponible" : "Prestado"}
      </p>

      {available ? (
        <IconCheckmark className="fill-green" />
      ) : (
        <IconError className="fill-red" />
      )}
    </div>
  );
};
