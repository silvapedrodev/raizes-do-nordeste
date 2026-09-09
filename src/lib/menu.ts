import { menus } from "@/data/menus";
import { products } from "@/data/product";
import { Product } from "@/types/product";

export const getProductsByUnit = (unitId: string): Product[] => {
  const menu = menus.find((menu) => menu.unitId === unitId);
  if (!menu) return [];

  const mappedProducts: (Product | null)[] = menu.items.map((menuItem) => {
    const product = products.find((p) => p.id === menuItem.productId);
    if (!product) return null;

    const combinedCategories = Array.from(
      new Set([...product.categories, ...(menuItem.categories ?? [])])
    );

    const combinedTags = Array.from(
      new Set([
        ...(product.tags ?? []),
        ...(menuItem.tags ?? []),
      ])
    );

    return {
      ...product,
      price: menuItem.price ?? product.price,
      categories: combinedCategories,
      tags: combinedTags,
    };
  });

  return mappedProducts.filter((item): item is Product => item !== null);
};