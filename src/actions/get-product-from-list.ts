"use server"

import { getProductsForCurrentUnit } from "@/lib/get-current-unit";

export const getProductsFromList = async (ids: string[]) => {
  // TODO: Substituir por chamada(API) quando estiver pronta

  // Mock atual
  const allUnitProducts = await getProductsForCurrentUnit();
  return allUnitProducts.filter(product => ids.includes(product.id));
}