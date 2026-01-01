// Components
import PageHeader from "../../components/page-header";
import PeriodFilter from "../../components/period-filter";
import MetricCard from "./components/metric-card";
import { PlatformGrowthChart } from "./components/platform-growth-chart";
import CouponsAndCreators from "./components/coupons-and-creators";

// Icons
import { MdAttachMoney } from "react-icons/md";
import { Crown, UserPlus } from "lucide-react";
import { CiCreditCard1 } from "react-icons/ci";

export default function DashboardSection() {
  return (
    <section>
      <PageHeader
        title="Visão Geral"
        description="Acompanhe os principais indicadores do Rencard"
      />

      <PeriodFilter />

      <MetricCard
        options={[
          {
            label: "Receita do mês",
            icon: MdAttachMoney,
            description: "Somatório de assinaturas dos dois planos",
            value: "0000",
          },
          {
            label: "Assinaturas Pro Ativas",
            icon: Crown,
            description: "Total de contas Pro no momento",
            value: "0000",
          },
          {
            label: "Vendas do cartão físico",
            icon: CiCreditCard1,
            description: "Total de unidades vendidas no mês atual",
            value: "0000",
          },
          {
            label: "Novos usuários",
            icon: UserPlus,
            description: "Inscritos nos últimos 30 dias",
            value: "0000",
          },
        ]}
      />

      <PlatformGrowthChart />
      <CouponsAndCreators />
    </section>
  );
}
