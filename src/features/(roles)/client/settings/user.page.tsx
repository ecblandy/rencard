import AddressForm from "@/features/account/components/address-form";
import PageHeader from "@/shared/ui/page-header";

export default function UserSection() {
  return (
    <section className="space-y-[2.5625rem]">
      <PageHeader
        title="Minha conta"
        description="Gerencie as informações da sua conta "
      />

      <div className="space-y-[2.5625rem]">
        <AddressForm />
      </div>
    </section>
  );
}
{
  /* <div className="space-y-[2.5625rem]">
        <AddressForm />
        <AccountInfoForm />
        <DeleteAccount />
      </div> */
}
