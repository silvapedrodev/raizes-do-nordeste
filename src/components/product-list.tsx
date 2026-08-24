import { Product } from "@/types/product";
import { ProductItem } from "./product-item";

type Props = {
  list: Product[];
}

export const ProductList = ({ list }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
      {list.map(item => (
        <ProductItem key={item.id} data={item} />
      ))}
    </div>
  );
}