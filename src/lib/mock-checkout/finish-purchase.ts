import { BagStateData } from "@/types/bag-item";
import { Order, OrderStatus } from "@/types/order";
import { Product } from "@/types/product";
import { buildOrderItems, calculateOrderTotals } from "@/lib/mock-checkout/build-order-items";
import { generateOrderId } from "@/lib/mock-checkout/generate-order-id";
import { calculateLoyaltyPoints, isLoyaltyMember } from "@/lib/mock-checkout/loyalty";
import { generatePickupCode } from "@/lib/mock-checkout/generate-pickup-code";
import { mockPaymentGateway } from "@/lib/mock-checkout/mock-payment-gateway";
import { addOrder } from "@/lib/mock-checkout/order-mock";
import { applyLoyaltyChanges, getUserByToken } from "@/lib/auth-mock";

type FinishPurchaseParams = {
  token: string;
  unitId: string;
  bagData: BagStateData;
  products: Product[];
};

type FinishPurchaseResult =
  | { success: true; order: Order; paymentSucceeded: boolean }
  | { success: false; error: string };

export const finishPurchase = async ({
  token,
  unitId,
  bagData,
  products,
}: FinishPurchaseParams): Promise<FinishPurchaseResult> => {
  const user = getUserByToken(token);

  if (!user) return {
    success: false,
    error: "Usuário não encontrado."
  };

  if (!bagData.fulfillment) return {
    success: false,
    error: "Modo de retirada não selecionado."
  };

  const items = buildOrderItems(bagData.bag, products);
  const { subtotal, discount, total } = calculateOrderTotals(items, bagData.couponDiscount);

  const paymentSucceeded = await mockPaymentGateway();
  const status: OrderStatus = paymentSucceeded ? "confirmed" : "awaiting_payment";
  const pickupCode = paymentSucceeded ? generatePickupCode() : null;

  const order: Order = {
    id: generateOrderId(),
    userId: user.id,
    items,
    unitId,
    fulfillment: bagData.fulfillment,
    subtotal,
    discount,
    total,
    pickupCode,
    paymentAttempts: 1,
    status,
    createdAt: new Date().toISOString(),
  };

  addOrder(order);

  if (paymentSucceeded && isLoyaltyMember(user)) {
    const pointsToAdd = calculateLoyaltyPoints(total, user.loyalty!.points);

    applyLoyaltyChanges(token, {
      pointsToAdd: pointsToAdd > 0 ? pointsToAdd : undefined,
      couponCodeToInvalidate: bagData.couponCode ?? undefined,
    });
  }

  return { success: true, order, paymentSucceeded };
};