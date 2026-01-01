import clsx from "clsx";

interface SurfaceProps {
  children: React.ReactNode;
  className?: string;
}

export default function Surface({ children, className }: SurfaceProps) {
  return (
    <div
      className={clsx(
        "py-[1rem] px-6 border border-neutral-medium rounded-[.625rem]",
        className
      )}
    >
      {children}
    </div>
  );
}
