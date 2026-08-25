import { Skeleton } from "@/components/ui/skeleton";

export const RelatedProductsSkeleton = () => {
  return (
    <div>
      <Skeleton className="bg-gray-200 h-7 w-52 rounded-2xl mb-2 mx-0" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mt-6 md:mt-10">
        <Skeleton className="bg-gray-200 h-36 md:h-52 w-full rounded-2xl mx-auto md:mx-0" />
        <Skeleton className="bg-gray-200 h-36 md:h-52 w-full rounded-2xl mx-auto md:mx-0" />
        <Skeleton className="bg-gray-200 h-36 md:h-52 w-full rounded-2xl mx-auto md:mx-0" />
        <Skeleton className="bg-gray-200 h-36 md:h-52 w-full rounded-2xl mx-auto md:mx-0" />
      </div>
    </div>
  );
}