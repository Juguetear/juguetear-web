import { useState } from "react";

export type CheckboxProps = {
  checked: boolean;
  disabled?: boolean;
  label: string;
};

const Checkbox = ({ checked, label, disabled }: CheckboxProps) => {
  const [isChecked, setChecked] = useState(checked);

  const handleCheck = () => {
    setChecked(!isChecked);
  };

  return (
    <div className="flex items-center max-w-[13rem]">
      <input
        id={label.toLowerCase()}
        type="checkbox"
        checked={isChecked}
        aria-checked={isChecked}
        className="peer appearance-none w-5 h-5 border-[1px] rounded-[2px] border-blue place-items-center cursor-pointer checked:border-orange checked:bg-orange hover:border-[2px]"
        onChange={handleCheck}
        disabled={disabled}
      />
      <label
        htmlFor={label.toLowerCase()}
        className="text-blue text-base font-outfit ml-2 peer-checked:text-orange peer-hover:font-semibold"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
