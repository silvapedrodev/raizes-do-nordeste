import { Skeleton } from "@/components/ui/skeleton";

export const ErrorDetailsSkeleton = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center text-center">
        <Skeleton className="w-28 h-28 rounded-full mb-4" />
        <Skeleton className="h-8 w-72 mb-2" />
        <Skeleton className="h-4 w-96 max-w-full" />
      </div>

      <div className="my-6 w-full max-w-md">
        <div className="flex items-center gap-2 py-4 md:py-0 md:px-4">
          <Skeleton className="w-12 h-12 rounded-xl shrink-0" />
          <div className="space-y-2 flex-1 min-w-0">
            <Skeleton className="h-4 w-36" />
            <Skeleton className="h-3 w-full" />
          </div>
        </div>
      </div>

      <Skeleton className="h-3 w-72 mb-8" />

      <div className="mt-8 w-full max-w-sm">
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
    </div>
  );
};