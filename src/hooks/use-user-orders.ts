"use client";

import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/auth";
import { Order } from "@/types/order";
import { getOrdersByUserId } from "@/lib/mock-checkout/order-mock";
import { getUserByToken } from "@/lib/auth-mock";

const ONE_HOUR = 60 * 60 * 1000;

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

    const userOrders = getOrdersByUserId(user.id);

    const now = Date.now();

    const updatedOrders = userOrders.map((order) => {
      const createdAt = new Date(order.createdAt).getTime();
      const isExpired = now - createdAt >= ONE_HOUR;

      if (
        order.status === "awaiting_payment" &&
        isExpired
      ) {
        return {
          ...order,
          status: "cancelled" as const,
        };
      }

      return order;
    });

    updatedOrders.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime()
    );

    setOrders(updatedOrders);
    setIsLoading(false);
  }, [hydrated, token]);

  return { orders, isLoading };
};