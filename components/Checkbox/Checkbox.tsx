export type CheckboxProps = {
  checked: boolean;
  disabled: boolean;
  label: string;
};

const Checkbox = ({ checked, disabled, label }: CheckboxProps) => {
  return (
    <div className="flex items-center max-w-[13rem]">
      <input
        id={label}
        type="checkbox"
        className="appearance-none w-5 h-5 border-[1.5px] rounded-[2px] border-blue"
        checked={checked}
        aria-checked={checked}
        disabled={disabled}
      />
      <span className="text-blue text-base font-outfit ml-2">{label}</span>
    </div>
  );
};

export default Checkbox;
