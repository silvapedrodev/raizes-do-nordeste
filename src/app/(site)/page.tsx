import { Banners } from "@/components/home/banners";
import { data } from "@/data/banners";

export default function Page() {
  return (
   <div>
    <Banners list={data.banners}/>
   </div>
  );
}
