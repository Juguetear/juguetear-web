export type CheckboxProps = {
  checked?: boolean;
  disabled?: boolean;
  label: string;
};

export const Checkbox = ({
  checked = false,
  label,
  disabled,
}: CheckboxProps) => {
  const inputStyle =
    "peer appearance-none w-4 min-w-[1.25rem] h-5 mt-[1.5px] border rounded-[2px] border-blue cursor-pointer checked:border-orange checked:bg-orange hover:enabled:border-2 focus:outline-none disabled:cursor-not-allowed disabled:border-gray-dark disabled:bg-gray-medium";

  const formatLabel = (label: string) => {
    return label.toLowerCase().split(" ").join("");
  };

  if (!label || label.trim().length === 0) {
    return null;
  }

  return (
    <div className="flex max-w-[13rem] focus-within:shadow-2md p-1 rounded">
      <input
        id={formatLabel(label)}
        type="checkbox"
        checked={checked}
        aria-checked={checked}
        className={inputStyle}
        disabled={disabled}
      />
      <label
        htmlFor={formatLabel(label)}
        className="text-blue text-sm font-outfit ml-2 peer-checked:text-orange font-medium peer-hover:font-bold peer-disabled:text-gray-dark peer-disabled:font-medium"
      >
        {label}
      </label>
    </div>
  );
};
