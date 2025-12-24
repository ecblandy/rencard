// Icons
import { ImStatsDots } from "react-icons/im";
import { TbClick } from "react-icons/tb";
import { CiCreditCard1, CiVideoOn } from "react-icons/ci";
import { FaWpforms } from "react-icons/fa";
import { AiOutlinePicture } from "react-icons/ai";
import { MdAdsClick } from "react-icons/md";
import { IoQrCode } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";

// Components
import SectionHeader from "./section-header";

const advancedResourcesDetails = [
  {
    icon: ImStatsDots,
    title: "Métricas completas",
    description: "Acompanhe todos os acessos ao seu perfil",
  },
  {
    icon: TbClick,
    title: "Cliques em links",
    description: "Saiba quais links performam melhor",
  },
  {
    icon: CiCreditCard1,
    title: "vCard automático",
    description: "Salve seu contato em um toque",
  },
  {
    icon: FaWpforms,
    title: "Formulário de leads",
    description: "Capture contatos interessados",
  },
  {
    icon: AiOutlinePicture,
    title: "Galeria de fotos",
    description: "Mostre seu trabalho visualmente",
  },
  {
    icon: CiVideoOn,
    title: "Videos",
    description: "Apresente seus serviços em vídeo",
  },
  {
    icon: MdAdsClick,
    title: "CTA personalizável",
    description: "Botão de ação personalizado",
  },
  {
    icon: IoQrCode,
    title: "QR Code",
    description: "QR Code exclusivo do seu perfil",
  },
  {
    icon: IoIosLink,
    title: "URL personalizada",
    description: "Seu link exclusivo rencard.io/você",
  },
] as const;

export default function AdvancedResources() {
  return (
    <section className="px-[1.25rem] py-[3.75rem] bg-[#C2C2C2]">
      <SectionHeader
        title="Recursos avançados"
        description="Tudo que você precisa para se destacar"
      />

      <ul className="flex flex-wrap justify-center gap-[2.5rem] mt-[2.5rem]">
        {advancedResourcesDetails.map(({ title, description, icon: Icon }) => (
          <li
            key={title}
            className="max-w-[14.1875rem] w-full rounded-[1.25rem] py-[1rem] px-6 bg-white shadow-[0_1px_3px_1px_#00000026,_0_1px_2px_0px_#0000004D]"
          >
            <Icon size={30} className="text-[#454545]" />
            <h3 className="mt-[1rem] mb-[.5rem] font-urbanist text-[1.25rem] whitespace-nowrap font-semibold">
              {title}
            </h3>
            <p className="font-manrope font-semibold text-[#939393]">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
