import Image from "next/image";
import HeaderNavLinks from "./header-nav-links";
import HeaderAuthButtons from "./header-auth-buttons";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-5 min-h-[5.125rem] w-full bg-[#C2C2C2]">
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
