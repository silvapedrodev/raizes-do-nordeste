import { SuccessDetailsSkeleton } from "@/components/checkout/success-details-skeleton";
import { SuccessPage } from "@/components/checkout/success-page";
import { Suspense } from "react";

export default async function CheckoutSuccessPage() {
  return (
    <Suspense fallback={<SuccessDetailsSkeleton />}>
      <SuccessPage />
    </Suspense>
  );
}