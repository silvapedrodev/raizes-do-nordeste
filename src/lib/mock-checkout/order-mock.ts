import { Order, OrderStatus } from "@/types/order";

const ORDERS_KEY = "mock_orders";

export const getOrders = (): Order[] => {
  if (typeof window === "undefined") return [];

  const raw = localStorage.getItem(ORDERS_KEY);
  
  if (!raw) return [];
  try {
    return JSON.parse(raw) as Order[];
  } catch {
    return [];
  }
};

export const saveOrders = (orders: Order[]) => {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
};

export const addOrder = (order: Order) => {
  const orders = getOrders();
  saveOrders([...orders, order]);
};

export const getOrderById = (orderId: string): Order | null => {
  const orders = getOrders();
  return orders.find((order) => order.id === orderId) ?? null;
};

export const getOrdersByUserId = (userId: string): Order[] => {
  const orders = getOrders();
  return orders.filter((order) => order.userId === userId);
};

export const updateOrderStatus = (
  orderId: string,
  status: OrderStatus
): Order | null => {
  const orders = getOrders();
  const index = orders.findIndex((order) => order.id === orderId);
  if (index === -1) return null;

  const updatedOrder = { ...orders[index], status };
  orders[index] = updatedOrder;
  saveOrders(orders);

  return updatedOrder;
};