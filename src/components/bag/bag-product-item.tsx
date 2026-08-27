import { BagListItem } from "@/types/bag-list-item";
import { formatPrice } from "@/utils/format-price";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { QuantitySelector } from "@/components/quantity-selector";
import { useBagStore } from "@/store/bag";
import { setBagState } from "@/actions/set-bag-state";
import Link from "next/link";

type Props = {
  item: BagListItem;
}

export const BagProductItem = ({ item }: Props) => {
  const bagStore = useBagStore(state => state);

  const updateCookie = async () => {
    const updatedBag = useBagStore.getState().bag
    await setBagState(updatedBag)
  }

  const handleRemove = async () => {
    bagStore.removeItem(item.product.id)
    await updateCookie()
  }

  return (
    <div className="flex gap-2 items-center md:gap-4">
      <div className="shrink-0">
        <Link href={`/produto/${item.product.slug}`}>
          <Image
            src={item.product.images.main}
            alt={item.product.name}
            width={96}
            height={96}
            className="w-20 md:w-24 max-h-full aspect-square object-cover rounded-xl"
          />
        </Link>
      </div>

      <div className="self-stretch flex-1 flex flex-col md:flex-row md:justify-between">
        <div className="min-w-0">
          <div className="font-bold text-sm md:text-lg">{item.product.name}</div>
          <p className="hidden md:block text-sm text-gray-500 mt-1 wrap-break-word mr-4">
            {item.product.description}
          </p>
        </div>

        <div className="shrink-0 mt-2 md:mt-0 md:self-center">
          <QuantitySelector
            productId={item.product.id}
            quantity={item.quantity}
          />
        </div>

      </div>
      <div className="w-24 md:w-40 flex flex-col md:flex-row md:justify-around md:items-center">
        <div className="self-end md:self-center text-lg md:text-xl font-semibold text-primary-main">
          R$ {formatPrice(item.product.price)}
        </div>

        <div className="self-end md:self-center">
          <button
            aria-label="Remover item da sacola"
            className="size-9 md:size-10 flex justify-center items-center border border-gray-200 rounded-full mt-1 md:mt-0 hover:bg-gray-100"
            onClick={handleRemove}
          >
            <Trash2 size={20} className="md:size-6 stroke-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
}