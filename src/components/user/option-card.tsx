interface OptionCardProps {
  children: React.ReactElement;
  title: string;
  description: string;
}

export default function OptionCard({
  children,
  title,
  description,
}: OptionCardProps) {
  return (
    <div className="w-[26.5625rem] h-auto rounded-[.625rem] p-6 border border-neutral-soft">
      <div className="font-urbanist font-semibold mb-[3.5rem]">
        <h2 className="text-[1.5rem]">{title}</h2>
        <p className="text-[1.25rem] text-neutral-medium">{description}</p>
      </div>
      {children}
    </div>
  );
}
