"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Icons
import {
  User,
  LucideIcon,
  LayoutDashboard,
  Crown,
  QrCode,
  Settings,
  LogOut,
} from "lucide-react";
import Button from "./ui/button";

// Types
type NavLinks = {
  label: string;
  icon: LucideIcon;
  href: string;
};

const USER_LINKS: NavLinks[] = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/user/dashboard",
  },

  {
    label: "Meu Perfil",
    icon: User,
    href: "/user/profile",
  },

  {
    label: "Assinatura",
    icon: Crown,
    href: "/user/billing",
  },

  {
    label: "Códigos & Apps",
    icon: QrCode,
    href: "/user/apps",
  },

  {
    label: "Minha conta",
    icon: Settings,
    href: "/user/account",
  },
];

export default function DashboardNavLinks() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Navegação principal"
      className=" mt-[1.4375rem] px-[.625rem] "
    >
      <ul className="space-y-[1.5rem] border-y border-[#C2C2C2] py-[1.875rem]">
        {USER_LINKS.map(({ icon: Icon, label, href }, index) => {
          const isActiveLink = pathname === href;
          const activeLinkStyle = isActiveLink ? "bg-black text-white" : "";
          return (
            <li
              key={index}
              className={`flex items-center gap-[.5rem] h-[3.125rem] w-full ${activeLinkStyle} px-[1.25rem] rounded-lg`}
            >
              <Icon />
              <Link href={href} className="font-manrope font-medium">
                {label}
              </Link>
            </li>
          );
        })}
      </ul>

      <Button
        variant="destructive"
        sizeH="sm"
        className="flex items-center gap-[.5rem] w-full mt-[1.875rem]"
      >
        <LogOut size={18} />
        Sair
      </Button>
    </nav>
  );
}
