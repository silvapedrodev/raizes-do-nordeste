import { Skeleton } from "@/components/ui/skeleton";

export function ProfileSkeleton() {
  return (
    <div className="lg:hidden">
      <Skeleton className="h-6 w-28 mb-2" />

      <div className="border border-gray-200 p-4 rounded-xl flex items-center gap-4">
        <Skeleton className="size-20 rounded-full shrink-0" />

        <div className="space-y-2">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-4 w-28" />
        </div>
      </div>

      <div className="mt-4 p-4 rounded-xl border border-gray-200 space-y-3">
        <Skeleton className="h-5 w-28" />
        <Skeleton className="h-9 w-full" />
        <Skeleton className="h-9 w-full" />
        <Skeleton className="h-9 w-full" />
      </div>

      <Skeleton className="h-10 w-full mt-8" />
    </div>
  );
}
