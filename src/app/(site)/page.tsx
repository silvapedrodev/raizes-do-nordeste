import { Banners } from "@/components/home/banners";
import { CategoryNav } from "@/components/home/category-nav";
import { ProductListSkeleton } from "@/components/home/product-list-skeleton";
import { QuickLinks } from "@/components/home/quick-links";
import { data } from "@/data/banners";
import { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <Banners list={data.banners} />

      <section>
        <CategoryNav />
        <QuickLinks />
      </section>

      <section>
        <Suspense fallback={<ProductListSkeleton />}>
          {/* Mais Vendidos */}
        </Suspense>
        <Suspense fallback={<ProductListSkeleton />}>
          {/* Prato do Dia */}
        </Suspense>
      </section>
    </div>
  );
}
