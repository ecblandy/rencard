// Components
import LoginForm from "@/features/auth/signin/signin.page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entrar - Rencard",
  description:
    "Acesse sua conta Rencard para gerenciar links, produtos e serviços.",
  keywords: ["Rencard", "Login", "Entrar", "Conta"],
  authors: [{ name: "Rencard", url: "https://rencard.com.br" }],
  openGraph: {
    title: "Entrar - Rencard",
    description:
      "Faça login na sua conta Rencard e gerencie seus links e serviços.",
    url: "https://rencard.com.br/signin",
    siteName: "Rencard",
    images: [
      {
        url: "https://rencard.com.br/images/og-login.png",
        width: 1200,
        height: 630,
        alt: "Rencard Login",
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Entrar - Rencard",
    description:
      "Faça login na sua conta Rencard e gerencie seus links e serviços.",
    images: ["https://rencard.com.br/images/og-login.png"],
  },
};

export default function SigninPage() {
  return <LoginForm />;
}
