import { useState } from "react";

export type CheckboxProps = {
  checked: boolean;
  disabled?: boolean;
  label: string;
};

const Checkbox = ({ checked, label }: CheckboxProps) => {
  const [isChecked, setChecked] = useState(checked);

  const handleCheck = () => {
    setChecked(!isChecked);
  };

  return (
    <div className="flex items-center max-w-[13rem]">
      <div
        role="checkbox"
        aria-checked={isChecked}
        aria-labelledby={`${label}-label`}
        className="w-5 h-5 border-[2px] rounded-[2px] border-blue place-items-center cursor-pointer"
        onClick={handleCheck}
        tabIndex={0}
      ></div>
      <label
        id={`${label}-label`}
        className="text-blue text-base font-outfit ml-2"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
