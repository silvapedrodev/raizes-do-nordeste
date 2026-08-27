"use client"

import { useBagStore } from "@/store/bag";
import { BagListItem } from "@/types/bag-list-item";
import { BagProductList } from "@/components/bag/bag-product-list";
import { BagUnitInfo } from "@/components/bag/bag-unit-info";
import { ChevronRight, Ticket } from "lucide-react";
import { formatPrice } from "@/utils/format-price";
import { FinishPurchase } from "@/components/bag/finish-purchase";

type Props = {
  initialBagProducts: BagListItem[];
  initialSubtotal: number;
}

export const BagContainer = ({ initialBagProducts, initialSubtotal }: Props) => {
  const { bag, couponDiscount, couponCode } = useBagStore(state => state)

  const total = Math.max(0, initialSubtotal - (couponDiscount ?? 0));

  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <div className="flex-1 border border-gray-200 py-6 px-4 md:py-8 md:px-6 rounded-3xl shadow-[1px_1px_8px_rgba(0,0,0,0.10)]">
        <BagUnitInfo />

        <hr className="my-5 md:my-8" />

        <div>
          <h2 className="font-semibold md:text-xl">
            Itens na sacola <span className="text-gray-400 text-sm md:text-base">({bag.length} {bag.length === 1 ? 'item' : 'itens'})</span>
          </h2>

          <BagProductList initialList={initialBagProducts} />
        </div>
      </div>
      <div className="flex-1">
        <div className="border border-gray-200 py-6 px-4 md:py-8 md:px-6 rounded-3xl shadow-[1px_1px_8px_rgba(0,0,0,0.10)]">
          <button className="flex w-full items-center justify-between gap-2 border border-gray-200 rounded-lg p-4 hover:bg-gray-100 text-start cursor-pointer">
            <div className="flex gap-2 items-center">
              <div>
                <Ticket size={32} className="stroke-primary-main md:size-10" />
              </div>
              <div className="leading-4">
                <p className="font-medium text-[12px] md:text-base">Adicionar cupom de desconto</p>
                <p className="text-gray-500 text-[12px] md:text-sm">Digite um código ou consulte vantagens</p>
              </div>
            </div>
            <div>
              <ChevronRight size={28} className="stroke-primary-main" />
            </div>
          </button>
          <div className="mt-6 md:mt-8">
            <h2 className="font-bold text-lg md:text-2xl">Resumo do pedido</h2>

            <div className="mt-6 space-y-2 font-medium">
              <div className="flex justify-between">
                <p className="text-base">Subtotal</p>
                <p className="text-sm font-semibold">R$ {formatPrice(initialSubtotal)}</p>
              </div>

              {couponCode && couponDiscount !== null &&
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">
                    Cupom de desconto
                    <span className="text-xs text-gray-400 font-medium">({couponCode})</span>
                  </span>
                  <span className="text-green-600 font-semibold">
                    - R$ {formatPrice(couponDiscount)}
                  </span>
                </div>
              }

            </div>
          </div>
          <div>
            <hr className="my-6 md:my-8" />
            <div className="flex justify-between">
              <p className="text-xl md:text-2xl font-bold">Total</p>
              <p className="text-2xl md:text-3xl font-bold text-black">R$ {formatPrice(total)}</p>
            </div>
          </div>

          <FinishPurchase />
        </div>
      </div>
    </div>
  )
}