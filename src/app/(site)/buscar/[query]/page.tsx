import { ProductCatalog } from "@/components/product-catalog";
import { HeaderSearch } from "@/components/layout/header-search";
import { redirect } from "next/navigation";
import { getProductsForCurrentUnit } from "@/lib/get-current-unit";

type Props = {
  params: Promise<{ query: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function BuscaSlugPage({ params }: Props) {
  // TODO: fazer busca dos produtos

  const { query } = await params;

  const decodedQuery = decodeURIComponent(query).toLowerCase();

  const products = await getProductsForCurrentUnit();

  const searchResults = products.filter(item => {
    const matchName = item.name.toLowerCase().includes(decodedQuery);
    const matchDescription = item.description.toLowerCase().includes(decodedQuery);

    const matchCategory = item.categories.some(cat => cat.toLowerCase().includes(decodedQuery));
    const matchTag = item.tags?.some(tag => tag.toLowerCase().includes(decodedQuery));

    return matchName || matchDescription || matchCategory || matchTag;
  });

  if (decodedQuery.length > 50) {
    redirect('/')
  }

  return (
    <div className="flex-1 flex flex-col max-w-7xl mx-auto px-4 py-6 w-full">
      <div className="mb-4 md:hidden">
        <HeaderSearch />
      </div>

      <div>
        <p className="capitalize mb-3">
          Buscar por <span className="font-bold">&quot;{decodedQuery}&quot;</span>
        </p>
      </div>

      <div>
        <ProductCatalog
          data={products}
          categorySlug={query}
          initialProducts={searchResults}
        />
      </div>
    </div>
  );
}