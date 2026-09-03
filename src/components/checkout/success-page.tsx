"use client"

import { SuccessDetails } from "@/components/checkout/success-details";
import { useValidatedOrder } from "@/hooks/use-validated-order";
import { useSearchParams } from "next/navigation";
import { SuccessDetailsSkeleton } from "@/components/checkout/success-details-skeleton";

export const SuccessPage = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") ?? "";

  const { order, isLoading } = useValidatedOrder(orderId);

  if (isLoading) return <SuccessDetailsSkeleton />;

  if (!order) return null;

  return (
    <div className="">
      <SuccessDetails order={order} />
    </div>
  );
};