import { Skeleton } from "@/components/ui/skeleton";

export const OrderItemSkeleton = () => {
  return (
    <div className="max-w-3xl p-3 border rounded-xl shadow-[1px_1px_8px_rgba(0,0,0,0.10)]">
      <div className="flex justify-between items-center">
        <Skeleton className="h-6 w-28 rounded-full" />
        <Skeleton className="h-3 w-24" />
      </div>

      <div className="flex items-center justify-between lg:grid lg:gap-10 lg:grid-cols-[1fr_auto_auto]">
        <div className="flex items-center gap-2 lg:gap-3 mt-4">
          <Skeleton className="size-20 rounded-md shrink-0" />

          <div className="space-y-1.5">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-4 w-48" />
          </div>
        </div>

        <div className="hidden lg:block lg:w-40">
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        <div className="flex items-center justify-center">
          <Skeleton className="size-7 rounded-md" />
        </div>
      </div>
    </div>
  );
};