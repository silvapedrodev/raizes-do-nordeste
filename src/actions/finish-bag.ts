"use server"

import { BagItem } from "@/types/bag-item"
import { FulfillmentType } from "@/types/unit";

export type FinishOrderPayload = {
  bag: BagItem[];
  fulfillment: FulfillmentType | null;
  unitId: string | null;
  couponCode?: string | null;
}

export const finishBag = async (token: string, payload: FinishOrderPayload) => {
  // TODO: requisição para finalizar compra e gerar url de pagamento (getway externo)

  try {
    if (!token) {
      return { error: "Não autorizado." };
    }

    const paymentUrl = "https://checkout.gateway.com/pay/xyz123";
    return paymentUrl;

  } catch (error) {
    return { error: "Ocorreu um erro ao processar o pagamento. Tente novamente." };
  }
}