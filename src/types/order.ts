import { FulfillmentType } from "@/types/unit";

export type OrderStatus =
  | "awaiting_payment"
  | "confirmed"
  | "preparing"
  | "ready"
  | "completed"
  | "cancelled";

export type OrderItem = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  subtotal: number;
};

export type Order = {
  id: string;
  items: OrderItem[];

  unitId: string;
  fulfillment: FulfillmentType;

  subtotal: number;
  discount: number;
  total: number;

  status: OrderStatus;

  createdAt: string;
};