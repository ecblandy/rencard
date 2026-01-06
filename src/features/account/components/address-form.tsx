"use client";
import HeaderCard from "../../../shared/ui/header-form";
import Label from "@/components/ui/label";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import Surface from "@/shared/ui/surface";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddressSchema, addressSchema } from "@/shared/schema/address.schema";
import { useForm } from "react-hook-form";
import { useHookFormMask } from "use-mask-input";

export default function AddressForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AddressSchema>({ resolver: zodResolver(addressSchema) });

  const registerWithMask = useHookFormMask(register);

  return (
    <Surface>
      <form className="">
        <HeaderCard title="Endereço" description="Gerencie seus dados" />
        <fieldset>
          <div className="grid grid-cols-2 space-x-[1.125rem] space-y-[1.5rem]">
            <div className="flex flex-col">
              <Label variant="default">Rua</Label>
              <Input variant="default" sizeH="sm" placeholder="Nome da rua" />
            </div>
            <div className="flex flex-col">
              <Label variant="default">Número</Label>
              <Input variant="default" sizeH="sm" placeholder="Número" />
            </div>
          </div>

          <div className="grid grid-cols-2 space-x-[1.125rem] space-y-[1.5rem]">
            <div className="flex flex-col">
              <Label variant="default">Bairro</Label>
              <Input variant="default" sizeH="sm" placeholder="Bairro" />
            </div>
            <div className="flex flex-col">
              <Label variant="default">CEP</Label>
              <Input
                variant="default"
                sizeH="sm"
                placeholder="00000-000"
                {...registerWithMask("cep", "99999-999")}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 space-x-[1.125rem] space-y-[1.5rem]">
            <div className="flex flex-col">
              <Label variant="default">Estado</Label>
              <Input variant="default" sizeH="sm" placeholder="Estado" />
            </div>
            <div className="flex flex-col">
              <Label variant="default">Cidade</Label>
              <Input variant="default" sizeH="sm" placeholder="Cidade" />
            </div>
          </div>

          <div className="flex flex-col">
            <Label variant="default">Complemento</Label>
            <Input
              variant="default"
              sizeH="sm"
              placeholder="Complemento (opcional)"
            />
          </div>

          <Button
            type="submit"
            variant="default"
            sizeH="sm"
            className="w-full mt-[1.875rem]"
          >
            Salvar alterações
          </Button>
        </fieldset>
      </form>
    </Surface>
  );
}
