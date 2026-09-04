"use client";

import { getUserByToken } from "@/lib/auth-mock";
import { validateOrderOwnership } from "@/lib/mock-checkout/validate-order-ownership";
import { useAuthStore } from "@/store/auth";
import { Order } from "@/types/order";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";


type UseValidatedOrderResult = {
  order: Order | null;
  isLoading: boolean;
};

export const useValidatedOrder =
  (
    orderId: string | null,
    isStatusAllowed?: (status: Order["status"]) => boolean
  ): UseValidatedOrderResult => {
    const { hydrated, token } = useAuthStore((state) => state);
    const router = useRouter();
    const [order, setOrder] = useState<Order | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const isStatusAllowedRef = useRef(isStatusAllowed);

    useEffect(() => {
      isStatusAllowedRef.current = isStatusAllowed;
    });

    useEffect(() => {
      if (!hydrated) return;

      const user = getUserByToken(token);

      if (!orderId || !user) {
        router.replace("/");
        return;
      }

      const result = validateOrderOwnership(orderId, user.id);

      if (!result.valid) {
        router.replace("/");
        return;
      }

      if (isStatusAllowedRef.current && !isStatusAllowedRef.current(result.order.status)) {
        router.replace("/");
        return;
      }

      setOrder(result.order);
      setIsLoading(false);
    }, [hydrated, orderId, token, router]);

    return { order, isLoading };
  };