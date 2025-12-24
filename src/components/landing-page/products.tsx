import Image from "next/image";

// Components
import SectionHeader from "./section-header";

const productsDetails = [
  {
    imageUrl: "/images/digital-card.svg",
    info: "O clássico premium",
    title: "Cartão Digital",
    description: "Cartão físico com NFC + QR Code integrado",
  },
  {
    imageUrl: "/images/tag-renc.svg",
    info: "Leve e versártil",
    title: "Tag Renc",
    description: "Tag NFC circular que você pode colar no seu celular",
  },
];

export default function Products() {
  return (
    <section className="py-[3.75rem] bg-black px-[1.25rem]">
      <SectionHeader
        title="Os produtos"
        description="Escolha o formato ideal para o seu estilo"
        texStyle="white"
      />

      <ul className="flex flex-wrap  justify-center w-full gap-[7.8125rem] mt-[2.5rem]">
        {productsDetails.map(
          ({ imageUrl, info, title, description }, index) => (
            <li
              key={index}
              className="flex flex-col items-center gap-[2.5rem] p-6 font-manrope rounded-[1.25rem] bg-white border border-[#7A7A7A]"
            >
              <div className="relative w-full h-48">
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className="object-cover rounded-[1.25rem]"
                />
              </div>
              <div className="flex flex-col gap-[1rem]">
                <span className="font-medium text-[.875rem] text-[#7A7A7A]">
                  {info}
                </span>
                <h3 className="font-urbanist font-semibold text-[1.5rem]">
                  {title}
                </h3>
                <p className="text-[#7A7A7A] max-w-[18.75rem] w-full">
                  {description}
                </p>
              </div>
            </li>
          )
        )}
      </ul>
    </section>
  );
}
