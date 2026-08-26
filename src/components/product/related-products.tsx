import { ProductList } from "@/components/product-list";
import { getProductsForCurrentUnit } from "@/lib/get-current-unit";

type Props = {
  id: string
}

export const RelatedProducts = async ({ id }: Props) => {
  // TODO: Remover mock e buscar dados via API

  const products = await getProductsForCurrentUnit();
  const currentProduct = products.find((item) => item.id === id);
  if (!currentProduct) return null;

  const related = products.filter(
    (item) =>
      item.id !== currentProduct.id &&
      item.categories.some((cat) => currentProduct.categories.includes(cat))
  );

  const limitedRelated = related.slice(0, 6);
  if (limitedRelated.length === 0) return null;

  return (
    <div>
      <h3 className="text-xl md:text-2xl font-medium">Você também vai gostar</h3>

      <div className="mt-6">
        <ProductList list={limitedRelated} />
      </div>
    </div>
  );
}