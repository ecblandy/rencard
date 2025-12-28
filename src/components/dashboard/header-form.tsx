interface HeaderFormProps {
  title: string;
  description: string;
}

export default function HeaderForm({ title, description }: HeaderFormProps) {
  return (
    <div className="mb-[1.5rem] font-urbanist font-semibold">
      <h2 className="text-[1.5rem]">{title}</h2>
      <p className="text-[1.25rem] text-neutral-medium">{description}</p>
    </div>
  );
}
