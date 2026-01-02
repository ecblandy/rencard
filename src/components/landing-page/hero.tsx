import Image from "next/image";
import Button from "../ui/button";

export default function Hero() {
  return (
    <section className="relative flex items-center min-h-[39.25rem]">
      <Image
        src="/images/hero-image.png"
        alt="Hero do Rencard"
        fill
        priority
        fetchPriority="high"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAECAIAAAA4WjmaAAAAiElEQVR4AQB8AIP/Al9kZmxxc2ZrbGVqa3F2dnR4eXd8fIGGhnp+f0dJTAIUEhIOCwoTEBARDw8LCAgNCgkFAgDY1NHh39z19PQCDAoKCAYHCQcICwkJBAMEExMTDQwL1d"
        className="object-cover"
      />

      {/* Conteúdo */}
      <div className="relative z-10 font-urbanist">
        <h1 className="pl-[5rem] font-bold text-[4rem] leading-[100%] mb-[1.5rem] max-w-[51.875rem] w-full">
          Olá, eu sou o <strong className="text-white">RENCARD</strong>!
          <br /> A melhor forma de fazer networking!
        </h1>

        <div className="pl-[5rem] flex items-center bg-[#FBFBFB80] max-w-[37.75rem] w-full h-[3.5rem] px-[1.875rem] my-[1.5rem] rounded-[.625rem]">
          <p className="text-[2.5rem] text-[#454545] font-montserrat ">
            <strong>E você já tem seu</strong> REN?
          </p>
        </div>

        <p className="pl-[5rem] font-semibold text-[1.5rem] text-white max-w-[46.25rem] w-full">
          Troque informações em segundos. NFC, QR Code e um perfil digital
          completo — tudo em um só produto.
        </p>

        <div className="flex items-center gap-[1.5rem] mt-[2.5rem] pl-[5rem]">
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
