import Cross from "../cross/Cross";

type Props = {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Tag = ({ label, onClick }: Props) => {
  return (
    <li className="bg-gray-light max-w-fit text-blue hover:text-orange fill-blue hover:fill-orange rounded-t-[14px] rounded-b-[14px] border-2 border-white focus-within:shadow-2md">
      <Cross
        onClick={onClick}
        className="border-r-[0.5px] h-7 border-gray pl-2 pr-1 focus:outline-none"
        ariaLabel={`Quitar ${label} de la lista`}
      />
      <p className="inline ml-1 mr-6 font-semibold font-outfit text-sm">
        {label}
      </p>
    </li>
  );
};

export default Tag;
