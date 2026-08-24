
import { products } from "@/data/product";
import { ProductSection } from "../product-section";

export const DailyProducts = () => {
  // TODO: Fazer a requisição dos produtos.

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