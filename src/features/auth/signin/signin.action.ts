import { signIn } from "next-auth/react";

// Types
import { LoginSchema } from "./signin-schema";

export async function signinAction(data: LoginSchema) {
  const result = await signIn("credentials", {
    email: data.email,
    password: data.password,
    redirect: false,
  });

  if (result?.error) throw new Error("Credenciais invalidas");
}
