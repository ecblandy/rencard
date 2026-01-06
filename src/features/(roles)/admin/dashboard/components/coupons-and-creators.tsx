// Components
import Button from "@/components/ui/button";
import HeaderCard from "@/shared/ui/header-form";
import Surface from "@/shared/ui/surface";
import MetricCard from "./metric-card";

// Icons
import { Plus, UserRound } from "lucide-react";
import { RiCoupon2Line } from "react-icons/ri";
import { FaChartLine } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";

export default function CouponsAndCreators() {
  return (
    <Surface className="mt-[2.5625rem]">
      {/* Header */}
      <div className="flex  justify-between">
        <HeaderCard
          title="Cupons && Influenciadores"
          description="Gerencie cupons promocionais e parcerias"
        />

        <Button
          variant="default"
          sizeH="sm"
          className="flex items-center justify-center gap-[.5rem] w-[10rem]"
        >
          <Plus size={20} />
          Criar cupom
        </Button>
      </div>

      {/* Metrics */}
      <MetricCard
        options={[
          {
            label: "Cupons ativos",
            icon: RiCoupon2Line,
            value: "0000",
          },
          {
            label: "Influenciadores",
            icon: UserRound,
            value: "0000",
          },
          {
            label: "Usos totais",
            icon: FaChartLine,
            value: "0000",
          },
          {
            label: "Receita gerada",
            icon: MdAttachMoney,
            value: "0000",
          },
        ]}
      />
    </Surface>
  );
}
