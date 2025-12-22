import Link from "next/link";

// Components
import Button from "./ui/button";

export default function HeaderAuthButtons() {
  return (
    <div className="flex items-center gap-2.5">
      <Button
        sizeH="sm"
        variant="custom"
        className="w-[4.9375rem] hover:bg-black hover:text-white"
      >
        <Link href="/signin">Entrar</Link>
      </Button>
      <Button sizeH="sm" variant="default" className="w-25.25 px-[1rem]">
        <Link href="/signup">começar</Link>
      </Button>
    </div>
  );
}
