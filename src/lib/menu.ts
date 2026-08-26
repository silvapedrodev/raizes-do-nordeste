import { menus } from "@/data/menus";
import { products } from "@/data/product";
import { Product } from "@/types/product";

export const getProductsByUnit = (unitId: string): Product[] => {
  const menu = menus.find((menu) => menu.unitId === unitId);
  if (!menu) return [];

  return menu.items
    .map((menuItem) => {
      const product = products.find((p) => p.id === menuItem.productId);
      if (!product) return null;

      return {
        ...product,
        price: menuItem.price,
      };
    })
    .filter((item): item is Product => item !== null);
};