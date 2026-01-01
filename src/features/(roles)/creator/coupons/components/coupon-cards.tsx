// Components
import Surface from "@/features/(roles)/components/surface";

// Icons
import { RiCoupon2Line } from "react-icons/ri";

export default function CouponCards() {
  return (
    <Surface className="flex gap-[2.1875rem] mt-[2.5625rem]">
      {/* Icon */}
      <p className="flex items-center justify-center bg-neutral-extra-soft h-12.5 w-12.5 rounded-[.625rem] mb-[2.1875rem]">
        <RiCoupon2Line size={25} />
      </p>

      {/* Coupon details */}
      <div>
        <div>
          <strong>MARIA20</strong>
          <p>10% OFF</p>
        </div>

        <span>45 usos • Válido até 31/12/2026</span>
      </div>
    </Surface>
  );
}
