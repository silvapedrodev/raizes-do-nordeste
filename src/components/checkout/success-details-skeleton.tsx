import { Skeleton } from "@/components/ui/skeleton";

export const SuccessDetailsSkeleton = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center text-center">
        <Skeleton className="h-28 w-28 rounded-full mb-4" />
        <Skeleton className="h-4 w-32 mb-3" />
        <Skeleton className="h-8 w-72 mb-2" />
        <Skeleton className="h-4 w-80 max-w-full" />
      </div>

      <div className="mx-auto max-w-md flex flex-col justify-center items-center p-6 border border-gray-200 rounded-xl mt-8 shadow-[1px_1px_8px_rgba(0,0,0,0.05)]">
        <Skeleton className="h-4 w-36 mb-4" />
        <Skeleton className="h-12 w-40 mb-4" />
        <Skeleton className="h-3 w-64" />
      </div>

      <div className="md:max-w-fit mx-auto mt-12 flex flex-col gap-11 md:gap-4">
        <div className="flex flex-col divide-y md:flex-row md:divide-y-0 md:divide-x divide-gray-200 border border-gray-200 rounded-xl px-4 py-3 md:px-2 md:py-4 shadow-[1px_1px_8px_rgba(0,0,0,0.05)]">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center gap-3 py-4 md:py-0 md:px-4">
              <Skeleton className="h-12 w-12 rounded-xl shrink-0" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-4 w-28" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <Skeleton className="h-11 w-full rounded-xl" />
          <Skeleton className="h-11 w-full rounded-xl" />
        </div>
      </div>
    </div>
  );
};