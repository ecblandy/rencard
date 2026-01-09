// Components
import MetricCard from "@/shared/ui/metric-card";
import PageHeader from "@/shared/ui/page-header";

// Icons
import { PiCursorClick } from "react-icons/pi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import Coupon from "./components/coupon";

export default function DashboardSection() {
  return (
    <section>
      <PageHeader
        title="Visão Geral"
        description="Acompanhe seu desempenho e compartilhe seu link para começar a ganhar."
      />

      <MetricCard
        options={[
          { label: "Acessos ao link", icon: PiCursorClick, value: "123" },
          {
            label: "Vendas confirmadas",
            icon: MdOutlineShoppingBag,
            value: "123",
          },
          {
            label: "Comissão disponível",
            icon: CiCreditCard1,
            value: "123",
          },
        ]}
      />

      <Coupon />
    </section>
  );
}
