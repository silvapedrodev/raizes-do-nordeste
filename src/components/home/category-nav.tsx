import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    label: "Café da manhã",
    href: "cafe-da-manha",
    img: '/assets/ui/cafe-da-manha.svg'
  },
  {
    label: "Almoço",
    href: "almoco",
    img: '/assets/ui/arrumadinho.svg'
  },
  {
    label: "Sobremesas",
    href: "sobremesa",
    img: '/assets/ui/bolo-de-rolo.svg'
  },
  {
    label: "Bebidas",
    href: "bebida",
    img: '/assets/ui/bebida.svg'
  },
];

export const CategoryNav = () => {
  return (
    <div className="w-full mt-6 md:mt-10">
      <div className="max-w-[460px] mx-auto flex justify-between items-center">
        {categories.map((item, index) => (
          <Link
            href={`/cardapio/${item.href}`}
            key={index}
            className="flex flex-col gap-2 items-center group"
          >
            <div className="bg-gray-200 py-4 px-2 flex items-center justify-center rounded-3xl w-20 h-20 md:w-24 md:h-24 hover:bg-gray-400/50">
              <Image
                src={item.img}
                alt={item.label}
                width={50}
                height={50}
                className="h-full w-auto object-contain"
              />
            </div>

            <span className="font-medium text-[14px]">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}