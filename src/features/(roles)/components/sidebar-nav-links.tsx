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
import { MdOutlineShoppingBag } from "react-icons/md";
import { RiCoupon2Line } from "react-icons/ri";
import { FaPix } from "react-icons/fa6";

// Components
import Button from "../../../components/ui/button";
import { useLogout } from "@/features/auth/logout/use-logout";

// Types

type NavLinks = {
  label: string;
  icon: LucideIcon | React.ComponentType<{ size?: number }>;
  href: string;
};

type UserRole = "user" | "creator" | "admin";

const NAV_LINKS_BY_ROLE: Record<UserRole, NavLinks[]> = {
  user: [
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
  ],

  creator: [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/creator/dashboard",
    },
    {
      label: "Minhas compras",
      icon: MdOutlineShoppingBag,
      href: "/creator/sales",
    },
    {
      label: "Meus cupons",
      icon: RiCoupon2Line,
      href: "/creator/coupons",
    },
    {
      label: "Pix",
      icon: FaPix,
      href: "/creator/pix",
    },
  ],

  admin: [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/admin/dashboard",
    },
    {
      label: "Usuários",
      icon: User,
      href: "/admin/users",
    },
    {
      label: "Configurações",
      icon: Settings,
      href: "/admin/settings",
    },
  ],
};

export default function SidebarNavLinks() {
  const pathname = usePathname();
  const links = NAV_LINKS_BY_ROLE["admin"];

  const { logout } = useLogout();
  return (
    <nav
      aria-label="Navegação principal"
      className=" mt-[1.4375rem] px-[.625rem] "
    >
      <ul className="space-y-[1.5rem] border-y border-[#C2C2C2] py-[1.875rem]">
        {links.map(({ icon: Icon, label, href }, index) => {
          const isActiveLink = pathname === href;
          const activeLinkStyle = isActiveLink ? "bg-black text-white" : "";
          return (
            <li
              key={index}
              className={`flex items-center gap-[.5rem] h-[3.125rem] w-full ${activeLinkStyle} px-[1.25rem] rounded-lg`}
            >
              <Icon size={25} />
              <Link href={href} className="font-manrope font-medium">
                {label}
              </Link>
            </li>
          );
        })}
      </ul>

      <Button
        onClick={() => logout()}
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
