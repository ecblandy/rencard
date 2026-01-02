import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .email("Formato de email inválido. email@exemplo.com")
    .transform((v) => v.toLowerCase().trim()),

  password: z.string().min(6, "A senha precisa conter 6 caracteres."),
});

export type LoginSchema = z.infer<typeof loginSchema>;
