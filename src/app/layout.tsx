import type { Metadata } from "next";
import "./globals.css";
import { manrope } from "../../public/fonts";

export const metadata: Metadata = {
  title: "Rencard",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR">
      <body className={`${manrope.variable}  antialiased`}>{children}</body>
    </html>
  );
}
