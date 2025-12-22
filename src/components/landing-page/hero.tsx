import Link from "next/link";
import Button from "../ui/button";

export default function Hero() {
  return (
    <section className="flex items-center pl-[5rem] bg-hero-image min-h-[31.5rem] h-auto ">
      {/* Hero details */}
      <div className="font-urbanist max-w-[36.25rem] w-full">
        <h1 className="text-white font-bold text-[4rem] leading-[100%] mb-[1.5rem]">
          <strong className="text-black">Seu cartão de visita</strong>{" "}
          reimaginado
        </h1>

        <p className="font-semibold text-[1.5rem] text-white">
          Troque informações em segundos. NFC, QR Code e um perfil digital
          completo — tudo em um só produto.
        </p>

        {/* Hero button action */}
        <div className="flex items-center gap-[1.5rem] mt-[2.5rem]">
          <Button
            sizeH="sm"
            variant="default"
            href="/signup"
            className="w-[10.75rem] first-letter:uppercase"
          >
            criar meu rencard
          </Button>
          <Button
            sizeH="sm"
            variant="outline"
            href="#plans"
            className="first-letter:uppercase"
          >
            ver planos
          </Button>
        </div>
      </div>
    </section>
  );
}
