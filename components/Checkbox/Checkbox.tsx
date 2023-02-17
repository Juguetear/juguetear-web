interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

export const Checkbox = ({ label, id, ...props }: CheckboxProps) => {
  const inputStyle =
    "peer appearance-none w-4 min-w-[1.25rem] h-5 mt-[1.5px] border rounded-[2px] border-blue cursor-pointer checked:border-orange checked:bg-orange hover:enabled:border-2 focus:outline-none disabled:cursor-not-allowed disabled:border-gray-dark disabled:bg-gray-medium";

  const formattedId = id.toLowerCase().split(" ").join("");

  if (!label || label.trim().length === 0) {
    return null;
  }

  return (
    <div className="flex max-w-[13rem] focus-within:shadow-2md p-1 rounded">
      <input
        id={formattedId}
        type="checkbox"
        className={inputStyle}
        {...props}
      />
      <label
        htmlFor={formattedId}
        className="text-blue text-sm font-outfit ml-2 peer-checked:text-orange font-medium peer-hover:font-bold peer-disabled:text-gray-dark peer-disabled:font-medium"
      >
        {label}
      </label>
    </div>
  );
};
