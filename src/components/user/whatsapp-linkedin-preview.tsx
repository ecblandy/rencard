"use client";

import { usePreview } from "@/providers/preview-provider";
import Button from "../ui/button";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa6";

export default function WhatsappLinkedinPreview() {
  const { data } = usePreview();
  console.log(data.socials)

  // Garantindo que value seja string
  const whatsapp = data.socials.find(
    (item) =>
      item.type === "Whatsapp" &&
      item.enabled &&
      typeof item.value === "string" &&
      item.value.trim() !== ""
  );

  const linkedin = data.socials.find(
    (item) =>
      item.type === "LinkedIn" &&
      item.enabled &&
      typeof item.value === "string" &&
      item.value.trim() !== ""
  );

  if (!whatsapp && !linkedin) return null;

  const handleOpenWhatsapp = () => {
    if (!whatsapp?.value || typeof whatsapp.value !== "string") return;

    const phone = whatsapp.value.replace(/\D/g, ""); // remove caracteres não numéricos
    window.open(`https://wa.me/${phone}`, "_blank");
  };

  const handleOpenLinkedin = () => {
    if (!linkedin?.value || typeof linkedin.value !== "string") return;

    const url = linkedin.value.startsWith("http")
      ? linkedin.value
      : `https://${linkedin.value}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col gap-3 mt-7.5">
      {whatsapp && (
        <Button
          variant="default"
          sizeH="sm"
          className="flex items-center justify-center gap-2.5"
          onClick={handleOpenWhatsapp}
        >
          <FaWhatsapp size={20} />
         Chamar no Whatsapp
        </Button>
      )}

      {linkedin && (
        <Button
          variant="outline"
          sizeH="sm"
          className="flex items-center justify-center gap-2.5"
          onClick={handleOpenLinkedin}
        >
          <FaLinkedin size={20} />
         Ver perfil profissional
        </Button>
      )}
    </div>
  );
}
