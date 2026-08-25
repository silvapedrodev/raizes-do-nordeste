"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

type Images = {
  main: string
  gallery: string[]
}

type Props = {
  images: Images
}

export const ImageSlider = ({ images }: Props) => {
  const [api, setApi] = useState<CarouselApi>()
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)

  const allImages = [images.main, ...images.gallery]

  useEffect(() => {
    if (!api) return

    api.on("select", () => {
      setSelectedImageIndex(api.selectedScrollSnap())
    })
  }, [api])

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index)
    api?.scrollTo(index)
  }

  return (
    <div className="w-full lg:w-lg md:min-w-96 md:rounded-xl">
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
      >
        <CarouselContent>
          {allImages.map((image, index) => (
            <CarouselItem key={image}>
              <div className="relative w-full h-72 lg:h-112">
                <Image
                  src={image}
                  alt={`Imagem ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 390px, 768px"
                  className="object-cover object-center md:rounded-xl"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {allImages.length > 1 &&
        <div className="flex gap-2 mx-6 md:mx-auto mt-3">
          {allImages.map((image, index) => (
            <button
              key={image}
              onClick={() => handleThumbnailClick(index)}
              className={`relative w-20 h-20 overflow-hidden cursor-pointer border-2 rounded-xl border-primary-main
              ${selectedImageIndex === index ? "border-primary-main opacity-100" : "border-transparent opacity-70"}
            `}
            >
              <Image
                src={image}
                alt={`Miniatura ${index + 1}`}
                fill
                sizes="64px"
                className="object-cover rounded-xl"
              />
            </button>
          ))}
        </div>
      }
    </div>
  );
}