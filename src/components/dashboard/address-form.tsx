import Button from "../ui/button";
import Input from "../ui/input";
import Label from "../ui/label";
import CardAccount from "./card-account";
import HeaderForm from "../../features/(roles)/components/header-form";

export default function AddressForm() {
  return (
    <CardAccount>
      <form>
        <HeaderForm title="Endereço" description="Gerencie seus dados" />
        <fieldset>
          <div className="grid grid-cols-2 space-x-[1.125rem] space-y-[1.5rem]">
            <div className="flex flex-col">
              <Label>Rua</Label>
              <Input variant="default" placeholder="Nome da rua" />
            </div>
            <div className="flex flex-col">
              <Label>Número</Label>
              <Input variant="default" placeholder="Número" />
            </div>
          </div>

          <div className="grid grid-cols-2 space-x-[1.125rem] space-y-[1.5rem]">
            <div className="flex flex-col">
              <Label>Bairro</Label>
              <Input variant="default" placeholder="Bairro" />
            </div>
            <div className="flex flex-col">
              <Label>CEP</Label>
              <Input variant="default" placeholder="00000-000" />
            </div>
          </div>

          <div className="grid grid-cols-2 space-x-[1.125rem] space-y-[1.5rem]">
            <div className="flex flex-col">
              <Label>Estado</Label>
              <Input variant="default" placeholder="Estado" />
            </div>
            <div className="flex flex-col">
              <Label>Cidade</Label>
              <Input variant="default" placeholder="Cidade" />
            </div>
          </div>

          <div className="flex flex-col">
            <Label>Complemento</Label>
            <Input variant="default" placeholder="Complemento (opcional)" />
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
    </CardAccount>
  );
}
