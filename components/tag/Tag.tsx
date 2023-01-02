import XMark from "../xmark/XMark";

type Props = {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Tag = ({ label, onClick }: Props) => {
  return (
    <li className="bg-gray-light max-w-fit text-blue hover:text-orange fill-blue hover:fill-orange rounded-t-[14px] rounded-b-[14px] border-2 border-white focus-within:shadow-2md">
      <button
        type="button"
        onClick={onClick}
        aria-label={`Quitar ${label} de la lista`}
        className="border-r-[0.5px] h-7 border-gray pl-2 pr-1 focus:outline-none"
      >
        <XMark className="" />
      </button>
      <span className="ml-1 mr-6 font-outfit text-sm">{label}</span>
    </li>
  );
};

export default Tag;
