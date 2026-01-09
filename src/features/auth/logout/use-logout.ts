"use client";

import { useToast } from "@/providers/toast-provider";
import { logoutAction } from "./logout.action";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export function useLogout() {
  const { showToast } = useToast();
  const router = useRouter();

  async function logout() {
    // Limpa sessão e cookies primeiro
    await logoutAction(); // limpa cookies
    await signOut({ redirect: false }); // signOut sem redirecionar automático

    // Mostra o toast
    showToast({
      type: "success",
      title: "Até logo!",
      message: "Você saiu da sua conta com sucesso.",
    });

    // Depois de 1.5s, redireciona para a página de login com search param

    router.replace(`/auth/signin`);
  }

  return { logout };
}
