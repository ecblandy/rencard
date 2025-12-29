import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  disable?: boolean;
  variant: "disabled" | "default";
}

const baseInput =
  "h-[2.375rem] rounded-[.625rem] border border-neutral-soft mt-[.5rem] pl-[1rem]";

const inputStyles = {
  disabled: "placeholder:text-neutral-strong bg-neutral-soft",
  default: "placeholder:text-neutral-medium bg-white",
};

export default function Input({ disable, variant, ...props }: InputProps) {
  return (
    <input
      {...props}
      disabled={disable}
      className={`${props.className} ${baseInput} ${inputStyles[variant]}`}
    />
  );
}
