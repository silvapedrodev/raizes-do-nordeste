import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    label: "Combos",
    href: "combo",
    img: '/assets/ui/combos.png'
  },
  {
    label: "Bolos",
    href: "bolo",
    img: '/assets/ui/bolos.png'
  },
  {
    label: "Café",
    href: "cafe",
    img: '/assets/ui/cafe.png'
  },
  {
    label: "Tapiocas",
    href: "tapioca",
    img: '/assets/ui/tapiocas.png'
  },
];

export const QuickLinks = () => {
  return (
    <div className="w-full mt-7 md:mt-14">
      <div className="max-w-4xl grid grid-cols-2 gap-3 md:flex md:justify-between items-center mx-auto">
        {categories.map((item, index) => {
          const isRed = index === 0 || index === 3;

          return (
            <Link
              href={`/cardapio/${item.href}`}
              key={index}
              className="w-full md:flex-1"
            >
              <div
                className={`py-4 px-2 w-full h-full min-h-[96px] md:min-h-[140px] flex flex-col items-center gap-2 justify-center rounded-3xl transition-transform group-hover:scale-105 
                  ${isRed
                    ? "bg-primary-main"
                    : "bg-secondary-main"
                  }`}
              >
                <span className="font-bold text-white text-lg md:text-xl text-center">{item.label}</span>

                <div className="relative w-30 h-20 md:w-25 md:h-20 flex items-center justify-center">
                  <Image
                    src={item.img}
                    alt={`Menu rápido ${item.label}`}
                    fill
                    sizes="(max-width: 768px) 120px"
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}