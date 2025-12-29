"use client";

import { createContext, useContext, useState } from "react";

export type SocialType =
  | "Instagram"
  | "TikTok"
  | "LinkedIn"
  | "Facebook"
  | "YouTube"
  | "Telegram"
  | "E-mail"
  | "X"
  | "Site"
  | "Spotify"
  | "Whatsapp"
  | "Pix"
  | "Contato"
  | "Portfólio"
  | "Curriculo"
  | "Botão personalizado";

export type SocialItem = {
  type: SocialType;
 value: string | File
  enabled: boolean;
};

type PreviewData = {
  name: string;
  bio: string;
  image: string;
  spotfyLink: string;
  appearence: {
    textColor: string;
    bgColor: string;
  };
  socials: SocialItem[];
};

type PreviewContextType = {
  data: PreviewData;
  update: (key: keyof PreviewData, value: string) => void;
  updateSocial: (type: SocialType, payload: Partial<SocialItem>) => void;
  updateAppearance: (key: "bgColor" | "textColor", value: string) => void;
};

const initialSocials: SocialItem[] = [
  { type: "Instagram", value: "", enabled: false },
  { type: "TikTok", value: "", enabled: false },
  { type: "LinkedIn", value: "", enabled: false },
  { type: "Facebook", value: "", enabled: false },
  { type: "YouTube", value: "", enabled: false },
  { type: "Telegram", value: "", enabled: false },
  { type: "E-mail", value: "", enabled: false },
  { type: "X", value: "", enabled: false },
  { type: "Site", value: "", enabled: false },
  { type: "Spotify", value: "", enabled: false },
  { type: "Whatsapp", value: "", enabled: false },
  { type: "Pix", value: "", enabled: false },
  { type: "Contato", value: "", enabled: false },
  { type: "Portfólio", value: "", enabled: false },
  { type: "Curriculo", value: "", enabled: false },
  { type: "Botão personalizado", value: "", enabled: false },
];

const PreviewContext = createContext<PreviewContextType | null>(null);

export function PreviewProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<PreviewData>({
    name: "",
    bio: "",
    image: "",
    spotfyLink: "",
    appearence: {
      bgColor: "",
      textColor: "",
    },
    socials: initialSocials,
  });

  function update(key: keyof PreviewData, value: string) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function updateSocial(type: SocialType, payload: Partial<SocialItem>) {
    setData((prev) => ({
      ...prev,
      socials: prev.socials.map((item) =>
        item.type === type ? { ...item, ...payload } : item
      ),
    }));
  }

  function updateAppearance(key: "bgColor" | "textColor", value: string) {
    setData((prev) => ({
      ...prev,
      appearence: {
        ...prev.appearence,
        [key]: value,
      },
    }));
  }

  return (
    <PreviewContext.Provider value={{ data, update, updateSocial, updateAppearance }}>
      {children}
    </PreviewContext.Provider>
  );
}

export function usePreview() {
  const ctx = useContext(PreviewContext);
  if (!ctx) throw new Error("usePreview must be used within PreviewProvider");
  return ctx;
}
