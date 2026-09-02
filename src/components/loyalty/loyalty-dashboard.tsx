import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { useAuthStore } from "@/store/auth";
import { useEffect, useState } from "react";
import { User } from "@/types/user";
import { getUserByToken } from "@/lib/auth-mock";
import { LoyaltyCouponList } from "@/components/loyalty/loyalty-coupon-list";
import { LoyaltyHistoryList } from "@/components/loyalty/loyalty-history-list";


export const LoyaltyDashboard = () => {
  const token = useAuthStore((state) => state.token);
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<"coupons" | "history">("coupons");

  const rawPoints = user?.loyalty?.points ?? 0;
  const currentPoints = Math.min(Math.max(Math.floor(rawPoints), 0), 1000);
  const maxPoints = 1000

  const loadUserData = () => {
    if (token) {
      const currentUser = getUserByToken(token);
      setUser(currentUser ?? null);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadUserData();
  }, [token]);

  const userCoupons = user?.loyalty?.coupons ?? [];

  return (
    <main>
      <section className="mx-auto max-w-200 px-4 py-5 border border-gray-200 rounded-xl text-center shadow-[1px_1px_8px_rgba(0,0,0,0.10)]">
        <h2 className="font-semibold">Seus pontos</h2>
        <div className="my-5">
          <div className="flex justify-center items-center gap-2">
            <p className="font-bold text-5xl leading-none">
              {String(currentPoints).padStart(2, '0')}
            </p>
            <Image
              src={'/assets/ui/reward.svg'}
              alt="recompensa"
              width={24}
              height={24}
            />
          </div>
          <p className="font-semibold my-1">
            {currentPoints === 1 ? 'ponto' : 'pontos'}
          </p>
          <p className="text-sm text-gray-500">De {maxPoints.toLocaleString('pt-BR')} pontos</p>
        </div>
        <div className="">
          <div className="relative">
            <Progress
              value={currentPoints}
              max={maxPoints}
            />

            <div className="absolute -top-4 -right-1">
              <Image
                src={"/assets/ui/gift.svg"}
                alt="presente"
                width={24}
                height={24}
                className="size-8"
              />
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-500">1 ponto = R$ 1,00 gasto</p>
        </div>
      </section>

      <div className="mt-8 mb-12 flex max-w-96 mx-auto bg-gray-200 rounded-full p-1">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'coupons'}
          onClick={() => setActiveTab('coupons')}
          className={`flex-1 px-4 py-2 font-semibold rounded-full transition-colors ${activeTab === 'coupons'
            ? 'bg-primary-main text-white'
            : 'text-gray-500'
            }`}
        >
          Cupons
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'history'}
          onClick={() => setActiveTab('history')}
          className={`flex-1 px-4 py-2 font-semibold rounded-full transition-colors ${activeTab === 'history'
            ? 'bg-primary-main text-white'
            : 'text-gray-500'
            }`}
        >
          Histórico
        </button>
      </div>

      <section className="dashboard-content" aria-live="polite">
        {activeTab === 'coupons' ? (
          <LoyaltyCouponList
            userCoupons={userCoupons}
            userPoints={currentPoints}
            onRewardClaimed={loadUserData}
          />
        ) : (
          <LoyaltyHistoryList />
        )}
      </section>
    </main>
  );
}