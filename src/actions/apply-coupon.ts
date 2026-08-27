"use server"

import { MOCK_COUPONS } from "@/data/coupon";
import { getServerBag, setServerBag } from "@/lib/server-cookies";
import z from "zod";

export const applyCouponAction = async (code: string, currentSubtotal: number) => {
  const schema = z.object({
    code: z.string().min(1, 'Digite o código')
  })

  const cleanCode = code?.trim().toUpperCase();
  const parsed = schema.safeParse({ code: cleanCode });

  if (!parsed.success) {
    return { success: false, message: parsed.error.issues[0].message }
  }

  // Buscar o cupom (mock ou banco real)
  const foundCoupon = MOCK_COUPONS.find(c => c.code === cleanCode);

  if (!foundCoupon) {
    return { success: false, message: "Cupom não encontrado." };
  }

  const isExpired = new Date() > new Date(foundCoupon.expirationDate);
  if (isExpired) {
    return { success: false, message: "Cupom expirado." };
  }

  if (foundCoupon.minValue && currentSubtotal < foundCoupon.minValue) {
    return {
      success: false,
      message: `Este cupom exige um valor mínimo de R$ ${foundCoupon.minValue.toFixed(2)}.`
    };
  }

  try {
    const currentBagState = await getServerBag();

    const updatedState = {
      ...currentBagState,
      couponCode: foundCoupon.code,
      couponDiscount: foundCoupon.discountValue,
    };
    await setServerBag(updatedState);

    return {
      success: true,
      message: "Cupom aplicado com sucesso!",
      couponCode: foundCoupon.code,
      discountValue: foundCoupon.discountValue
    }
  } catch (err) {
    return { success: false, message: "Erro interno ao aplicar o cupom." }
  }
}