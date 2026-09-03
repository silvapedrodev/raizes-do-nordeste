import { BagItem } from "@/types/bag-item";
import { OrderItem } from "@/types/order";
import { Product } from "@/types/product";

export const buildOrderItems = (
  bagItems: BagItem[],
  products: Product[]
): OrderItem[] => {
  return bagItems.map((bagItem) => {
    const product = products.find((p) => p.id === bagItem.productId);

    if (!product) {
      throw new Error(`Produto ${bagItem.productId} não encontrado.`);
    }

    return {
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: bagItem.quantity,
      subtotal: product.price * bagItem.quantity,
      preparationTimeMinutes: product.preparationTimeMinutes ?? 0
    };
  });
};

export const calculateOrderTotals = (
  items: OrderItem[],
  couponDiscount: number | null
) => {
  const subtotal = items.reduce((acc, item) => acc + item.subtotal, 0);
  const discount = couponDiscount ?? 0;
  const total = Math.max(subtotal - discount, 0);

  return { subtotal, discount, total };
};