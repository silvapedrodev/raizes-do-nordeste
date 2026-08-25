import { products } from "@/data/product";
import { ProductList } from "@/components/product-list";

type Props = {
  id: string
}

export const RelatedProducts = ({ id }: Props) => {
  // TODO: Remover mock e buscar dados via API

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