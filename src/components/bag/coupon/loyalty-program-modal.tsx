"use client";

import { applyCouponAction } from "@/actions/apply-coupon";
import { AppButton } from "@/components/app-button";
import { AppInput } from "@/components/app-input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { getUserByToken } from "@/lib/auth-mock";
import { useAuthStore } from "@/store/auth";
import { useBagStore } from "@/store/bag";
import { Coupon } from "@/types/bag-item";
import { formatDate } from "@/utils/formatDate";
import { formatPrice } from "@/utils/format-price";
import { Clock, Ticket } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { validateRewardCouponUsage } from "@/lib/loyalty-service";

export const LoyaltyProgramModal = () => {
  const token = useAuthStore((state) => state.token);
  const router = useRouter();

  const [selectedCoupon, setSelectedCoupon] = useState<string | null>(null);
  const [couponInput, setCouponInput] = useState("");
  const [isApplying, setIsApplying] = useState(false);
  const [couponError, setCouponError] = useState("");

  const setCoupon = useBagStore((state) => state.setCoupon);

  const user = token ? getUserByToken(token) : null;
  const coupons = (user?.loyalty?.coupons ?? []).filter(
    (coupon) => new Date(coupon.expirationDate) > new Date()
  );
  const applyCoupon = async (code: string) => {
    setIsApplying(true);
    setCouponError("");

    try {
      const result = await applyCouponAction(code);

      if (!result.success) {
        setCouponError(result.message);
        return;
      }

      setCoupon(
        result.couponCode ?? null,
        result.discountValue ?? null,
        result.minValue ?? null
      );

      router.back();
    } catch (error) {
      console.error(error);
      setCouponError("Erro ao aplicar o cupom.");
    } finally {
      setIsApplying(false);
    }
  };

  const handleSelectCoupon = async () => {
    if (!selectedCoupon) {
      setCouponError("Selecione um cupom.");
      return;
    }

    const coupon = coupons.find(
      (coupon) => coupon.id === selectedCoupon
    );

    if (!coupon) {
      setCouponError("Cupom não encontrado.");
      return;
    }

    await applyCoupon(coupon.code);
  };

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
    <div>
      <div className="flex flex-col items-center md:mt-4 md:flex-row md:gap-4 md:pr-8">
        <div className="md:order-2">
          <Image
            src="/assets/ui/gift.svg"
            alt="benefícios"
            width={100}
            height={100}
            className="w-20 md:w-24"
          />
        </div>

        <div className="text-center md:flex-1 md:text-start">
          <h1 className="mt-6 text-xl font-semibold md:mt-0 md:text-2xl">
            Você faz parte do
            <br />
            Programa de Fidelidade
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Escolha um dos seus cupons disponíveis
            ou digite um código promocional.
          </p>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="mb-6 font-medium">
          Seus cupons disponíveis
        </h2>

        {coupons.length === 0 ? (
          <p className="text-sm text-gray-500">
            Você ainda não possui cupons disponíveis.
          </p>
        ) : (
          <>
            <RadioGroup
              value={selectedCoupon ?? ""}
              onValueChange={(value) => {
                setSelectedCoupon(value);
                setCouponError("");
              }}
              className="space-y-2 md:grid md:grid-cols-2 md:items-center"
            >
              {coupons.map((coupon) => (
                <CouponItem
                  key={coupon.id}
                  coupon={coupon}
                />
              ))}
            </RadioGroup>

            <AppButton
              className="mt-4 w-full"
              disabled={!selectedCoupon || isApplying}
              onClick={handleSelectCoupon}
            >
              {isApplying ? "Aplicando..." : "Usar cupom selecionado"}
            </AppButton>
          </>
        )}
      </div>

      <div className="mt-8 w-full">
        <div className="my-6 flex w-full items-center gap-4">
          <hr className="flex-1 border-t border-gray-200" />

          <p className="whitespace-nowrap text-sm text-gray-500">
            Já tem cupom?
          </p>

          <hr className="flex-1 border-t border-gray-200" />
        </div>

        <div className="flex w-full items-start gap-3">
          <div className="relative min-w-0 flex-1">
            <span className="pointer-events-none absolute left-4 top-6 z-10 flex -translate-y-1/2 items-center">
              <Ticket size={22} className="text-gray-400" />
            </span>

            <AppInput
              value={couponInput}
              error={couponError}
              type="text"
              placeholder="Digite o código do cupom"
              className="pl-12"
              onChange={(e) => {
                setCouponInput(e.target.value.toUpperCase());

                if (couponError) {
                  setCouponError("");
                }
              }}
            />
          </div>

          <AppButton
            className="h-12 w-fit px-6"
            onClick={handleApplyCoupon}
            disabled={isApplying || !!selectedCoupon}
          >
            {isApplying ? "Aplicando..." : "Aplicar"}
          </AppButton>
        </div>
      </div>
    </div>
  );
};

type Props = {
  coupon: Coupon;
};

const CouponItem = ({ coupon }: Props) => {
  return (
    <label
      htmlFor={coupon.id}
      className="flex w-full cursor-pointer items-center gap-3 rounded-lg border border-gray-200 bg-white p-2 transition-all hover:border-primary-main has-[[data-state=checked]]:border-primary-main has-[[data-state=checked]]:bg-primary-main/5 has-[[data-state=checked]]:ring-1 has-[[data-state=checked]]:ring-primary-main"
    >
      <div className="flex size-15 shrink-0 items-center justify-center rounded-md bg-primary-main text-white sm:size-16">
        <div className="flex items-end whitespace-nowrap">
          <span className="mb-0.5 mr-0.5 text-[9px] font-medium sm:text-xs">
            R$
          </span>

          <span className="text-xs font-semibold leading-none sm:text-sm">
            {formatPrice(coupon.discountValue)
              .replace("R$", "")
              .trim()}
          </span>
        </div>
      </div>

      <div className="flex min-w-0 flex-1 items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate font-semibold text-gray-900">
            {formatPrice(coupon.discountValue)} OFF na sua compra
          </p>

          {coupon.minValue !== undefined && (
            <p className="text-sm text-gray-500">
              Pedidos acima de R$ {formatPrice(coupon.minValue)}
            </p>
          )}

          <div className="mt-1 flex items-center gap-1 text-xs text-red-600">
            <Clock size={14} />
            <span>
              Válido até {formatDate(coupon.expirationDate)}
            </span>
          </div>
        </div>

        <RadioGroupItem
          value={coupon.id}
          id={coupon.id}
          className="shrink-0"
        />
      </div>
    </label>
  );
};
