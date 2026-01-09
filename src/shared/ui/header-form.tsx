interface HeaderCardProps {
  title: string;
  description: string;
}

export default function HeaderCard({ title, description }: HeaderCardProps) {
  return (
    <div className="mb-[1.5rem] font-urbanist font-semibold">
      <h2 className="text-[1.5rem] leading-[100%] mb-[1rem]">{title}</h2>
      <p className="text-[1.25rem] leading-[100%] text-neutral-strong">
        {description}
      </p>
    </div>
  );
}
