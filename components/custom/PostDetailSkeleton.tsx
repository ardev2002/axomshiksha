import { Skeleton } from "@/components/ui/skeleton";

export function PostDetailSkeleton() {
  return (
    <article className="mx-auto space-y-4">
      {/* Title skeleton */}
      <Skeleton className="h-9 w-3/4 md:h-10" />
      
      {/* Meta info skeleton */}
      <div className="flex flex-wrap items-center gap-4">
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-6 w-20 rounded-md" />
      </div>
      
      {/* Image skeleton */}
      <div className="relative aspect-21/9 w-full rounded-lg overflow-hidden">
        <Skeleton className="absolute inset-0" />
      </div>
      
      {/* Description skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-5/6" />
      </div>
      
      {/* Content skeleton */}
      <div className="space-y-3">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-4/5" />
        <Skeleton className="h-6 w-5/6" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-2/3" />
      </div>
      
      {/* Additional content blocks */}
      <div className="space-y-3">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-4/5" />
        <Skeleton className="h-6 w-5/6" />
      </div>
    </article>
  );
}