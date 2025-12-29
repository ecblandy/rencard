"use client";

import { useState } from "react";

// Components
import Input from "../ui/input";
import SwitchButton from "../ui/switch-button";
import OptionCard from "./option-card";
import CardSwitchButton from "./card-switch-button";
import Button from "../ui/button";

// Icons
import {
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaTelegram,
  FaEnvelope,
  FaXTwitter,
  FaGlobe,
  FaSpotify,
} from "react-icons/fa6";
import { SocialType, usePreview } from "@/providers/preview-provider";

const socialList = [
  { name: "Instagram", icon: FaInstagram, placeholder: "@marinaoliveira" },
  { name: "TikTok", icon: FaTiktok, placeholder: "@marinaoliveira" },
  { name: "LinkedIn", icon: FaLinkedin, placeholder: "@marinaoliveira" },
  { name: "Facebook", icon: FaFacebook, placeholder: "@marinaoliveira" },
  { name: "YouTube", icon: FaYoutube, placeholder: "@marinaoliveira" },
  { name: "Telegram", icon: FaTelegram, placeholder: "@marinaoliveira" },
  { name: "E-mail", icon: FaEnvelope, placeholder: "email@exemplo.com" },
  { name: "X", icon: FaXTwitter, placeholder: "@marinaoliveira" },
  { name: "Site", icon: FaGlobe, placeholder: "https://seusite.com" },
  { name: "Spotify", icon: FaSpotify, placeholder: "@marinaoliveira" },
];

export default function SocialMedia() {
  const { data, updateSocial } = usePreview();

  function handleSocialChange(type: SocialType, value: string) {
    // Tipos que não precisam de "@" ou limpeza
    const noFormatTypes: SocialType[] = ["Site", "LinkedIn", "Facebook", "YouTube", "E-mail"];

    const formattedValue = noFormatTypes.includes(type)
      ? value
      : value.replace(/\s+/g, "").replace(/^([^@].*)$/, "@$1"); // adiciona @ se não tiver

    updateSocial(type, { value: formattedValue });
  }

  return (
    <OptionCard
      title="Redes Sociais"
      description="Configure suas redes sociais e links"
    >
      <form className="space-y-8">
        {socialList.map(({ icon: Icon, name, placeholder }, index) => {
          const socialItem = data.socials.find(s => s.type === name);

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
                <Input
                  variant="default"
                  placeholder={placeholder}
                  className="w-full"
                  value={typeof socialItem.value === "string" ? socialItem.value : ""}
                  onChange={(e) => handleSocialChange(name as SocialType, e.target.value)}
                />
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
