interface  SectionAuthTitleProps {
    title: string
    description: string
}

export default function SectionAuthTitle({title, description}: SectionAuthTitleProps) {
  return (
    <section className="flex flex-col items-center gap-[.6875rem] justify-center font-urbanist mt-[2.5rem] mb-[3.125rem]">
      <h1 className="font-bold text-[2.5rem] leading-[100%]">{title}</h1>
      <p className="font-semibold text-[1.5rem] leading-[100%] text-neutral-medium">{description}</p>
    </section>
  );
} 