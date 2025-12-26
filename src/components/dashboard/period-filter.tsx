"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Button from "../ui/button";

const PERIOD_OPTIONS = [
  { label: "Hoje", value: "today" },
  { label: "Últimos 7 dias", value: "7d" },
  { label: "Últimos 30 dias", value: "30d" },
];

export default function PeriodFilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams.toString());

  function handleClick(status: string) {
    console.log(status);
    if (status) {
      params.set("status", status);
    } else {
      params.delete("status");
    }

    replace(`${pathname}?${params.toString()}`);
    return;
  }
  return (
    <div className="flex flex-wrap items-center  gap-[.875rem] mt-[2.5625rem]">
      {PERIOD_OPTIONS.map(({ label, value }, index) => {
        const paramsKey = params.get("status");
        const isActiveFilter = paramsKey === value;
        const style = isActiveFilter
          ? "bg-black text-white border-transparent"
          : "border-[#7A7A7A] text-[#454545]";
        return (
          <Button
            key={index}
            variant="custom"
            sizeH="sm"
            onClick={() => handleClick(value)}
            className={`max-w-[21.5rem] border w-full ${style}`}
          >
            {label}
          </Button>
        );
      })}
    </div>
  );
}
