"use client"

import { Product } from "@/types/product";
import { formatPrice } from "@/utils/format-price";
import { Plus, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProductItemLocked } from "@/components/product-item-locked";
import { useBagActions } from "@/hooks/use-bag-actions";

type Props = {
  data: Product;
}

export const ProductItem = ({ data }: Props) => {
  const { addToBag } = useBagActions()

  if (data.status === "inactive") {
    return <ProductItemLocked data={data} />;
  }

  const link = `/produto/${data.slug}`

  return (
    <div
      className="flex gap-2 md:gap-5 border-2 border-gray-200 p-2 md:p-3 rounded-[20px] hover:bg-primary-main/10 shadow-[1px_1px_8px_rgba(0,0,0,0.10)]"
    >
      <Link href={link}>
        <Image
          src={data.images.main}
          alt={data.name}
          width={186}
          height={186}
          className="w-[100px] md:w-32 max-h-full aspect-square object-cover rounded-xl md:rounded-lg"
        />
      </Link>
      <div className="relative flex-1 min-w-0 flex flex-col md:gap-1">
        <Link
          href={link}
          className="absolute inset-0 z-0"
          aria-label={data.name}
        />

        <div className="flex justify-between">
          <div className="bg-primary-main px-3 py-1 rounded-full text-xs md:text-sm text-white capitalize font-medium">{data.categories[0]}</div>

          <div className="flex items-center gap-0.5">
            <Star
              size={14}
              className="fill-secondary-main stroke-secondary-main md:size-4"
            />
            <span className="text-sm font-medium md:text-base">{data.rating.average}</span>
          </div>
        </div>

        <div className="truncate font-semibold md:text-base lg:text-xl">{data.name}</div>

        <div className="max-w-[60%] truncate text-xs md:text-sm text-gray-500">
          {data.description}
        </div>

        <div className="flex justify-between items-end mt-auto">
          <div className="font-bold text-primary-main text-xl lg:text-2xl">
            R$ {formatPrice(data.price)}
          </div>

          <button
            className="relative z-10 flex items-center gap-0.5 bg-primary-main p-2 text-white text-xs md:text-sm rounded-xl font-medium hover:bg-primary-main/80"
            onClick={() => addToBag(data.id)}
          >
            <Plus size={16} />
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}