import AccountInfoForm from "@/components/dashboard/account-info-form";
import AddressForm from "@/components/dashboard/address-form";
import DeleteAccount from "@/components/dashboard/delete-account";
import PageHeader from "@/components/dashboard/page-header";

export default function AccountPage() {
  return (
    <section>
      <PageHeader title="" description="" />
      <div className="space-y-[2.5625rem]">
        <AddressForm />
        <AccountInfoForm />
        <DeleteAccount />
      </div>
    </section>
  );
}
