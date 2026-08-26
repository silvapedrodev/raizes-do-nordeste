"use client"

import { Product } from "@/types/product";
import { Clock, Flame, PaperBag, Star, Utensils } from "lucide-react";
import { ProductTags } from "@/components/product/product-tag";
import { formatPrice } from "@/utils/format-price";
import { AppButton } from "@/components/app-button";
import { useBagStore } from "@/store/bag";
import { useBagActions } from "@/hooks/use-bag-actions";

type Props = {
  product: Product;
}

type StatItemProps = {
  icon: React.ReactNode
  title: string;
  value: string;
}

export const ProductDetails = ({ product }: Props) => {
  const bagStore = useBagStore(state => state)

  const { addToBag } = useBagActions();

  return (
    <div className="flex flex-col space-y-1.5 md:space-x-2">
      <span className="w-fit px-3 py-1 bg-primary-main text-white text-sm font-medium capitalize rounded-full">{product.categories[0]}</span>

      <h2 className="font-bold text-2xl md:text-3xl">{product.name}</h2>
      <p className="text-sm text-gray-500">{product.description}</p>

      <div className="flex gap-3 items-center">
        <div className="flex-1  flex gap-1.5 items-center">
          <div className="flex gap-1 items-center">
            <Star
              size={18}
              className="fill-secondary-main stroke-secondary-main"
            />
            <p className="font-medium">{product.rating.average}</p>
          </div>

          <p className="text-sm text-gray-500">
            ({product.rating.count.toLocaleString('pt-BR')}) {product.rating.count == 1
              ? 'avaliação'
              : 'avaliações'
            }
          </p>
        </div>
      </div>
      <ProductTags tags={product.tags} />

      <hr className="bg-gray-200 my-4" />

      <div>
        <h3 className="font-bold text-sm">Informações (aprox .)</h3>
        <div className="flex gap-4 mt-2">
          <StatItem
            icon={<Flame size={32} className="stroke-secondary-main" />}
            title="Calorias"
            value={`${product.nutrition?.calories} kcal`}
          />

          <StatItem
            icon={<Utensils size={32} className="stroke-primary-main" />}
            title="Proteínas"
            value={`${product.nutrition?.protein} g`}
          />

          <StatItem
            icon={<Clock size={32} className="stroke-secondary-main" />}
            title="Tempo de preparo"
            value={`${product.preparationTimeMinutes} min`}
          />
        </div>
      </div>

      <div>
        <hr className="bg-gray-200 my-4" />
        <p className="text-gray-500">Preço</p>
        <span className="font-bold text-primary-main text-4xl">R$ {formatPrice(product.price)}</span>
        <div className="flex mt-6 gap-2">
          <div className="flex-1">
            <AppButton
              icon={PaperBag}
              onClick={() => addToBag(product.id)}
            >Adicionar a sacola</AppButton>
          </div>
          <div className="flex justify-between items-center border border-gray-200 rounded-full w-32 px-1 py-1 m">
            <span className="flex items-center justify-center bg-gray-200 hover:bg-white w-8 h-8 rounded-full font-bold text-gray-700 cursor-pointer select-none">
              -
            </span>

            <span className="font-semibold text-gray-800">
              1
            </span>

            <span className="flex items-center justify-center bg-gray-200 hover:bg-white w-8 h-8 rounded-full font-bold text-gray-700 cursor-pointer select-none">
              +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const StatItem = ({ icon, title, value }: StatItemProps) => {
  return (
    <div className="flex items-center gap-2">
      <div>
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-500">{title}</p>
        <p className="text-sm font-semibold text-black">{value}</p>
      </div>
    </div>
  );
}