import type { Metadata } from "next";
import "./globals.css";
import { manrope } from "../../public/fonts";
import { PreviewProvider } from "@/providers/preview-provider";

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
      <body className={`${manrope.variable}  antialiased`}>
        <PreviewProvider>{children}</PreviewProvider>
      </body>
    </html>
  );
}
