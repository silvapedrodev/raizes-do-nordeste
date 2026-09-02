import { History } from "lucide-react";

export const LoyaltyHistoryList = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 md:p-12 text-center border border-dashed border-gray-200 rounded-2xl bg-gray-50/10">

      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary-main/10 text-primary-main">
        <History className="size-8" />
      </div>

      <h3 className="text-lg md:text-xl font-bold text-gray-800">
        Nenhum pedido no histórico ainda
      </h3>

      <p className="max-w-md mt-1 text-sm text-gray-500">
        Você ainda não realizou pedidos que geraram pontos ou resgates. Faça o seu primeiro pedido e comece a acumular recompensas!
      </p>
    </div>
  );
};