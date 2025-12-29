import { usePreview } from "@/providers/preview-provider";
import Button from "../ui/button";
import OptionCard from "./option-card";


const appearenceColors = [{
  name: "Cor do fundo",
}, {
  name: "Cor da fonte",
}]


export default function AppearanceCard() {
  const {data, updateAppearance} = usePreview()
  return (
    <OptionCard
      title="Aparência"
      description="Personalize o visual do seu cartão digital"
    >
      <div className="flex flex-col gap-[2rem]">
      {appearenceColors.map(({ name }, index) => {
  // Define a chave do objeto baseado no nome do item
  const key = name === "Cor do fundo" ? "bgColor" : "textColor";

  return (
    <div key={index}>
      <div className="flex flex-col">
        <span className="font-urbanist font-semibold text-[1.25rem]">
          {name}
        </span>
        <div className="flex items-center gap-[1rem]">
          <input
            type="color"
            className="h-[3.125rem] w-[3.125rem]"
            value={data.appearence[key]}
            onChange={e => updateAppearance(key, e.target.value)}
          />

          <p className="font-manrope text-[.875rem] text-neutral-medium">
            Clique para abrir o seletor de cores
          </p>
        </div>
      </div>
    </div>
  );
})}

        <Button variant="default" sizeH="sm" className="w-full mt-[2rem]">Salvar</Button>
      </div>
    </OptionCard>
  );
}
