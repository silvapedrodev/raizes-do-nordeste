"use client"

import { useBagStore } from "@/store/bag";
import { BagListItem } from "@/types/bag-list-item";
import { BagProductList } from "@/components/bag/bag-product-list";
import { BagUnitInfo } from "@/components/bag/bag-unit-info";

type Props = {
  initialBagProducts: BagListItem[];
  initialSubtotal: number;
}

export const BagContainer = ({ initialBagProducts, initialSubtotal }: Props) => {
  const bagStore = useBagStore(state => state)

  return (
    <div className="flex flex-col md:flex-row gap-5">
      <div className="flex-1 border border-gray-200 py-6 px-4 md:py-8 md:px-6 rounded-3xl shadow-[1px_1px_8px_rgba(0,0,0,0.10)]">
        <BagUnitInfo />

        <hr className="my-5 md:my-8" />

        <div>
          <h2 className="font-semibold md:text-xl">
            Itens na sacola <span className="text-gray-400 text-sm md:text-base">({bagStore.bag.length} {bagStore.bag.length === 1 ? 'item' : 'itens'})</span>
          </h2>

          <BagProductList initialList={initialBagProducts} />
        </div>
      </div>
      <div className="flex-1 md:max-w-102 border border-gray-200 py-6 px-4 md:py-8 md:px-6 rounded-3xl shadow-[1px_1px_8px_rgba(0,0,0,0.10)]">
        info
      </div>
    </div>
  )
}