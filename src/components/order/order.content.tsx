"use client"

import { useUserOrders } from "@/hooks/use-user-orders";
import { OrderItem } from "@/components/order/order-item";
import { OrderItemSkeleton } from "@/components/order/order-item-skeleton";
import { EmptyOrders } from "@/components/order/empty-orders";

export const OrderContent = () => {
  const { orders, isLoading } = useUserOrders()

  return (
    <div>
      <div>
        <h1 className="font-medium text-2xl lg:text-3xl ">Meus pedidos</h1>
        <p className="text-sm text-gray-500 mt-1">
          Acompanhe o histórico e o status dos seus pedidos.
        </p>
      </div>

      <div className="py-9 space-y-3 lg:space-y-4">
        {isLoading ? (
          <>
            <OrderItemSkeleton />
            <OrderItemSkeleton />
            <OrderItemSkeleton />
          </>
        ) : orders.length === 0 ? (
          <EmptyOrders />
        ) : (
          orders.map((item) => (
            <OrderItem key={item.id} order={item} />
          ))
        )}
      </div>
    </div>
  );
}