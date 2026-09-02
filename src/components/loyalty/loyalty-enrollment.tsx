"use client"

import { LucideIcon, Star, Tag } from "lucide-react"
import { AppButton } from "@/components/app-button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateUserLoyaltyConsent } from "@/lib/auth-mock";
import { useAuthStore } from "@/store/auth";

type Props = {
  icon?: LucideIcon;
  title: string;
  description: string;
}

type LoyaltyEnrollmentProps = {
  onSuccess?: () => void;
}

export const LoyaltyFeatureItem = ({
  icon: Icon = Tag,
  title,
  description,
}: Props) => {
  return (
    <div className="flex flex-row lg:flex-col items-center lg:items-center gap-2 lg:gap-3 text-left lg:text-center">
      <div className="bg-primary-main/10 size-14 flex items-center justify-center rounded-full shrink-0">
        <Icon size={28} className="stroke-primary-main" />
      </div>

      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export const LoyaltyEnrollment = ({ onSuccess }: LoyaltyEnrollmentProps) => {
  const router = useRouter();
  const token = useAuthStore((state) => state.token);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleParticipate = () => {
    if (!acceptedTerms || !token) return;

    const updatedUser = updateUserLoyaltyConsent(token, {
      participating: true,
    });

    if (!updatedUser) return;

    if (onSuccess) {
      onSuccess();
    }
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-9 lg:mt-20">
      <div className="flex-1">
        <div>
          <h1 className="text-2xl lg:text-3xl text-center lg:text-start font-semibold">
            Faça parte do<br /> Programa de Fidelidade
          </h1>
          <p className="text-sm lg:text-base lg:text-start text-gray-500 text-center mt-2">
            Acumule pontos, ganhe descontos e aproveite benefícios exclusivos!
          </p>
        </div>
        <div className="my-9 flex flex-col lg:flex-row gap-6">
          <LoyaltyFeatureItem
            icon={Star}
            title="Acumule pontos"
            description="A cada R$ 1,00 gasto, você ganha 1 ponto."
          />
          <LoyaltyFeatureItem
            icon={Tag}
            title="Descontos exclusivos"
            description="Troque seus pontos por cupons e economize em seus pedidos."
          />
          <LoyaltyFeatureItem
            icon={Star}
            title="Benefícios especiais"
            description="Acesso antecipado a promoções e ofertas personalizadas."
          />
        </div>
      </div>
      <div className="lg:max-w-100 border border-gray-200 px-5 py-7 rounded-xl shadow-[1px_1px_8px_rgba(0,0,0,0.10)]">
        <h2 className="font-semibold text-lg">Confirmar participação</h2>
        <p className="text-sm text-gray-500">Para participar, aceite os termos do Programa de Fidelidade</p>

        <div className="flex gap-2 items-center my-6">
          <Checkbox
            id="terms-checkbox"
            name="terms"
            className="size-5 bg-white borde border-gray-200 data-[checked]:bg-primary-main data-[checked]:border-primary-main"
            checked={acceptedTerms}
            onCheckedChange={(checked) => setAcceptedTerms(checked === true)}
            aria-label="aceitar os termos de uso"
            required
          />
          <p className="flex flex-wrap items-center gap-1 text-xs">
            Eu aceito os<Link
              href={"/termos-de-uso"}
              className="text-primary-main font-bold hover:underline"
            >Termos de Uso</Link> e a
            <Link
              href={"/politica-de-privacidade"} className="text-primary-main font-bold hover:underline">Política de Privacidade.
            </Link>
          </p>
        </div>

        <div className="space-y-4">
          <AppButton
            onClick={handleParticipate}
            disabled={!acceptedTerms}
          >
            Quero participar
          </AppButton>
          <AppButton
            variant="outline"
            onClick={handleCancel}
          >
            Agora não
          </AppButton>
        </div>
      </div>

    </div>
  )
}