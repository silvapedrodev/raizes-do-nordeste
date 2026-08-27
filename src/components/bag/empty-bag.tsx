import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { AppButton } from "@/components/app-button";

export const EmptyBag = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] px-4 py-12 text-center">
      <div className="flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-primary-main/10 text-primary-main">
        <ShoppingBag size={40} strokeWidth={1.5} />
      </div>

      <h2 className="text-xl font-semibold text-foreground mb-2">
        Sua sacola está vazia
      </h2>

      <p className="text-sm text-muted-foreground max-w-xs mb-8">
        Parece que você ainda não adicionou nenhum item à sua sacola.
      </p>

      <Link href="/" className="w-full max-w-xs">
        <AppButton className="w-full">
          Ver cardápio
        </AppButton>
      </Link>
    </div>
  );
};