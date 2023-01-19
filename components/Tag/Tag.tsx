import XMark from "../xmark/XMark";

type TagProps = {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Tag = ({ label, onClick }: TagProps) => {
  return (
    <li className="flex w-fit max-w-[8.5rem] bg-gray-light text-blue hover:text-orange fill-blue hover:fill-orange rounded-[14px] border-2 border-transparent focus-within:border-white focus-within:shadow-2md">
      <button
        type="button"
        onClick={onClick}
        aria-label={`Quitar ${label} de la lista`}
        className="px-2 focus:outline-none"
      >
        <XMark />
      </button>
      <span className="border-l-[0.5px] border-gray pl-2 mr-4 font-outfit whitespace-normal">
        {label}
      </span>
    </li>
  );
};

export default Tag;
