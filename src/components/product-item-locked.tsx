import { Product } from "@/types/product";
import { Star, Lock } from "lucide-react";
import Image from "next/image";

type Props = {
  data: Product;
}

export const ProductItemLocked = ({ data }: Props) => {
  return (
    <div className="flex gap-2 md:gap-5 border-2 border-gray-200 p-2 md:p-3 rounded-[20px] shadow-[1px_1px_8px_rgba(0,0,0,0.10)] bg-gray-50 opacity-90 cursor-not-allowed">

      <div className="relative">
        <Image
          src={data.images.main}
          alt={data.name}
          width={186}
          height={186}
          className="w-[100px] md:w-32 max-h-full aspect-square object-cover rounded-xl md:rounded-lg grayscale-[50%]"
        />
        <div className="absolute inset-0 bg-black/40 rounded-xl md:rounded-lg flex items-center justify-center">
          <Lock className="text-white w-6 h-6" />
        </div>
      </div>

      <div className="relative flex-1 min-w-0 flex flex-col md:gap-1">
        <div className="flex justify-between">
          <div className="bg-gray-400 px-3 py-1 rounded-full text-xs md:text-sm text-white capitalize font-medium">
            {data.categories[0]}
          </div>

          <div className="flex items-center gap-0.5">
            <Star size={14} className="fill-gray-400 stroke-gray-400 md:size-4" />
            <span className="text-sm font-medium md:text-base text-gray-500">{data.rating.average}</span>
          </div>
        </div>

        <div className="truncate font-semibold md:text-base lg:text-xl text-gray-700">
          {data.name}
        </div>

        <div className="max-w-[60%] truncate text-xs md:text-sm text-gray-400">
          {data.description}
        </div>

        <div className="flex justify-between items-end mt-auto">
          <div className="flex items-center gap-1.5 text-xs md:text-sm font-medium text-primary-main bg-primary-main/10 px-2.5 py-1 rounded-lg border border-primary-main">
            <Lock size={14} />
            <span>Disponível somente: {data.availability.startDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}