"use client";
import { signIn, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { LoginSchema } from "./signin-schema";
import { useRouter } from "next/navigation";
import { useToast } from "@/providers/toast-provider";

export function useSignin() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { data: session, status } = useSession();
  const { push } = useRouter();
  const { showToast } = useToast();

  async function onSubmit(data: LoginSchema) {
    setError(null);
    setLoading(true);

    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (result?.error) {
      showToast({
        title: "Erro ao realizar login",
        message:
          result.error ||
          "Não foi possível autenticar. Verifique suas credenciais e tente novamente.",
        type: "error",
      });
      return;
    }

    setLoading(false);

    showToast({
      title: "Login realizado!",
      message: "Seja bem-vindo(a)!",
      type: "success",
    });
  }

  useEffect(() => {
    if (status === "authenticated") {
      switch (session?.user.role) {
        case "admin":
          push("/admin/dashboard");
          break;
        case "creator":
          push("/creator/dashboard");
          break;
        case "client":
          push("/user/dashboard");
          break;
        default:
          break;
      }
    }
  }, [status, session, push]);

  return { onSubmit, error, loading };
}
