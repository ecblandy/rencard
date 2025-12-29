import { usePreview } from "@/providers/preview-provider";
import Image from "next/image";

export default function ProfilePreview() {
  const { data } = usePreview();
  return (
    <div className="flex flex-col items-center justify-center gap-[1.125rem] ">
      <Image
        src={data.image || "/images/user-placeholder.svg"}
        alt=""
        width={103}
        height={103}
        className="rounded-[.625rem]"
      />

      <div className="flex flex-col items-center justify-center w-full">
        <h3 className="font-urbanist font-bold whitespace-nowrap ">
          {data.name || "Mariana Oliveira"}
        </h3>
        <span className="font-manrope wrap-break-word text-neutral-medium ">
          {data.bio || "Arquiteta"}
        </span>
      </div>
    </div>
  );
}
