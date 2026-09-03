"use client";

import { getUserByToken } from "@/lib/auth-mock";
import { validateOrderOwnership } from "@/lib/mock-checkout/validate-order-ownership";
import { useAuthStore } from "@/store/auth";
import { Order } from "@/types/order";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


type UseValidatedOrderResult = {
  order: Order | null;
  isLoading: boolean;
};

export const useValidatedOrder = (orderId: string | null): UseValidatedOrderResult => {
  const { hydrated, token } = useAuthStore((state) => state);
  const router = useRouter();
  const [order, setOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOrder(result.order);
    setIsLoading(false);
  }, [hydrated, orderId, token, router]);

  return { order, isLoading };
};