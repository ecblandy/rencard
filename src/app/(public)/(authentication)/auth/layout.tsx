import "@/app/globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pb-[3.75rem]">{children}</main>
      <Footer />
    </>
  );
}
