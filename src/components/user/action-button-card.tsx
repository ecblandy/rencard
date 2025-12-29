"use client";

import Input from "../ui/input";
import SwitchButton from "../ui/switch-button";
import OptionCard from "./option-card";
import CardSwitchButton from "./card-switch-button";
import Button from "../ui/button";

import { SquareUserRound, BriefcaseBusiness } from "lucide-react";
import { FaWhatsapp, FaFilePdf, FaGlobe } from "react-icons/fa6";
import { SiPix } from "react-icons/si";
import { SocialType, usePreview } from "@/providers/preview-provider";

const actionSocialList = [
  { name: "Whatsapp", icon: FaWhatsapp, placeholder: "@559999999999" },
  { name: "Pix", icon: SiPix, placeholder: "chavepix@exemplo.com" },
  { name: "Contato", icon: SquareUserRound, placeholder: "contato@exemplo.com" },
  { name: "Portfólio", icon: BriefcaseBusiness, placeholder: "https://github.com/seuuser" },
  { name: "Curriculo", icon: FaFilePdf, placeholder: "Selecione um arquivo" },
  { name: "Botão personalizado", icon: FaGlobe, placeholder: "https://seulink.com" },
];

export default function ActionButtonCard() {
  const { data, updateSocial } = usePreview();

  function handleSocialChange(type: SocialType, value: string | File) {
    updateSocial(type, { value });
  }

  return (
    <OptionCard title="Botões" description="Configure os botões de ação do seu perfil">
      <form className="space-y-8 mt-2">
        {actionSocialList.map(({ icon: Icon, name, placeholder }, index) => {
          const socialItem = data.socials.find((s) => s.type === name);
          if (!socialItem) return null;

          return (
            <CardSwitchButton key={index}>
              <div className="flex justify-between mb-5">
                <div className="flex items-center gap-3">
                  <Icon size={20} />
                  <span className="font-urbanist font-semibold text-lg">{name}</span>
                </div>

                <SwitchButton
                  value={socialItem.enabled}
                  onChange={(value) =>
                    updateSocial(name as SocialType, { enabled: value })
                  }
                />
              </div>

              {socialItem.enabled && (
                <>
                  {name === "Curriculo" ? (
                    <label className="flex items-center gap-2 cursor-pointer w-full border rounded-md p-3 justify-center hover:bg-gray-100 transition">
                      <span className="text-sm font-medium">
                        {typeof socialItem.value === "string" ? "Selecione um arquivo" : socialItem.value.name}
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleSocialChange(name as SocialType, file);
                        }}
                      />
                    </label>
                  ) : (
                    <Input
                      variant="default"
                      placeholder={placeholder}
                      className="w-full"
                      value={typeof socialItem.value === "string" ? socialItem.value : ""}
                      onChange={(e) => handleSocialChange(name as SocialType, e.target.value)}
                    />
                  )}
                </>
              )}
            </CardSwitchButton>
          );
        })}

        <Button variant="default" sizeH="sm" className="w-full">
          Salvar
        </Button>
      </form>
    </OptionCard>
  );
}
