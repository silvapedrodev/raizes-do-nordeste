"use client"

import { Banner } from "@/types/banner";
import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";

type Props = {
  list: Banner[]
}

export const Banners = ({ list }: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const delay = 6000 //6s

  const [autoplay] = useState(() =>
    Autoplay({ delay: delay, stopOnInteraction: false })
  );

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const handleSelect = (index: number) => {
    api?.scrollTo(index);
    autoplay.reset()
  };

  return (
    <div>
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        plugins={[autoplay]}
      >
        <CarouselContent>
          {list.map((banner) => (
            <CarouselItem key={banner.id}>
              <Link href={banner.link}>
                <Image
                  src={banner.img}
                  alt={banner.alt}
                  width={1280}
                  height={408}
                  className="w-full h-auto rounded-2xl"
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex gap-2 mt-3 w-full max-w-3xs mx-auto bg-gray-200 rounded-full">
        {list.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            aria-label={`Ir para o banner ${index + 1}`}
            className={`flex-1 h-1.5 rounded-full transition-colors 
        ${current === index
                ? "bg-primary-main"
                : "bg-transparent hover:bg-black/20"
              }`
            }
          />
        ))}
      </div>
    </div>
  );
}