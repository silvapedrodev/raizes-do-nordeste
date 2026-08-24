import { Banners } from "@/components/home/banners";
import { BestSellers } from "@/components/home/best-sellers";
import { CategoryNav } from "@/components/home/category-nav";
import { CookieBanner } from "@/components/home/cookie-banner";
import { DailyProducts } from "@/components/home/daily-products";
import { ProductListSkeleton } from "@/components/home/product-list-skeleton";
import { QuickLinks } from "@/components/home/quick-links";
import { data } from "@/data/banners";
import { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <CookieBanner />
      <Banners list={data.banners} />

      <section>
        <CategoryNav />
        <QuickLinks />
      </section>

      <section className="mt-12 md:mt-20 space-y-6 md:space-y-10">
        <Suspense fallback={<ProductListSkeleton />}>
          <BestSellers />
        </Suspense>
        <Suspense fallback={<ProductListSkeleton />}>
          <DailyProducts />
        </Suspense>
      </section>
    </div>
  );
}
