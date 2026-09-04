"use client"

import { ErrorDetails } from "@/components/checkout/error-details";
import { useValidatedOrder } from "@/hooks/use-validated-order";
import { useSearchParams } from "next/navigation";
import { ErrorDetailsSkeleton } from "@/components/checkout/error-details-skeleton";
import { useCallback } from "react";
import { Order } from "@/types/order";

export const ErrorPage = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") ?? "";

  const isStatusAllowed = useCallback(
    (status: Order["status"]) => status === "awaiting_payment",
    []
  );

  const { order, isLoading } = useValidatedOrder(orderId, isStatusAllowed);

  if (isLoading) return <ErrorDetailsSkeleton />;
  if (!order) return null;

  return (
    <div className="">
      <ErrorDetails orderId={order.id} />
    </div>
  );
};