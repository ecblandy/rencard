// Icons
import { LucideIcon } from "lucide-react";

interface MetricOptions {
  value: number | string;
  label: string;
  icon: LucideIcon | React.ComponentType<{ size?: number }>;
}

interface MetricCardProps {
  options: MetricOptions[];
}

export default function MetricCard({ options }: MetricCardProps) {
  return (
    <div className="flex flex-wrap items-center  gap-[2.125rem] mt-[2.5625rem]">
      {options.map(({ icon: Icon, label, value }, index) => (
        <div
          key={index}
          className="px-[1.5rem] py-[1rem] rounded-[.625rem] border border-[#939393] bg-white max-w-[20.625rem] w-full "
        >
          <Icon size={25} />
          <strong className="font-urbanist font-bold text-[2.5rem]">
            {value}
          </strong>
          <p className="font-manrope text-neutral-strong">{label}</p>
        </div>
      ))}
    </div>
  );
}
