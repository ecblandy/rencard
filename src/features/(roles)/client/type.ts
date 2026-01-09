export interface User {
  id: number;
  role: string;
  full_name: string;
  email: string;
  phone_number: string;
  cpf_cnpj: string;
  street: string;
  number: string;
  neighborhood: string;
  cep: string;
  complement: string;
  city: string;
  state: string;
  country: string;
  terms_accepted: boolean;
  is_active: boolean;
}
