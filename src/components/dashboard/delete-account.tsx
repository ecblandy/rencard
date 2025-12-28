import { Trash2 } from "lucide-react";

export default function DeleteAccount() {
  return (
    <section className="max-w-[66.3125rem] w-full rounded-[.625rem] p-6 bg-error-soft border border-error">
      <div className="flex items-center gap-[1.5rem]">
        {/* Icon */}

        <Trash2 className="text-error" />

        {/* Content */}
        <div className="flex flex-col gap-[1.25rem]">
          {/* Text */}
          <div className="flex flex-col gap-[.5rem]">
            <span className="font-urbanist text-error text-[1.5rem] font-semibold">
              Excluir minha conta
            </span>
            <p className="font-manrope text-neutral-strong max-w-[48rem]">
              Esta ação é permanente. Todos os seus cartões, métricas e acessos
              serão apagados.
            </p>
          </div>

          {/* Action */}
          <button className="font-manrope font-semibold text-error underline underline-offset-4 self-start">
            Excluir conta definitivamente
          </button>
        </div>
      </div>
    </section>
  );
}
