// Components
import PageHeader from "../../../../shared/ui/page-header";
import PixKeyForm from "./components/pix-key-form";

export default function PixSection() {
  return (
    <section>
      <PageHeader
        title="Dados de Pagamento"
        description="Configure sua chave PIX para receber suas comissões"
      />
      <PixKeyForm />
    </section>
  );
}
