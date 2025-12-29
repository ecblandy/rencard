import Image from "next/image";
import DashboardNavLinks from "./dashboard-nav-links";

export default function Sidebar() {
  return (
    <aside className="max-w-[14.8125rem] w-full py-[1.4375rem] min-h-screen h-auto bg-gray-100">
      {/* LOGO */}
      <Image
        src="/images/rencard-logo.svg"
        alt="Rencard logo"
        width={145}
        height={36}
        className="mx-auto"
      />

      {/* NavLinks */}
      <DashboardNavLinks />
    </aside>
  );
}
