import { BagListItem } from "@/types/bag-list-item";
import { BagProductItem } from "@/components/bag/bag-product-item";

type Props = {
  initialList: BagListItem[];
}

export const BagProductList = ({ initialList }: Props) => {
  return (
    <div className="flex flex-col gap-5 md:gap-6 mt-4 md:mt-6">
      {initialList.map(item => (
        <BagProductItem
          key={item.product.id}
          item={item}
        />
      ))}
    </div>
  );
}