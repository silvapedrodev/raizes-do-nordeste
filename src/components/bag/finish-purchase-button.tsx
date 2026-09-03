"use client"

import { clearBagCookie } from "@/actions/clear-bag-cookie";
import { finishBag } from "@/actions/finish-bag";
import { AppButton } from "@/components/app-button";
import { useAuthStore } from "@/store/auth";
import { useBagStore } from "@/store/bag";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const FinishPurchaseButton = () => {
  const { token, hydrated } = useAuthStore(state => state);
  const bagStore = useBagStore(state => state)

  const router = useRouter();

  const handleFinishButton = async () => {
    if (!token || !bagStore.unit?.id) return;

    const mockOrderId = "123456";
    const simulateSuccess = false;

    // TODO: substituir por chamada real ao action/finishBag quando o gateway existir
    await clearBagCookie();
    bagStore.clearBag()

    if (simulateSuccess) {
      router.push(`/checkout/sucesso?orderId=${mockOrderId}`);
    } else {
      router.push(`/checkout/erro?orderId=${mockOrderId}`);
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