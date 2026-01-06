import CardAccount from "@/components/dashboard/card-account";
import HeaderCard from "../../../shared/ui/header-form";
import Label from "@/components/ui/label";
import Button from "@/components/ui/button";

export default function AccountInfoForm() {
  return (
    <CardAccount>
      <form>
        <HeaderCard
          title="Informações da conta"
          description="Gerencie suas credenciais de acesso"
        />

        <fieldset className="space-y-[1rem]">
          {/* Email */}
          <div>
            <Label htmlFor="email">E-mail</Label>
            <div className="flex items-end gap-2">
              <Input
                placeholder="email@exemplo.com"
                variant="disabled"
                className="w-full"
              />
              <Button
                type="button"
                variant="outline"
                sizeH="sm"
                className="w-[10rem] flex items-center"
              >
                Alterar e-mail
              </Button>
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <Label variant="default">Telefone</Label>
            <Input variant="default" placeholder="+55 (00) 00000-0000" />
          </div>

          <div>
            <Label>Senha</Label>
            <div className="flex items-end gap-2">
              <Input
                placeholder="email@exemplo.com"
                variant="disabled"
                className="w-full"
              />
              <Button
                type="button"
                variant="outline"
                sizeH="sm"
                className="w-[10rem] flex items-center"
              >
                Alterar senha
              </Button>
            </div>
          </div>
        </fieldset>
      </form>
    </CardAccount>
  );
}
