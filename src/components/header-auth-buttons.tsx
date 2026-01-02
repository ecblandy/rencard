"use client";
import { usePathname } from "next/navigation";
// Components
import Button from "./ui/button";
import clsx from "clsx";

export default function HeaderAuthButtons() {
  const pathname = usePathname();

  const isSignin = pathname.includes("/auth/signin");
  const isSignup = pathname.includes("/auth/signup");
  return (
    <div className="flex max-sm:hidden items-center gap-2.5">
      <Button
        sizeH="sm"
        variant="custom"
        href="/auth/signin"
        className={clsx(
          "w-[4.9375rem] hover:bg-black hover:text-white",
          isSignin ? "hidden" : ""
        )}
      >
        Entrar
      </Button>
      <Button
        sizeH="sm"
        variant="default"
        href="/auth/signup"
        className={clsx("w-25.25 ", isSignup ? "hidden" : "")}
      >
        Cadastrar
      </Button>
    </div>
  );
}
