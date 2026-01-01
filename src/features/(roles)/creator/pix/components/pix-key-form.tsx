// Components
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import HeaderCard from "@/features/(roles)/components/header-form";
import Surface from "@/features/(roles)/components/surface";

export default function PixKeyForm() {
  return (
    <Surface className="mt-[2.5625rem]">
      <form>
        <HeaderCard
          title="Chave pix"
          description="Informe sua chave PIX para receber os pagamentos."
        />

        <fieldset className="space-y-6">
          <legend className="sr-only">Cadastrar pix</legend>

          <div>
            <Label htmlFor="">Tipo de chave PIX</Label>
            <Input
              id="email"
              type="email"
              variant="default"
              sizeH="sm"
              required
              placeholder="Digite seu e-mail"
            />
          </div>

          <div>
            <Label htmlFor="">Chave PIX</Label>
            <Input
              id="email"
              type="email"
              variant="default"
              sizeH="sm"
              required
              placeholder="Digite sua chave pix ou cole"
            />
          </div>

          <div>
            <Label htmlFor="">Nome do titular</Label>
            <Input
              id="email"
              type="email"
              variant="default"
              sizeH="sm"
              required
              placeholder="Digite o nome do titular da chave pix"
            />
          </div>

          <Button variant="default" sizeH="sm" className="w-full">
            Salvar dados
          </Button>
        </fieldset>
      </form>
    </Surface>
  );
}
