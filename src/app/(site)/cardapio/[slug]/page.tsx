
import { ProductCatalog } from "@/components/product-catalog";
import { products } from "@/data/product";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const categoryTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div>
      <div className="text-gray-500 text-sm mb-4">
        <Link href={'/'} className="hover:underline">Início</Link> &gt; <span>{categoryTitle}</span>
      </div>
      <ProductCatalog categorySlug={slug} data={products} />
    </div>
  );
}