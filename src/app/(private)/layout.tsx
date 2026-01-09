import "@/app/globals.css";
import Sidebar from "@/features/navigation/components/sidebar";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-[linear-gradient(270deg,#FBFBFB_35%,#F5F5F5_100%)]">
      <Sidebar />
      <main className="p-[3.75rem] max-w-[1200px] w-full">{children}</main>
    </div>
  );
}
