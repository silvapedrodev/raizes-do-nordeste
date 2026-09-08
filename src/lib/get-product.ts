import { cache } from "react";
import { getProductsForCurrentUnit } from "@/lib/get-current-unit";
import { formatSlug } from "@/utils/normalize-text";

export const getProductBySlug = cache(async (slug: string) => {
  const products = await getProductsForCurrentUnit();
  return products.find((item) => formatSlug(item.slug) === formatSlug(slug));
});