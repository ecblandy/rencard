'use client'
import Image from "next/image";
import HeaderNavLinks from "./header-nav-links";
import HeaderAuthButtons from "./header-auth-buttons";
import { usePathname } from "next/navigation";

export default function Header() {
  const AUTH_ROUTES = ['/auth/login', "/auth/register"]
  const params = usePathname()
  console.log(params)
  return (
    <header className="flex items-center justify-between p-5 min-h-[5.125rem] w-full bg-[#FBFBFB66] border-b border-neutral-extra-soft">
      <Image
        src="/images/rencard-logo.svg"
        alt="Rencard Logo"
        width={145}
        height={36}
      />
      <HeaderNavLinks />
      <HeaderAuthButtons />
    </header>
  );
}
