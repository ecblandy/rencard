interface CardSwitchButtonProps {
  children: React.ReactNode;
}

export default function CardSwitchButton({ children }: CardSwitchButtonProps) {
  return (
    <div className="bg-[#F5F5F5] w-full rounded-[.625rem] px-[1rem] py-[1.5rem] h-auto">
      {children}
    </div>
  );
}
