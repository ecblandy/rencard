import PageHeader from "../../../../shared/ui/page-header";
import CouponCards from "./components/coupon-cards";

export default function CouponsSection() {
  return (
    <section>
      <PageHeader
        title="Meus Cupons"
        description="Acompanhe seus códigos de indicação e compartilhe para ganhar comissões"
      />

      <CouponCards />
    </section>
  );
}
