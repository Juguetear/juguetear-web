import XMark from "../XMark/XMark";

export type TagProps = {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Tag = ({ label, onClick }: TagProps) => {
  if (!label || label.trim().length === 0) {
    return null;
  }

  const liStyle =
    "w-fit max-w-[9.5rem] bg-gray-light text-blue fill-blue rounded-[14px] border-2 border-transparent focus-within:border-white focus-within:shadow-md";

  return (
    <li className={liStyle}>
      <button
        type="button"
        onClick={onClick}
        aria-label={`Quitar ${label} de la lista`}
        className="flex items-center hover:fill-orange hover:text-orange focus:outline-none"
      >
        <span className="ml-2 pr-1">
          <XMark />
        </span>
        <span className="ml-1 mr-4 whitespace-normal break-all border-l border-gray pl-2 font-outfit">
          {label}
        </span>
      </button>
    </li>
  );
};
