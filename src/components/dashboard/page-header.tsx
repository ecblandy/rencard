interface HeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ description, title }: HeaderProps) {
  return (
    <header>
      <h1 className="font-urbanist font-bold text-[2.5rem]">{title}</h1>
      <p className="font-manrope text-[#7A7A7A]">{description}</p>
    </header>
  );
}
