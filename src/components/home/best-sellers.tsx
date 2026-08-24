import { products } from "@/data/product";
import { ProductSection } from "../product-section";

export const BestSellers = () => {
  // TODO: Fazer a requisição dos produtos.

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