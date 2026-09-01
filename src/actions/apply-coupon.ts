"use server"

import { MOCK_COUPONS } from "@/data/coupon";
import { getServerBag, setServerBag } from "@/lib/server-cookies";
import z from "zod";
import { getProductsFromList } from "./get-product-from-list";

export const applyCouponAction = async (code: string) => {
  const schema = z.object({
    code: z.string().min(1, 'Digite o código')
  })

  const cleanCode = code?.trim().toUpperCase();
  const parsed = schema.safeParse({ code: cleanCode });

  if (!parsed.success) {
    return { success: false, message: parsed.error.issues[0].message }
  }

  // Buscar o cupom (mock ou banco real)
  const foundCoupon = MOCK_COUPONS.find(
    coupon => coupon.code === cleanCode
  )

  if (!foundCoupon) {
    return { success: false, message: "Cupom não encontrado." };
  }

  const isExpired = new Date() > new Date(foundCoupon.expirationDate);
  if (isExpired) {
    return { success: false, message: "Cupom expirado." };
  }

  try {
    const currentBagState = await getServerBag()

    if (currentBagState.bag.length === 0) {
      return {
        success: false,
        message: "Sua sacola está vazia."
      }
    }

    const ids = currentBagState.bag.map(
      item => item.productId
    )

    const products = await getProductsFromList(ids)

    let currentSubtotal = 0

    for (const bagItem of currentBagState.bag) {
      const product = products.find(
        product => product.id === bagItem.productId
      )

      if (product) {
        currentSubtotal +=
          product.price * bagItem.quantity
      }
    }

    if (
      foundCoupon.minValue &&
      currentSubtotal < foundCoupon.minValue
    ) {
      return {
        success: false,
        message: `Este cupom exige um valor mínimo de R$ ${foundCoupon.minValue.toFixed(2)}.`
      }
    }

    const updatedState = {
      ...currentBagState,
      couponCode: foundCoupon.code,
      couponDiscount: foundCoupon.discountValue,
    }

    await setServerBag(updatedState)

    return {
      success: true,
      message: "Cupom aplicado com sucesso!",
      couponCode: foundCoupon.code,
      minValue: foundCoupon.minValue ?? 0,
      discountValue: foundCoupon.discountValue
    }

  } catch (err) {
    console.error("Erro ao aplicar cupom:", err)

    return {
      success: false,
      message: "Erro interno ao aplicar o cupom."
    }
  }
}