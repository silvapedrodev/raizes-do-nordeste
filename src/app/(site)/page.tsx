import { Banners } from "@/components/home/banners";
import { CategoryNav } from "@/components/home/category-nav";
import { QuickLinks } from "@/components/home/quick-links";
import { data } from "@/data/banners";

export default function Page() {
  return (
   <div>
      <Banners list={data.banners}/>

      <section>
        <CategoryNav />
        <QuickLinks />
      </section>
   </div>
  );
}
