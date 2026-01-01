import { signIn } from "next-auth/react";

// Types
import { LoginSchema } from "./login.schema";

export async function loginAction(data: LoginSchema) {
  const result = await signIn("credentials", {
    email: data.email,
    password: data.password,
    redirect: false,
  });

  if (result?.error) throw new Error("Credenciais invalidas");
}
