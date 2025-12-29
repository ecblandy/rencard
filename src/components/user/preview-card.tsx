import { usePreview } from "@/providers/preview-provider";
import ProfilePreview from "./profile-preview";
import { SocialMediaPreview } from "./social-media-preview";


import SpotifyPreview from "./spotify-preview";
import CurriculumAndContactPreview from "./curriculum-and-contact-preview";
import WhatsappLinkedinPreview from "./whatsapp-linkedin-preview";
import Button from "../ui/button";

import { Maximize } from "lucide-react";

export default function PreviewCard() {
  const {data} = usePreview()
  return (
    <div className="max-w-[20.625rem] w-full">
      <h3 className="mb-4 text-center font-urbanist text-[1.25rem] font-semibold text-neutral-medium">
        PREVIEW AO VIVO
      </h3>

      <div style={{
    backgroundColor: data.appearence.bgColor || "#ffffff",
    color: data.appearence.textColor || "#000000",
  }} 
  className={`rounded-[.625rem] border border-neutral-extra-soft px-4 py-3`}>
        <ProfilePreview />
        <CurriculumAndContactPreview />
        <SpotifyPreview />
        <SocialMediaPreview />
        <WhatsappLinkedinPreview />
         <p className="mt-[1.875rem] text-center font-manrope  font-medium text-neutral-medium">Feito com <strong>Rencard</strong></p>
      </div>
  
  <Button
  variant="default"
  sizeH="md"
  className="w-full mt-[1rem] flex items-center justify-center gap-2"
>
  <Maximize size={20} />
  Visualizar perfil em tela cheia
</Button>
    </div>
  );
}
