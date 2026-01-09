import { z } from "zod";
import { addressSchema } from "./address.schema";

export const userSchema = z.object({
  id: z.number(),
  role: z.enum(["admin", "creator", "customer"]),
  full_name: z.string(),
  email: z.email(),
  phone_number: z.string(),
  cpf_cnpj: z.string(),
  address: addressSchema,
});

export type UserSchema = z.infer<typeof userSchema>;
