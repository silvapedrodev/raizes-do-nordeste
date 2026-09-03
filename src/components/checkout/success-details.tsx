"use client"

import Link from "next/link";
import { AppButton } from "@/components/app-button";
import { CircleCheck, Clock, Copy, PaperBag, Store } from "lucide-react";
import { StatusCard } from "@/components/checkout/status-card";
import { toast } from "@/components/ui/toast";


interface Props {
  orderId: string;
}

export const SuccessDetails = ({ orderId }: Props) => {
  
  const pickupCode = "A14P";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(pickupCode)
    toast.add({
      type: "success",
      description: `O código de retirada ${pickupCode} foi copiado.`
    })
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center">
        <CircleCheck size={112} className="mb-4 stroke-white fill-green-600" />
        <h1 className="font-bold text-2xl">Pedido realizado com sucesso!</h1>
        <p className="mt-1 text-sm text-gray-500">
          Seu pedido já foi recebido e está sendo preparado com muito carinho.
        </p>
      </div>

      <div className="mx-auto max-w-md flex justify-center items-center p-4 md:p-6 border rounded-xl mt-8 shadow-[1px_1px_8px_rgba(0,0,0,0.10)]">
        <div className="flex flex-col gap-4 justify-center items-center">
          <p className="text-gray-500 font-bold">Código de retirada</p>
          <div className="flex gap-2">
            <p className="text-primary-main font-bold text-5xl">
              {pickupCode}
            </p>
            <button
              type="button"
              aria-label="Copiar código para a área de transferência"
              onClick={handleCopy}
              className="self-start rounded p-1 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            >
              <Copy size={18} className="stroke-gray-500" />
            </button>
          </div>
          <p className="text-gray-500 text-center text-xs">Apresente este código no balcão para retirar seu pedido.</p>
        </div>
      </div>

      <div className=" md:max-w-fit mx-auto mt-12 flex flex-col gap-11 md:gap-4">
        <div className="flex flex-col divide-y md:flex-row md:divide-y-0 md:divide-x divide-gray-200 border border-gray-200 rounded-xl px-4 py-2 md:px-2 md:py-4 shadow-[1px_1px_8px_rgba(0,0,0,0.10)]">
          <StatusCard
            icon={PaperBag}
            title="Forma de recebimento"
            label={"Retirar no balcão"}
          />
          <StatusCard
            icon={Clock}
            title="Tempo de preparo"
            label={"20-30 min "}
          />
          <StatusCard
            icon={Store}
            title="Unidade"
            label={"Jardim Paulista"}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Link href={"/pedidos"}>
            <AppButton>Acompanhar pedido</AppButton>
          </Link>
          <Link href={"/"}>
            <AppButton variant="outline">Voltar ao início</AppButton>
          </Link>
        </div>
      </div>
    </div>
  );
};