import { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: string;
}

export default function Label({ children, ...props }: LabelProps) {
  return (
    <label {...props} className="font-urbanist font-semibold text-[1.25rem]">
      {children}
    </label>
  );
}
