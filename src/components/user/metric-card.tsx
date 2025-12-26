// Icons
import { Eye } from "lucide-react";
import { PiCursorClick } from "react-icons/pi";

const METRIC_OPTIONS = [
  {
    icon: Eye,
    value: "1.247",
    label: "Visualizações",
  },

  {
    icon: PiCursorClick,
    value: "384",
    label: "Cliques nos links",
  },

  {
    icon: Eye,
    value: "1.247",
    label: "Visualizações",
  },
];

export default function MetricCard() {
  return (
    <div className="flex flex-wrap items-center  gap-[2.125rem] mt-[2.5625rem]">
      {METRIC_OPTIONS.map(({ icon: Icon, label, value }, index) => (
        <div
          key={index}
          className="px-[1.5rem] py-[1rem] rounded-[.625rem] border border-[#939393] max-w-[20.625rem] w-full "
        >
          <Icon size={25} />
          <strong className="font-urbanist font-bold text-[2.5rem]">
            {value}
          </strong>
          <p className="font-manrope text-[#939393]">{label}</p>
        </div>
      ))}
    </div>
  );
}
