import { memo } from "react";
import { Skeleton } from "../ui/skeleton";

export const LoadingFallback = memo(() => (
  <div className="space-y-4">
    <Skeleton className="h-8 w-full" />
    <Skeleton className="h-8 w-3/4" />
    <Skeleton className="h-8 w-1/2" />
  </div>
));