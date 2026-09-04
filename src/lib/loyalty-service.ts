import { AVAILABLE_REWARDS } from "@/data/loyalty_rewards";
import { User } from "@/types/user";
import { getUserByToken, getUsers, saveUsers } from "./auth-mock";
import { Coupon } from "@/types/bag-item";

export const canClaimReward = (userPoints: number, requiredPoints: number): boolean => {
  return userPoints >= requiredPoints;
};

export const claimReward = (token: string | null, rewardId: string) => {
  if (!token) {
    return { success: false, message: "Você precisa estar logado para resgatar." };
  }

  const user = getUserByToken(token);
  if (!user || !user.loyalty) {
    return { success: false, message: "Usuário não encontrado ou sem programa de fidelidade." };
  }

  const reward = AVAILABLE_REWARDS.find((r) => r.id === rewardId);
  if (!reward) {
    return { success: false, message: "Recompensa não encontrada." };
  }

  const alreadyClaimed = user.loyalty.coupons.some((c) => c.id === reward.id);
  if (alreadyClaimed) {
    return { success: false, message: "Você já resgatou este cupom!" };
  }

  if (user.loyalty.points < reward.requiredPoints) {
    return { success: false, message: "Pontos insuficientes para resgatar este cupom." };
  }

  const users = getUsers();
  const userIndex = users.findIndex((u) => u.id === user.id);
  if (userIndex === -1) return { success: false, message: "Erro ao localizar usuário." };

  const { requiredPoints: _, ...couponData } = reward;

  const updatedUser: User = {
    ...user,
    loyalty: {
      ...user.loyalty,
      points: user.loyalty.points - reward.requiredPoints,
      coupons: [...user.loyalty.coupons, couponData],
    },
    updatedAt: new Date().toISOString(),
  };

  users[userIndex] = updatedUser;
  saveUsers(users);

  return { success: true, message: "Cupom resgatado com sucesso!" };
};

export function isRewardCoupon(code: string): boolean {
  const cleanCode = code.trim().toUpperCase()
  return AVAILABLE_REWARDS.some(r => r.code.toUpperCase() === cleanCode)
}

export const getClaimedRewardCoupon = (
  token: string | null,
  code: string
): Coupon | null => {
  if (!token) return null;

  const user = getUserByToken(token);
  if (!user?.loyalty?.coupons) return null;

  const cleanCode = code.trim().toUpperCase();

  return (
    user.loyalty.coupons.find(
      (coupon) => coupon.code.trim().toUpperCase() === cleanCode
    ) ?? null
  );
};

export const isCouponExpired = (coupon: Coupon): boolean => {
  return new Date() > new Date(coupon.expirationDate);
};

export const validateRewardCouponUsage = (
  token: string | null,
  code: string
): { valid: boolean; message?: string } => {
  const cleanCode = code.trim().toUpperCase();

  if (!isRewardCoupon(cleanCode)) {
    return { valid: true };
  }

  const claimedCoupon = getClaimedRewardCoupon(token, cleanCode);

  if (!claimedCoupon) {
    return {
      valid: false,
      message: "Você precisa resgatar este cupom no Programa de Fidelidade antes de usá-lo.",
    };
  }

  if (isCouponExpired(claimedCoupon)) {
    return {
      valid: false,
      message: "Este cupom já foi utilizado ou está expirado.",
    };
  }

  return { valid: true };
};