interface SectionHeaderProps {
  title: string;
  description: string;
}

export default function SectionHeader({
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="font-urbanist space-y-[.6875rem] text-center">
      <h2 className="font-bold text-[2.5rem] leading-[100%]">{title}</h2>
      <p className="font-semibold text-[1.5rem] leading-[100%]">
        {description}
      </p>
    </div>
  );
}
