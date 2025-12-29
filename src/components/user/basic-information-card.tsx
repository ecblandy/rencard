import Image from "next/image";

// Icons

import { Upload } from "lucide-react";

// Components
import Label from "../ui/label";
import OptionCard from "./option-card";

// Provider hook
import { usePreview } from "@/providers/preview-provider";
import Input from "../ui/input";
import Textarea from "../ui/textarea";
import Button from "../ui/button";

export default function BasicInformationCard() {
  const { data, update } = usePreview();

  function handleProfileImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    update("image", imageUrl);
  }

  return (
    <OptionCard
      title="Informações básicas"
      description="Dados principais do seu perfil"
    >
      <form action="">
        {/* Image */}
        <div>
          <Label>Foto de perfil</Label>
          <div className="flex items-center gap-[1.1875rem] mt-[1rem]">
            <Image
              src={data.image || "/images/user-placeholder.svg"}
              alt="user image"
              height={47}
              width={47}
            />

            <label
              htmlFor="profile-image"
              className="flex items-center whitespace-nowrap gap-[.875rem] text-neutral-medium border border-neutral-soft px-[1rem] py-[.5rem] rounded-[.625rem] w-[9rem] h-[2.375rem]"
            >
              <Upload size={15} />
              <p className="font-manrope font-semibold ">Enviar foto</p>
            </label>

            <input
              id="profile-image"
              type="file"
              accept="image/*"
              onChange={handleProfileImageChange}
              className="hidden"
            />
          </div>
        </div>

        <fieldset className="space-y-[1rem]">
          {/* Name */}
          <div className="flex flex-col mt-[3.6875rem]">
            <Label>Nome</Label>
            <Input
              variant="default"
              placeholder="Digite seu nome"
              onChange={({ target }) => update("name", target.value)}
            />
          </div>

          {/* Subtitle || Bio */}
          <div className="flex flex-col">
            <Label>Subtítulo / Bio</Label>
            <Textarea
              variant="default"
              placeholder="Digite seu subtítulo / bio"
              onChange={({ target }) => update("bio", target.value)}
            />

            <p className="mt-[.5rem] text-neutral-medium text-[.875rem] font-manrope font-medium">
              Uma breve descrição sobre você ou sua profissão.
            </p>
          </div>
        </fieldset>

        <Button variant="default" sizeH="sm" className="w-full mt-[3.5rem]">
          Salvar
        </Button>
      </form>
    </OptionCard>
  );
}
