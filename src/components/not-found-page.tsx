"use client"

import Link from "next/link";
import { AppButton } from "./app-button";
import { Home } from "lucide-react";
import Image from "next/image";


export const NotFoundPage = () => {
  return (
    <div
      className="bg-orange-50/60 flex flex-col items-center justify-center min-h-screen text-center px-4"
    >
      <div className="-mt-20 flex items-center justify-center gap-3 mb-6 select-none">
        <span className="font-extrabold text-9xl text-primary-main tracking-tighter">
          4
        </span>
        <div className="flex items-center justify-center">
          <Image
            src={"/assets/ui/food.svg"}
            alt="a"
            width={128}
            height={128}
          />
        </div>
        <span className="font-extrabold text-9xl text-primary-main tracking-tighter">
          4
        </span>
      </div>

      <h1 className="font-semibold text-3xl lg:text-5xl text-gray-900">
        OPS! Página não encontrada
      </h1>

      <p className="text-sm text-gray-500 mt-2 max-w-xl mb-8 leading-relaxed">
        Parece que você pegou uma estrada sem saída ou o prato que procurava saiu do cardápio. Mas não se preocupe, a gente te leva de volta. ❤️
      </p>

      <div className="max-w-xs w-full">
        <Link href="/">
          <AppButton className="gap-2">
            <Home size={18} />
            Voltar ao início
          </AppButton>
        </Link>
      </div>
    </div>
  );
}