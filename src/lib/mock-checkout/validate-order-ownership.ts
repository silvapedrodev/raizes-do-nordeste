import { Order } from "@/types/order";
import { getOrderById } from "@/lib/mock-checkout/order-mock";

export type OrderValidationResult =
  | { valid: true; order: Order }
  | { valid: false; reason: "not_found" | "forbidden" };

export const validateOrderOwnership = (
  orderId: string,
  userId: string
): OrderValidationResult => {
  const order = getOrderById(orderId);

  if (!order) {
    return { valid: false, reason: "not_found" };
  }

  if (order.userId !== userId) {
    return { valid: false, reason: "forbidden" };
  }

  return { valid: true, order };
};