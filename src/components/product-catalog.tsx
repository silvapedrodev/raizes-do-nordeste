"use client"

import { UseQuerystring } from "@/hooks/use-querystring";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductItem } from "@/components/product-item";
import { Product } from "@/types/product";

type Props = {
  categorySlug: string;
  data: Product[]
  initialProducts?: Product[];
  isSearch?: boolean;
};

const items = [
  { label: "Popularidade", value: "views" },
  { label: "Preço", value: "selling" },
  { label: "A-Z", value: "alphabetical" },
]

type AllowedOrder = typeof items[number]["value"];
const ALLOWED_ORDERS: AllowedOrder[] = ["views", "selling", "alphabetical"];

export const ProductCatalog = ({ categorySlug, data, initialProducts, isSearch }: Props) => {
  const queryString = UseQuerystring();

  const rawOrder = queryString.get('order');

  const order: AllowedOrder = ALLOWED_ORDERS.includes(rawOrder as AllowedOrder)
    ? (rawOrder as AllowedOrder)
    : 'views'

  const handleSelectChanged = (value: string | null) => {
    if (!value) return;
    if (ALLOWED_ORDERS.includes(value as AllowedOrder)) {
      queryString.set('order', value);
    }
  }

  // TODO: Substituir a filtragem e ordenação mockada local por uma chamada de API ou query no banco de dados passando categorySlug e order.

  const baseProducts = initialProducts || data.filter(item => {
    const matchCategory = item.categories.includes(categorySlug);
    const matchTag = item.tags?.includes(categorySlug);
    return matchCategory || matchTag;
  });

  const sortedProducts = [...baseProducts].sort((productA, productB) => {
    if (order === "selling") {
      return productA.price - productB.price;
    }
    if (order === "alphabetical") {
      return productA.name.localeCompare(productB.name);
    }

    return productB.rating.count - productA.rating.count;
  });

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="text-2xl md:text-3xl">
          <strong>{sortedProducts.length} </strong>
          {sortedProducts.length !== 1 ? 'Produtos' : 'Produto'}
        </div>
        <div className="mt-4 md:mt-0 ml-auto md:ml-0">
          <Select
            items={items}
            value={order}
            onValueChange={handleSelectChanged}
          >
            <SelectTrigger className="w-[160px] bg-gray-100">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {items.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {sortedProducts.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {sortedProducts.map(item => (
            <ProductItem key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <div className="mt-12 text-center text-gray-500 py-12 bg-gray-50 rounded-xl border border-dashed border-gray-200">
          Nenhum produto encontrado.
        </div>
      )}
    </div >
  );
}