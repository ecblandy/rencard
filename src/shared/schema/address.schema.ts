import { z } from "zod";

export const addressSchema = z.object({
  street: z.string(),
  number: z.string(),
  neighborhood: z.string(),
  cep: z.string(),
  complement: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
});

export type AddressSchema = z.infer<typeof addressSchema>;
