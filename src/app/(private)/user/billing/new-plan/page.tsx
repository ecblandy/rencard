import Button from "@/components/ui/button";
import { FaCheck } from "react-icons/fa6";

type PlanType = "galera" | "pro";

interface PlanStyle {
  card: string;
  button: string;
  icon: string;
}

interface PlanDetail {
  id: number;
  type: PlanType; // aqui dizemos que só pode ser "galera" | "pro"
  title: string;
  description: string;
  features: string[];
  buttonTitle: string;
}

const plansDetails: PlanDetail[] = [
  {
    id: 0,
    type: "galera",
    title: "Rencard da Galera",
    description: "Para inciar novas conexões de forma simples e prática.",
    features: [
      "Informações concentradas em um só lugar",
      "Moderno e tecnológico",
      "Suas redes sociais de forma mais interativa (Até 10 redes)",
      "Link personalizado",
      "Música - Sua vibe, em um toque.",
    ],
    buttonTitle: "Escolher Da Galera",
  },
  {
    id: 1,
    type: "pro",
    title: "Rencard Pro",
    description:
      "Para quem quer um ambiente mais profissional e com uma experiência completa.",
    features: [
      "Informações concentradas em um só lugar",
      "Suba suas avaliações no Google",
      "Facilite seu cliente a chegar no seu local",
      "Sem limite de redes sociais",
      "Link personalizado",
      "QR Code digital",
      "Link personalizado para WhatsApp",
      "PIX integrado",
      "Formulário de captação de leads",
      "Métricas Avançadas",
      "Música - Conecte e converta",
    ],
    buttonTitle: "Escolher Pro",
  },
];

const plansStyle: Record<PlanType, PlanStyle> = {
  galera: {
    card: "bg-[#FBFBFB] border border-neutral-extra-soft",
    button: "bg-black text-white hover:bg-[#333333]",
    icon: "text-black",
  },
  pro: {
    card: "bg-black text-white",
    button: "bg-white text-black hover:bg-[#E5E5E5]",
    icon: "text-white",
  },
};

export default function NewPlanPage() {
  return (
      <div>
          <span className="block uppercase text-neutral-medium text-[1.5rem] font-semibold font-urbanist mt-[2.5625rem] mb-[2rem]">Escolha seu novo plano</span>
        <div className="flex justify-center  flex-wrap w-full gap-[6rem] items-start">
            {plansDetails.map(
              ({ id, title, description, features, type, buttonTitle }) => {
                const style = plansStyle[type];
                return (
                  <div
                    key={id}
                    className={`font-urbanist max-w-[28.75rem] w-full h-auto p-6 rounded-[.625rem] ${style.card}`}
                  >
                    <div className="max-w-[21.25rem] w-full mb-[2.375rem]">
                      <h3 className="font-bold text-[2rem]">{title}</h3>
                      <p className="font-semibold text-[1.25rem] text-[#939393]">
                        {description}
                      </p>
                    </div>
    
                    <ul className="space-y-[2rem]">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <FaCheck size={20} className={style.icon} />
                          <p>{feature}</p>
                        </li>
                      ))}
                    </ul>
    
                    <Button
                      variant="custom"
                      sizeH="sm"
                      className={`${plansStyle[type].button} mt-[2.5rem] w-full`}
                    >
                      {buttonTitle}
                    </Button>
                  </div>
                );
              }
            )}
          </div>
      </div>
  );
}