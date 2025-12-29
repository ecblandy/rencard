
interface CardBillingProps {
    children: React.ReactNode
}

export default function CardBilling({children}:CardBillingProps) {
  return (
    <div className="border border-neutral-extra-soft rounded-[.625rem] p-6">
      {children}
    </div>
  );
}