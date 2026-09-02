"use server";

import { getUserByToken } from "@/lib/auth-mock";
import { getServerAuthToken } from "@/lib/server-cookies";

export const ApplyRewardCoupon = async (
  code: string
): Promise<boolean> => {
  const token = await getServerAuthToken();

  if (!token) {
    return false;
  }

  const user = getUserByToken(token)

  console.log("user:", user)

  if (!user?.loyalty?.coupons) {
    return false;
  }

  const cleanCode = code.trim().toUpperCase();

  return user.loyalty.coupons.some(
    coupon => coupon.code.trim().toUpperCase() === cleanCode
  );
};
