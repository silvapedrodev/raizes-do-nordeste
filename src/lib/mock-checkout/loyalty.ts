import { Coupon } from "@/types/bag-item";
import { User } from "@/types/user";

const MAX_LOYALTY_POINTS = 1000;

export const isLoyaltyMember = (user: User): boolean => {
  return user.loyalty !== null;
};

export const calculateLoyaltyPoints = (
  orderTotal: number,
  currentPoints: number
): number => {
  if (currentPoints >= MAX_LOYALTY_POINTS) return 0;

  const earnedPoints = Math.floor(orderTotal);
  return earnedPoints;
};

export const invalidateCoupon = (coupons: Coupon[], couponCode: string): Coupon[] => {
  return coupons.map((coupon) =>
    coupon.code === couponCode
      ? { ...coupon, expirationDate: new Date() }
      : coupon
  );
};