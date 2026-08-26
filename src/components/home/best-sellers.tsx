import { getProductsForCurrentUnit } from "@/lib/get-current-unit";
import { ProductSection } from "../product-section";

export const BestSellers = async () => {
  // TODO: Fazer a requisição dos produtos.
  const products = await getProductsForCurrentUnit();

  const bestSellersProducts = products.filter((products) =>
    products.categories.includes("mais-vendidos")
  );

  return (
    <ProductSection
      title="Mais vendidos"
      description="Os favoritos da casa: o que todo mundo pede e ama."
      data={bestSellersProducts}
    />
  );
}