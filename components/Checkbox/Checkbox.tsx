import { useEffect, useState } from "react";

export type CheckboxProps = {
  checked?: boolean;
  disabled?: boolean;
  label: string;
};

export const Checkbox = ({ checked, label, disabled }: CheckboxProps) => {
  const [isChecked, setChecked] = useState(checked);
  const inputStyle =
    "peer appearance-none w-5 min-w-[1.25rem] h-5 border rounded-[2px] mt-1 border-blue cursor-pointer checked:border-orange checked:bg-orange hover:enabled:border-2 focus:outline-none disabled:cursor-not-allowed disabled:border-gray-dark disabled:bg-gray-medium";

  const formatLabel = (label: string) => {
    return label.toLowerCase().split(" ").join("");
  };

  useEffect(() => {
    setChecked(checked);
  }, [checked]);

  if (!label || label.trim().length === 0) {
    return null;
  }

  return (
    <div className="flex max-w-[13rem] focus-within:shadow-2md p-1 rounded">
      <input
        id={formatLabel(label)}
        type="checkbox"
        checked={isChecked}
        aria-checked={isChecked}
        className={inputStyle}
        onChange={() => setChecked(!isChecked)}
        disabled={disabled}
      />
      <label
        htmlFor={formatLabel(label)}
        className="text-blue text-base font-outfit ml-2 peer-checked:text-orange font-medium peer-hover:font-bold peer-disabled:text-gray-dark peer-disabled:hover:font-medium"
      >
        {label}
      </label>
    </div>
  );
};
