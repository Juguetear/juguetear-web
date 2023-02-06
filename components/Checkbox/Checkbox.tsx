import { useState } from "react";

export type CheckboxProps = {
  checked?: boolean;
  disabled?: boolean;
  label: string;
};

export const Checkbox = ({ checked, label, disabled }: CheckboxProps) => {
  const [isChecked, setChecked] = useState(checked);

  if (!label || label.trim().length === 0) {
    return null;
  }

  const handleCheck = () => {
    setChecked(!isChecked);
  };

  return (
    <div className="flex items-center max-w-[13rem]">
      <input
        id={label.toLowerCase().split(" ").join("")}
        type="checkbox"
        checked={isChecked}
        aria-checked={isChecked}
        className="peer appearance-none w-5 h-5 border rounded-[2px] border-blue cursor-pointer  checked:border-orange checked:bg-orange hover:enabled:border-2 disabled:cursor-not-allowed"
        onChange={handleCheck}
        disabled={disabled}
      />
      <label
        htmlFor={label.toLowerCase().split(" ").join("")}
        className="text-blue text-base font-outfit ml-2 peer-checked:text-orange peer-hover:font-semibold"
      >
        {label}
      </label>
    </div>
  );
};
