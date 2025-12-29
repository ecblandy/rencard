"use client";

import { usePreview, SocialType } from "@/providers/preview-provider";
import { IconType } from "react-icons";

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

// Map de ícones apenas para redes sociais de link
const SOCIAL_ICONS: Partial<Record<SocialType, IconType>> = {
  Instagram: FaInstagram,
  TikTok: FaTiktok,
  LinkedIn: FaLinkedin,
  Facebook: FaFacebook,
  YouTube: FaYoutube,
  Telegram: FaTelegram,
  "E-mail": FaEnvelope,
  X: FaXTwitter,
  Site: FaGlobe,
  Spotify: FaSpotify,
};

export function SocialMediaPreview() {
  const { data } = usePreview();

  // Filtra apenas as redes sociais de link
  const enabledSocials = data.socials.filter(
    (item) =>
      item.enabled &&
      typeof item.value === "string" && // garante que é string
      item.value.trim() !== "" &&
      !["Contato", "Curriculo", "Whatsapp", "Pix", "Portfólio", "Botão personalizado"].includes(item.type)
  );

  if (enabledSocials.length === 0) return null;

  const getHref = (type: SocialType, value: string) => {
    switch (type) {
      case "E-mail":
        return `mailto:${value}`;
      case "Site":
      case "Facebook":
      case "LinkedIn":
      case "YouTube":
        return value.startsWith("http") ? value : `https://${value}`;
      default:
        return undefined; // redes sociais que não são link direto
    }
  };

  return (
    <div className="flex flex-col gap-3 mt-[1.875rem]">
      {enabledSocials.map((social) => {
        const Icon = SOCIAL_ICONS[social.type];
        if (!Icon) return null; // garante que só renderiza ícones existentes
        const href = getHref(social.type, social.value as string);

        return (
          <div
            key={social.type}
            className="flex items-center gap-3 rounded-md border px-4 py-3"
          >
            <Icon size={20} className="text-neutral-700" />

            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-urbanist text-[.875rem] font-medium truncate text-blue-600 hover:underline"
              >
                {social.value as string}
              </a>
            ) : (
              <span className="font-urbanist text-[.875rem] font-medium truncate">
                {social.value as string}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
