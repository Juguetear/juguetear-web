import Cross from "components/cross/Cross";
type Props = {
    label: string,
    onClick: (event: React.MouseEvent<HTMLLIElement>) => void,
}


const Tag = ({ label, onClick }: Props) => {
  return (
    <li onClick={onClick} className="bg-gray-light text-blue hover:text-orange fill-blue hover:fill-orange rounded-t-[14px] rounded-b-[14px] border-2 border-white focus-within:shadow-2md">
        <button type="button" aria-label={`Quitar ${label} de la lista`} className="border-r-[0.5px] h-7 border-gray pl-2 pr-1 focus:outline-none"><Cross /></button>
        <p className="inline ml-1 mr-6 font-semibold text-sm">{label}</p>
    </li>
  )
}

export default Tag;