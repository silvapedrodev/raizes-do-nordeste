"use client"

import { clearBagCookie } from "@/actions/clear-bag-cookie";
import { finishBag } from "@/actions/finish-bag";
import { AppButton } from "@/components/app-button";
import { useAuthStore } from "@/store/auth";
import { useBagStore } from "@/store/bag";
import Link from "next/link";
import { redirect } from "next/navigation";

export const FinishPurchaseButton = () => {
  const { token, hydrated } = useAuthStore(state => state);
  const bagStore = useBagStore(state => state)

  const handleFinishButton = async () => {
    if (!token || !bagStore.unit?.id) return;

    const result = await finishBag(token, {
      bag: bagStore.bag,
      unitId: bagStore.unit.id,
      fulfillment: bagStore.fulfillment,
    }
    )

    if (typeof result === "object" && result.error) {
      alert(result.error);
      return;
    }

    const paymentUrl = result as string;

    await clearBagCookie();
    bagStore.clearBag()
    redirect(paymentUrl)
  }

  if (!hydrated) return null;

  if (!token) return (
    <Link href={"/entrar"}>
      <AppButton>Entrar e Finalizar</AppButton>
    </Link>
  )

  return (
    <div>
      <AppButton onClick={handleFinishButton}>
        Finalizar Compra
      </AppButton>
    </div>
  );
}