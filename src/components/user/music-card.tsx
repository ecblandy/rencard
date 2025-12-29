"use client";

import { useState } from "react";

// Components
import Input from "../ui/input";
import SwitchButton from "../ui/switch-button";
import OptionCard from "./option-card";

// Icons
import { FaSpotify } from "react-icons/fa6";
import Button from "../ui/button";
import CardSwitchButton from "./card-switch-button";
import { usePreview } from "@/providers/preview-provider";

const socialList = [
  {
    name: "Spotify",
    icon: FaSpotify,
    placeholder: "https://open.spotify.com/track/...",
  },
];

export default function MusicPreview() {
  const [enabled, setEnabled] = useState<Record<string, boolean>>({});
  const { update } = usePreview();

  function handleToggle(name: string, value: boolean) {
    setEnabled((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <OptionCard
      title="Música"
      description="Adicione uma música de fundo ao seu perfil"
    >
      <form action="" className="space-y-[1.9375rem]">
        {socialList.map(({ icon: Icon, name, placeholder }, index) => {
          const isEnabled = enabled[name] ?? false;

          return (
            <CardSwitchButton key={index}>
              <div className="flex justify-between mb-[1.1875rem]">
                <div className="flex items-center gap-[.6875rem]">
                  <Icon size={20} />
                  <span className="font-urbanist font-semibold text-[1.25rem]">
                    {name}
                  </span>
                </div>

                <SwitchButton
                  value={isEnabled}
                  onChange={(value) => handleToggle(name, value)}
                />
              </div>

              {isEnabled && (
                <Input
                  variant="default"
                  placeholder={placeholder}
                  className="w-full"
                  onChange={({ target }) => update("spotfyLink", target.value)}
                />
              )}
              <p className="font-manrope font-medium text-[.875rem] text-neutral-medium mt-[1.1875rem]">
                Cole o link de uma música do Spotify
              </p>
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
