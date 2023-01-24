import XMark from "../XMark/XMark";

export type TagProps = {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Tag = ({ label, onClick }: TagProps) => {
  if (!label || label.trim().length === 0) {
    throw new Error("Label cannot be an empty string");
  }

  const liStyle =
    "flex w-fit max-w-[9.5rem] bg-gray-light text-blue fill-blue rounded-[14px] border-2 border-transparent focus-within:border-white focus-within:shadow-2md";
  const buttonStyle =
    "relative peer after:absolute after:content-[''] after:top-[-50%] after:left-[-50%] after:h-[200%] after:w-[200%] px-2 focus:outline-none hover:text-orange hover:fill-orange";
  return (
    <li className={liStyle}>
      <button
        type="button"
        onClick={onClick}
        aria-label={`Quitar ${label} de la lista`}
        className={buttonStyle}
      >
        <XMark />
      </button>
      <span className="peer-hover:text-orange border-l border-gray pl-2 mr-4 font-outfit whitespace-normal break-all">
        {label}
      </span>
    </li>
  );
};
