import { AVAILABLE_REWARDS } from "@/data/loyalty_rewards";
import { Coupon } from "@/types/bag-item";
import { getCouponTheme } from "./coupon-styles";
import { AppButton } from "@/components/app-button";
import { useState } from "react";
import { useAuthStore } from "@/store/auth";
import { canClaimReward, claimReward } from "@/lib/loyalty-service";
import { toast } from "@/components/ui/toast";

type Props = {
  userCoupons: Coupon[];
  userPoints: number;
  onRewardClaimed: () => void;
};

export const LoyaltyCouponList = ({ userCoupons, userPoints, onRewardClaimed }: Props) => {
  const token = useAuthStore((state) => state.token);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const claimedCouponIds = userCoupons.map((cupom) => cupom.id);

  const handleClaim = async (rewardId: string, code: string) => {
    setLoadingId(rewardId);

    const result = claimReward(token, rewardId);

    if (result.success) {
      onRewardClaimed();
      toast.add({ title: `Cupom ${code} copiado.` })
      await navigator.clipboard.writeText(code)
    } else {
      alert(result.message);
    }
    setLoadingId(null);
  };

  return (
    <section>
      <h2 className="font-semibold text-lg md:text-2xl">Cupons disponíveis</h2>
      <p className="mt-1 text-sm text-gray-500">
        Veja seus cupons e troque por descontos incríveis!
      </p>

      <div className="mt-4 space-y-5 text-white">
        {AVAILABLE_REWARDS.map((reward) => {
          const isClaimed = claimedCouponIds.includes(reward.id);
          const hasEnoughPoints = canClaimReward(userPoints, reward.requiredPoints);

          const isAvailable = hasEnoughPoints || isClaimed;

          const themeClasses = getCouponTheme(reward.code, isAvailable);
          const missingPoints = reward.requiredPoints - userPoints;

          return (
            <div
              key={reward.id}
              className={`p-4 rounded-xl border flex justify-between items-center transition-all ${themeClasses}`}
            >
              <div className="space-y-2">
                <p className="text-lg font-bold">{reward.code}</p>
                <p className="text-sm">{reward.requiredPoints} pontos</p>
                {!hasEnoughPoints && !isClaimed && (
                  <p className="text-xs text-gray-400">Faltam {missingPoints} pontos</p>
                )}
                <p className="text-sm">Válido por 30 dias</p>
              </div>

              <div>
                {isClaimed ? (
                  <span className="text-xs font-semibold bg-white/30 px-3 py-2 rounded-lg backdrop-blur-md">
                    Resgatado
                  </span>
                ) : (
                  <AppButton
                    disabled={!hasEnoughPoints || loadingId === reward.id}
                    onClick={() => handleClaim(reward.id, reward.code)}
                    className={`backdrop-blur-md text-white border transition-all shadow-sm ${hasEnoughPoints
                      ? "bg-white/20 border-white/30 hover:bg-white/30 hover:border-white/50 cursor-pointer"
                      : "bg-white/10 border-white/10 opacity-50 cursor-not-allowed"
                      }`}
                  >
                    {loadingId === reward.id ? "Resgatando..." : "Resgatar"}
                  </AppButton>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};