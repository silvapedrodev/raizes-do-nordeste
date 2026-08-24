import { Product } from "@/types/product";
import { ProductList } from "./product-list";

type Props = {
  title: string;
  description: string;
  data: Product[]
}

export const ProductSection = async ({ title, description, data }: Props) => {
  return (
    <div>
      <h2 className="text-center md:text-left text-xl md:text-3xl font-medium">{title}</h2>
      <p className="text-center md:text-left text-gray-500 text-sm md:text-base">
        {description}
      </p>

      <div className="mt-8">
        <ProductList list={data} />
      </div>
    </div>
  );
}