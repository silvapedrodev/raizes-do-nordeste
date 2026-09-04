"use client"

import { applyCouponAction } from "@/actions/apply-coupon"
import { AppButton } from "@/components/app-button"
import { AppInput } from "@/components/app-input"
import { validateRewardCouponUsage } from "@/lib/loyalty-service"
import { useAuthStore } from "@/store/auth"
import { useBagStore } from "@/store/bag"
import { Star, Tag, Ticket } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"


export const LoyaltyJoinModal = () => {
  const token = useAuthStore((state) => state.token)
  const router = useRouter()

  const [couponInput, setCouponInput] = useState("")
  const [isApplying, setIsApplying] = useState(false)
  const [couponError, setCouponError] = useState("")

  const setCoupon = useBagStore(state => state.setCoupon)

  const handleApplyCoupon = async () => {
    const code = couponInput.trim().toUpperCase();

    if (!code) {
      setCouponError("Digite o código do cupom");
      return;
    }

    const validation = validateRewardCouponUsage(token, code);
    if (!validation.valid) {
      setCouponError(validation.message!);
      return;
    }

    setIsApplying(true);
    setCouponError("");

    try {
      const result = await applyCouponAction(code);

      if (!result.success) {
        setCouponError(result.message)
        return
      }

      setCoupon(
        result.couponCode ?? null,
        result.discountValue ?? null,
        result.minValue ?? null
      )

      router.back()
    } catch (error) {
      console.error(error)
      setCouponError("Erro ao aplicar o cupom.")
    } finally {
      setIsApplying(false)
    }
  }

  return (
    <div className="mx-auto mt-6 text-center md:mt-0 md:max-w-4xl">

      <div className="flex flex-col items-center md:grid md:grid-cols-[auto_1px_auto] md:items-center md:justify-center md:gap-10">

        <div>
          <Image
            src="/assets/ui/desconto.svg"
            alt="desconto"
            width={208}
            height={280}
            className="w-20 md:w-52"
          />
        </div>

        <div className="hidden h-96 w-pxbg-gray-200 md:block" />

        <div className="md:max-w-md">
          <h1 className="mt-8 text-xl font-semibold md:mt-0 md:text-start md:text-2xl">
            Você ainda não participa <br />
            do Programa de Fidelidade
          </h1>

          <p className="mt-2 text-sm text-gray-500 md:text-start">
            Participe e desbloqueie cupons exclusivos, descontos especiais e
            muito mais vantagens!
          </p>

          <div className="mt-6 mb-8 flex h-36 items-center justify-around rounded-xl border border-gray-200 px-6 py-5">
            <div className="flex max-w-14 flex-col items-center justify-center gap-1">
              <Ticket size={32} className="stroke-primary-main" />
              <p>Cupons exclusivos</p>
            </div>

            <hr className="mx-6 h-full w-px border-0 bg-gray-200" />

            <div className="flex max-w-14 flex-col items-center justify-center gap-1">
              <Tag size={32} className="stroke-primary-main" />
              <p>Descontos especiais</p>
            </div>

            <hr className="mx-6 h-full w-px border-0 bg-gray-200" />

            <div className="flex max-w-14 flex-col items-center justify-center gap-1">
              <Star size={32} className="stroke-primary-main" />
              <p>Benefícios personalizados</p>
            </div>
          </div>

          <Link href={"/programa-de-fidelidade"}>
            <AppButton>Quero participar</AppButton>
          </Link>
        </div>
      </div>

      <div className="mt-8 w-full">
        <div className="md:hidden my-9 flex items-center gap-4 w-full">
          <hr className="flex-1 border-t border-gray-200" />
          <p className="text-sm text-gray-500 whitespace-nowrap">Já tem cupom?</p>
          <hr className="flex-1 border-t border-gray-200" />
        </div>
        <div className="flex w-full items-center gap-4">

          <hr className="hidden md:block mb-6 border-t border-gray-200" />
          <p className="hidden md:block whitespace-nowrap text-sm text-gray-500 mr-16">
            Já tem cupom?
          </p>

          <div className="relative min-w-0 flex-1">
            <span className="pointer-events-none absolute left-4 top-6 -translate-y-1/2 flex items-center z-10">
              <Ticket size={24} className="text-gray-400" />
            </span>

            <AppInput
              value={couponInput}
              error={couponError}
              type="text"
              placeholder="Digite o código do cupom"
              className="pl-12"
              onChange={(e) => {
                setCouponInput(e.target.value.toUpperCase())
                if (couponError) setCouponError("")
              }}
            />
          </div>

          <AppButton
            className="h-12 w-fit px-6"
            onClick={handleApplyCoupon}
            disabled={isApplying}
          >
            {isApplying ? "Aplicando..." : "Aplicar"}
          </AppButton>
        </div>
      </div>
    </div>
  )
}