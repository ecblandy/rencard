import { ButtonHTMLAttributes } from "react";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  sizeH: "sm" | "xl";
  variant: "default" | "outline" | "custom";
  href?: string; // nova prop para Link
}

export default function Button({
  children,
  sizeH,
  variant,
  href,
  ...props
}: ButtonProps) {
  const sizeMap = { sm: "h-[2.5rem]", xl: "h-[3.75rem]" };
  const baseButtonClass = `font-manrope font-medium rounded-[.625rem] px-[1rem] py-[.5rem] transition-all duration-300 ease-in-out `;

  const variantMap = {
    default: "bg-black text-white cursor-pointer",
    outline: "border-2 border-black text-black cursor-pointer",
    custom: "cursor-pointer",
  };

  // if href is provided, render Link
  if (href) {
    return (
      <Link
        href={href}
        className={`${baseButtonClass} ${sizeMap[sizeH]} ${variantMap[variant]} ${props.className}`}
      >
        {children}
      </Link>
    );
  }

  // if no href, render button
  return (
    <button
      {...props}
      className={`${baseButtonClass} ${sizeMap[sizeH]} ${variantMap[variant]} ${props.className}`}
    >
      {children}
    </button>
  );
}
