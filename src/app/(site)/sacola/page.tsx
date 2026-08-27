import { getBagState } from "@/actions/get-bag-state";
import { getProductsFromList } from "@/actions/get-product-from-list";
import { BagContainer } from "@/components/bag/bag-container";
import { EmptyBag } from "@/components/bag/empty-bag";
import { BagListItem } from "@/types/bag-list-item";

export default async function BagPage() {
  const { bag: initialBag } = await getBagState();

  if (initialBag.length === 0) {
    return <EmptyBag />
  }

  const bagProducts: BagListItem[] = []
  let subtotal: number = 0

  const ids = initialBag.map(item => item.productId)
  const products = await getProductsFromList(ids);

  for (const bagItem of initialBag) {
    const prodIndex = products.findIndex(i => i.id === bagItem.productId);
    if (prodIndex > -1) {
      bagProducts.push({
        product: products[prodIndex],
        quantity: bagItem.quantity
      });

      subtotal += products[prodIndex].price * bagItem.quantity
    }
  }

  return (
    <BagContainer
      initialBagProducts={bagProducts}
      initialSubtotal={subtotal}
    />
  )
}