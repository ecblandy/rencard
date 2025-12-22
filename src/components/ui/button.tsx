import { ButtonHTMLAttributes } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  sizeH: "sm";
  variant: "default" | "outline" | "custom";
}
export default function Button({
  children,
  sizeH,
  variant,
  ...props
}: ButtonProps) {
  const sizeMap = { sm: "h-[2.5rem]" };
  const baseButtonClass = `font-manrope font-medium rounded-[.625rem] transition-all duration-300 ease-in-out flex items-center justify-center`;

  const variantMap = {
    default: "bg-black text-white cursor-pointer",
    outline: "border-2 border-black text-black cursor-pointer",
    custom: "cursor-pointer",
  };
  return (
    <button
      {...props}
      className={`${baseButtonClass} ${sizeMap[sizeH]} ${variantMap[variant]} ${props.className}`}
    >
      {children}
    </button>
  );
}
