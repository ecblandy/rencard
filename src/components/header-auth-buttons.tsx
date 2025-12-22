// Components
import Button from "./ui/button";

export default function HeaderAuthButtons() {
  return (
    <div className="flex items-center gap-2.5">
      <Button
        sizeH="sm"
        variant="custom"
        href="/signin"
        className="w-[4.9375rem] hover:bg-black hover:text-white"
      >
        Entrar
      </Button>
      <Button sizeH="sm" variant="default" href="/signup" className="w-25.25 ">
        Cadastrar
      </Button>
    </div>
  );
}
