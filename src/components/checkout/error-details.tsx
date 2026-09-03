
import Link from "next/link";
import { AppButton } from "@/components/app-button";
import { BanknoteX, CircleX, ReceiptText } from "lucide-react";

type Props = {
  orderId: string;
}

export const ErrorDetails = ({ orderId }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center text-center">
        <CircleX size={112} className="mb-4 stroke-white fill-red-600" />
        <h1 className="font-bold text-2xl">
          Não foi possível finalizar seu pedido
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Ocorre um problema ao processar seu pagamento. Seu pedido não foi concluído
        </p>
      </div>

      <div className="my-6">
        <div className="flex items-center gap-2 py-4 md:py-0 md:px-4">
          <div className="p-2.5 border border-gray-200 rounded-xl">
            <BanknoteX size={28} className="stroke-primary-main" />
          </div>
          <div className="text-sm min-w-0">
            <p className="font-semibold">Você não foi cobrado.</p>
            <p className="text-sm text-gray-500 wrap-break-word">
              Nenhum valor foi debitado do seu meio de pagamento.
            </p>
          </div>
        </div>
      </div>

      <p className="text-center text-gray-500 text-xs">
        Você pode tentar novamente mais tarde a partir da tela de pedidos
      </p>

      <div className="mt-8 w-full max-w-sm">
        <Link href={"/pedidos"}>
          <AppButton>
            <ReceiptText />
            Ir para pedidos
          </AppButton>
        </Link>
      </div>
    </div>
  );
};