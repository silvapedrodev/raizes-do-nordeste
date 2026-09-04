"use client"

import { SuccessDetails } from "@/components/checkout/success-details";
import { useValidatedOrder } from "@/hooks/use-validated-order";
import { useSearchParams } from "next/navigation";
import { SuccessDetailsSkeleton } from "@/components/checkout/success-details-skeleton";
import { useCallback } from "react";
import { Order } from "@/types/order";

export const SuccessPage = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") ?? "";

  const isStatusAllowed = useCallback(
    (status: Order["status"]) => status === "confirmed",
    []
  );

  const { order, isLoading } = useValidatedOrder(orderId, isStatusAllowed);

  if (isLoading) return <SuccessDetailsSkeleton />;
  if (!order) return null;

  return (
    <div>
      <SuccessDetails order={order} />
    </div>
  );
};