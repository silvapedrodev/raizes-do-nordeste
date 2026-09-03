"use client"

import { clearBagCookie } from "@/actions/clear-bag-cookie";
import { AppButton } from "@/components/app-button";
import { getProductsByUnit } from "@/lib/menu";
import { finishPurchase } from "@/lib/mock-checkout/finish-purchase";
import { useAuthStore } from "@/store/auth";
import { useBagStore } from "@/store/bag";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const FinishPurchaseButton = () => {
  const { token, hydrated } = useAuthStore(state => state);
  const bagStore = useBagStore(state => state)
  const router = useRouter();

  // TODO: substituir por chamada real ao action/finishBag quando o gateway existir
  const handleFinishButton = async () => {
    if (!token || !bagStore.unit?.id) return;

    const products = getProductsByUnit(bagStore.unit.id);

    const result = await finishPurchase({
      token,
      unitId: bagStore.unit.id,
      bagData: bagStore,
      products,
    });


    await clearBagCookie();
    bagStore.clearBag()

    if (!result.success) {
      router.push(`/checkout/erro`);
      return;
    }

    if (result.order.status === "confirmed") {
      router.push(`/checkout/sucesso?orderId=${encodeURIComponent(result.order.id)}`);
    } else {
      router.push(`/checkout/erro?orderId=${encodeURIComponent(result.order.id)}`);
    }
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