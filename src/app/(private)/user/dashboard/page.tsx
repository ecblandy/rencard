import PageHeader from "@/components/dashboard/page-header";
import PeriodFilter from "@/components/dashboard/period-filter";
import MetricCard from "@/components/user/metric-card";
import { ProfileViewsChart } from "@/components/user/profile-views-chart";
import { TopLinksChart } from "@/components/user/top-links-chart";

export default function DashboardPage() {
  return (
    <section>
      <PageHeader
        title="Bem-vindo ao seu painel"
        description="Gerencie seu cartão digital, acompanhe métricas e configure cada detalhe do seu perfil."
      />
      <PeriodFilter />
      <MetricCard />

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
