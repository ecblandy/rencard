import PageHeader from "@/shared/ui/page-header";
import Button from "@/components/ui/button";
import CardBilling from "@/components/user/card-billing";
import { Check, X } from "lucide-react";

interface Feature {
  name: string;
  available: boolean;
}

const features: Feature[] = [
  { name: "Links essenciais", available: true },
  { name: "Foto e bio", available: true },
  { name: "Contato direto", available: true },
  { name: "Portfólio e mídia", available: false }, // bloqueado no plano Free
  { name: "Currículo para download", available: false },
  { name: "Formulário de contato", available: false },
  { name: "Upload de imagem de fundo", available: false },
  { name: "Relatórios de métricas", available: true },
];

export default function BillingPage() {
  return (
    <section>
      <PageHeader
        title="Assinatura"
        description="Gerencie seu plano, renovação e pagamentos"
      />

      <span className="block uppercase text-neutral-medium text-[1.5rem] font-semibold font-urbanist mt-[2.5625rem] mb-[2rem]">
        Plano atual
      </span>

      <CardBilling>
        <div className="flex items-center justify-between">
          <div className="font-urbanist">
            <h2 className=" font-bold text-[2rem] mb-[.625rem]">Rencard Pro</h2>
            <p className="font-semibold text-[1.25rem] text-neutral-medium">
              Renova em 12 Ago, 2024
            </p>
          </div>

          <div>
            <Button sizeH="sm" variant="outline" href="/user/billing/new-plan">
              Alterar plano
            </Button>
          </div>
        </div>
      </CardBilling>

      <span className="block uppercase text-neutral-medium text-[1.5rem] font-semibold font-urbanist mt-[2.5625rem] mb-[2rem]">
        O que está incluso
      </span>

      <CardBilling>
        <ul className="grid grid-cols-2 gap-2">
          {features.map((feature) => (
            <li
              key={feature.name}
              className={`flex items-center gap-2 ${
                !feature.available ? "opacity-50" : ""
              }`}
            >
              {feature.available ? (
                <Check size={18} className="text-green-500" />
              ) : (
                <X size={18} className="text-gray-400" />
              )}
              <span>{feature.name}</span>
            </li>
          ))}
        </ul>
      </CardBilling>
    </section>
  );
}
