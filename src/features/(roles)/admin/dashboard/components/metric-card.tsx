// Components
import { LucideIcon } from "lucide-react";
import Surface from "../../../components/surface";

interface MetricOptions {
  value: number | string;
  label: string;
  description?: string;
  icon: LucideIcon | React.ComponentType<{ size?: number }>;
}

interface MetricCardProps {
  options: MetricOptions[];
}

export default function MetricCard({ options }: MetricCardProps) {
  return (
    <div className="my-[2.5625rem]">
      <div className="flex items-center  gap-[1.3125rem] mt-[2.5625rem]">
        {options.map(({ icon: Icon, label, value, description }, index) => (
          <Surface
            key={index}
            className="max-w-[15.5625rem] w-full min-h-[13.125rem] h-auto"
          >
            <p className="flex items-center justify-center bg-neutral-extra-soft h-12.5 w-12.5 rounded-[.625rem] mb-[.5rem]">
              <Icon size={25} />
            </p>
            <strong className="font-manrope font-semibold text-neutral-strong">
              {label}
            </strong>
            <p className="text-[2.5rem] font-bold font-urbanist">{value}</p>
            <p className="font-manrope text-neutral-strong">{description}</p>
          </Surface>
        ))}
      </div>
    </div>
  );
}
