import { ImageSlider } from "@/components/product/image-slider";
import { ProductDetails } from "@/components/product/product-details";
import { RelatedProductsSkeleton } from "@/components/product/related-product-skeleton";
import { RelatedProducts } from "@/components/product/related-products";
import { getProductsByUnit } from "@/lib/menu";
import { formatSlug } from "@/utils/normalize-text";
import { redirect } from "next/navigation";
import { Suspense } from "react";

type Props = {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: Props) {
  // TODO: Fazer consulta do produto pelo slug
  const { slug } = await params

  const selectedUnitId = "unit-001";
  const products = getProductsByUnit(selectedUnitId);

  const product = products.find((item) => formatSlug(item.slug) === formatSlug(slug))

  if (!product || product.status === "inactive") {
    redirect('/')
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <div className="-mt-6 -mx-6 md:mx-0 md:mt-6">
          <ImageSlider images={product.images} />
        </div>
        <div className="mt-3 md:mt-6">
          <ProductDetails product={product} />
        </div>
      </div>

      <div className="mt-10">
        <Suspense fallback={<RelatedProductsSkeleton />}>
          <RelatedProducts id={product.id} />
        </Suspense>
      </div>
    </div>

  );
}