import PageHeader from "@/features/(roles)/components/page-header";
import PeriodFilter from "@/components/dashboard/period-filter";
import MetricCard from "@/features/(roles)/components/metric-card";
import { ProfileViewsChart } from "@/components/user/profile-views-chart";
import { TopLinksChart } from "@/components/user/top-links-chart";
import { Eye, Share2 } from "lucide-react";
import { PiCursorClick } from "react-icons/pi";

export default function DashboardPage() {
  return (
    <section>
      <PageHeader
        title="Bem-vindo ao seu painel"
        description="Gerencie seu cartão digital, acompanhe métricas e configure cada detalhe do seu perfil."
      />
      <PeriodFilter />
      <MetricCard
        options={[
          { label: "Visualizações", icon: Eye, value: "1.247" },
          { label: "Clique nos links", icon: PiCursorClick, value: "1.247" },
          { label: "Compartilhamentos", icon: Share2, value: "1.247" },
        ]}
      />

      <div className="mt-[2.5625rem]">
        <h2 className="font-urbanist font-semibold text-[1.5rem] mb-[2.0625rem]">
          Métricas detalhadas
        </h2>
        <div className="flex items-center gap-[.875rem]">
          <ProfileViewsChart />
          <TopLinksChart />
        </div>
      </div>
    </section>
  );
}
