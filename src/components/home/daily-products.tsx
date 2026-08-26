
import { getProductsForCurrentUnit } from "@/lib/get-current-unit";
import { ProductSection } from "../product-section";

export const DailyProducts = async () => {
  // TODO: Fazer a requisição dos produtos.

  const products = await getProductsForCurrentUnit();

  const dailyProducts = products.filter((products) =>
    products.categories.includes("pratos-do-dia")
  );

  return (
    <ProductSection
      title="Pratos do Dia"
      description="Receitas especiais, novidades e pratos limitados."
      data={dailyProducts}
    />
  );
}