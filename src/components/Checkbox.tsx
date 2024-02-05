import { ChangeEvent } from "react";

export type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function Checkbox({ checked, onChange, label }: CheckboxProps) {
  return (
    <>
      {" "}
      <input
        type="checkbox"
        id="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer relative mr-6 h-5 w-5 shrink-0 appearance-none rounded-sm bg-purple-200  checked:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
      />
      <label htmlFor="checkbox" className="font-semibold">
        {label}
      </label>
      <svg
        className="pointer-events-none absolute mt-1 hidden h-5 w-5 peer-checked:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </>
  );
}
