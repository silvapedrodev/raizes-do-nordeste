"use server"

import { getServerBag, setServerBag } from "@/lib/server-cookies";

export const removeCouponAction = async () => {
  try {
    const currentBagState = await getServerBag();

    const updatedState = {
      ...currentBagState,
      couponCode: null,
      couponDiscount: null,
      couponMinValue: null,
    }

    await setServerBag(updatedState);
    return { success: true };
  } catch (error) {
    console.error("Erro ao remover cupom do cookie:", error);
    return { success: false };
  }
}