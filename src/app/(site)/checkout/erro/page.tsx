import { ErrorDetailsSkeleton } from "@/components/checkout/error-details-skeleton";
import { ErrorPage } from "@/components/checkout/error-page";
import { Suspense } from "react";

export default async function CheckoutErrorPage() {
  return (
    <Suspense fallback={<ErrorDetailsSkeleton />}>
      <ErrorPage />
    </Suspense>
  );
}