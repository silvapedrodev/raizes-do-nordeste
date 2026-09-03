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
  preparationTimeMinutes: number;
};

export type Order = {
  id: string;
  userId: string;
  items: OrderItem[];

  unitId: string;
  fulfillment: FulfillmentType;

  subtotal: number;
  discount: number;
  total: number;

  pickupCode: string | null;
  paymentAttempts: number;

  status: OrderStatus;

  createdAt: string;
};