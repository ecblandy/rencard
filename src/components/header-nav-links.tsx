"use client";
import { usePathname } from "next/navigation";
const navLinks = [
  {
    label: "Produtos",
    href: "#products",
  },

  {
    label: "Planos",
    href: "#plans",
  },

  {
    label: "Recursos",
    href: "#resources",
  },
];

export default function HeaderNavLinks() {
  const pathname = usePathname();
  return (
    <nav aria-label="Navegação Principal">
      <ul className="flex max-sm:hidden gap-24.75 font-manrope text-black">
        {navLinks.map((link) => {
          const isActiveLink = pathname === link.href;
          const activeClass = isActiveLink ? "border-b-red-600" : "";
          return (
            <li
              key={link.href}
              className={`border-b-2 border-transparent hover:border-b-red-600 transition-all duration-200 ease-in-out ${activeClass}`}
            >
              <a href={link.href} className="font-medium">
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
