interface CardAccountProps {
  children: React.ReactElement;
}

export default function CardAccount({ children }: CardAccountProps) {
  return (
    <div className="w-full min-h-[24.9375rem] rounded-[.625rem] border border-[#939393] p-6">
      {children}
    </div>
  );
}
