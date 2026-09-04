import { ShoppingBag } from "lucide-react";
import { AppButton } from "@/components/app-button";
import Link from "next/link";

export const EmptyOrders = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4 border rounded-xl border-dashed">
      <div className="p-4 bg-primary-main/10 rounded-full mb-4">
        <ShoppingBag size={40} className="stroke-primary-main" />
      </div>
      <h2 className="font-semibold text-lg">Você ainda não tem nenhum pedido</h2>
      <p className="text-sm text-gray-500 mt-1 max-w-sm mb-6">
        Quando você fizer um pedido, ele aparecerá aqui para você acompanhar o status.
      </p>
      <Link href="/">
        <AppButton>
          Ver cardápio
        </AppButton>
      </Link>
    </div>
  );
};