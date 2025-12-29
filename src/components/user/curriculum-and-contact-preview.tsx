"use client";

import { usePreview } from "@/providers/preview-provider";
import Button from "../ui/button";

import { Save, Download } from "lucide-react";

export default function CurriculumAndContactPreview() {
  const { data } = usePreview();

  const contact = data.socials.find(
    (item) => item.type === "Contato" && item.enabled && item.value.toString().trim() !== ""
  );

  const curriculum = data.socials.find(
    (item) => item.type === "Curriculo" && item.enabled && item.value
  );

  if (!contact && !curriculum) return null;

  // Função para criar e baixar vCard
  const handleSaveContact = () => {
    if (!contact?.value) return;
    const vcard = `
BEGIN:VCARD
VERSION:3.0
TEL;TYPE=CELL:${contact.value}
FN:${contact.value}
END:VCARD
`;
    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "contato.vcf";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadCurriculum = () => {
    if (!curriculum?.value) return;

    let url: string;

    if (curriculum.value instanceof File) {
      url = URL.createObjectURL(curriculum.value);
    } else {
      url = curriculum.value;
    }

    const a = document.createElement("a");
    a.href = url;
    if (curriculum.value instanceof File) {
      a.download = "curriculo.pdf";
    }
    a.click();

    if (curriculum.value instanceof File) {
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="flex flex-col gap-3 mt-7.5">
      {contact && (
        <Button
          variant="default"
          sizeH="sm"
          className="flex items-center justify-center gap-2.5"
          onClick={handleSaveContact}
        >
          <Save size={20} />
          Salvar Contato
        </Button>
      )}

      {curriculum && (
        <Button
          variant="outline"
          sizeH="sm"
          className="flex items-center justify-center gap-2.5"
          onClick={handleDownloadCurriculum}
        >
          <Download size={20} />
          Baixar currículo
        </Button>
      )}
    </div>
  );
}
