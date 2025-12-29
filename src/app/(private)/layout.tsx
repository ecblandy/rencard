import "@/app/globals.css";
import Sidebar from "@/components/sidebar";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="p-[3.75rem] max-w-[1200px] w-full">{children}</main>
    </div>
  );
}
