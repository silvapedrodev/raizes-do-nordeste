"use client";

import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/auth";
import { Order } from "@/types/order";
import { getOrdersByUserId } from "@/lib/mock-checkout/order-mock";
import { getUserByToken } from "@/lib/auth-mock";

export const useUserOrders = (): { orders: Order[]; isLoading: boolean } => {
  const { hydrated, token } = useAuthStore((state) => state);
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!hydrated) return;

    const user = getUserByToken(token);
    if (!user) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsLoading(false);
      return;
    }

    const userOrders = getOrdersByUserId(user.id)
      .sort((a, b) => new Date(b.createdAt)
        .getTime() - new Date(a.createdAt)
          .getTime());

    setOrders(userOrders);
    setIsLoading(false);
  }, [hydrated, token]);

  return { orders, isLoading };
};