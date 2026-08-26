import { BagItem } from "@/types/bag-item";
import { getProductsByUnit } from "@/lib/menu";

export const validateBagForUnit = (bag: BagItem[], unitId: string): BagItem[] => {
  const unitProducts = getProductsByUnit(unitId);
  const validProductIds = new Set(unitProducts.map((p) => p.id));

  return bag.filter((item) => validProductIds.has(item.productId));
};