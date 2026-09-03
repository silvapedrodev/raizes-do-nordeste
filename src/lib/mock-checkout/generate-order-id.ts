import { getOrders } from "@/lib/mock-checkout/order-mock";

export const generateOrderId = (): string => {
  const existingIds = new Set(getOrders().map((order) => order.id));

  let id: string;
  do {
    const randomNumber = Math.floor(10000 + Math.random() * 90000);
    id = `#${randomNumber}`;
  } while (existingIds.has(id));

  return id;
};