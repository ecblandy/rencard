import Button from "../ui/button";

export default function Cta() {
  return (
    <section className="flex flex-col items-end p-[3.75rem] bg-cta-image min-h-[32.125rem] h-auto">
      <div className="font-urbanist flex flex-col items-end space-y-6">
        <strong className="text-[4rem] font-bold text-end">
          O cartão de visita
          <br /> que evoluiu
        </strong>
        <p className="text-[1.5rem] font-semibold text-[#939393]">
          Pronto para o futuro?
        </p>
        <p className="font-semibold text-[1.5rem] text-[#939393] text-end">
          Junte-se a milhares de pessoas que já <br />
          transformaram sua forma de fazer networking.
        </p>
      </div>
      <Button
        sizeH="xl"
        variant="default"
        className="mt-[2.5rem] w-[17.125rem] text-[1.5625rem]"
      >
        Criar meu Rencard
      </Button>
    </section>
  );
}
