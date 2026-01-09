// Components
import Surface from "@/shared/ui/surface";
import Button from "@/components/ui/button";

// Icons
import { Copy, QrCode } from "lucide-react";
import { IoLink } from "react-icons/io5";

export default function Coupon() {
  return (
    <Surface className="mt-[2.5625rem]">
      <div>
        {/* Icon */}
        <p className="flex items-center justify-center bg-neutral-extra-soft h-12.5 w-12.5 rounded-[.625rem] mb-[2.1875rem]">
          <IoLink size={26} />
        </p>

        {/* Details */}
        <div className="font-urbanist font-semibold ">
          <h2 className="text-[1.5rem] leading-[100%] mb-[1rem]">
            Seu cupom de divulgação
          </h2>
          <p className="text-[1.25rem] text-neutral-strong leading-[100%]">
            Compartilhe esse cupom para gerar comissões automaticamente.
          </p>
        </div>

        {/* Coupon code */}
        <div className="flex items-center gap-x-6 mt-6">
          <span className="flex w-full text-neutral-strong font-manrope font-semibold bg-neutral-extra-soft border border-neutral-medium rounded-[.625rem] px-[1rem] py-[.5rem]">
            MARIA20
          </span>

          <div className="flex items-center gap-[1.375rem]">
            <Button
              variant="default"
              sizeH="sm"
              className="flex items-center gap-[.5rem] w-[6.75rem]"
            >
              <Copy size={20} />
              salvar
            </Button>

            <Button
              variant="outline"
              sizeH="sm"
              className="flex items-center gap-[.5rem] w-[6.75rem]"
            >
              <QrCode size={20} />
              salvar
            </Button>
          </div>
        </div>
      </div>
    </Surface>
  );
}
