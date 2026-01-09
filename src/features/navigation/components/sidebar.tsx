import Image from "next/image";

// Components
import SidebarNavLinks from "./sidebar-nav-links";

export default function Sidebar() {
  return (
    <aside className="max-w-[14.8125rem] w-full py-[1.4375rem] min-h-screen h-auto bg-[linear-gradient(270deg,#FBFBFB_35%,#F5F5F5_100%)]">
      {/* LOGO */}
      <Image
        src="/images/rencard-logo.svg"
        alt="Rencard logo"
        width={145}
        height={36}
        className="mx-auto"
      />

      {/* NavLinks */}
      <SidebarNavLinks />
    </aside>
  );
}
