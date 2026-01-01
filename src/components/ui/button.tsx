import { ButtonHTMLAttributes } from "react";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  sizeH: "sm" | "xl" | "md";
  variant: "default" | "outline" | "custom" | "destructive";
  href?: string;
}

export default function Button({
  children,
  sizeH,
  variant,
  href,
  ...props
}: ButtonProps) {
  const sizeMap = { sm: "h-[2.5rem]", md: "h-[3.125rem]", xl: "h-[3.75rem]" };
  const baseButtonClass = `font-manrope font-medium rounded-[.625rem] px-[1rem] py-[.5rem] transition-all duration-300 ease-in-out `;

  const variantMap = {
    default: "bg-black text-white hover:bg-neutral-strong cursor-pointer",
    outline: "border-2 border-black text-black hover:bg-black hover:text-white",
    custom: "cursor-pointer",
    destructive: `
    text-neutral-900
    hover:bg-red-100
    hover:text-red-700
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-red-600
    focus-visible:ring-offset-2
    cursor-pointer
  `,
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
