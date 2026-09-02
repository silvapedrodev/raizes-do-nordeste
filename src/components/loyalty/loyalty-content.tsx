"use client"

import { LoyaltyEnrollment } from "@/components/loyalty/loyalty-enrollment";
import { useAuthStore } from "@/store/auth";
import { useCallback, useEffect, useState } from "react";
import { LoyaltyDashboard } from "@/components/loyalty/loyalty-dashboard";
import { getUserByToken } from "@/lib/auth-mock";

export const LoyaltyContent = () => {
  const token = useAuthStore((state) => state.token);
  const hydrated = useAuthStore((state) => state.hydrated);
  const [isMember, setIsMember] = useState<boolean | null>(null);

  const checkLoyaltyStatus = useCallback(() => {
    if (!token) {
      setIsMember(false);
      return;
    }

    const currentUser = getUserByToken(token);
    setIsMember(currentUser?.loyalty !== null && currentUser?.loyalty !== undefined);
  }, [token]);

  useEffect(() => {
    if (hydrated) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      checkLoyaltyStatus();
    }
  }, [hydrated, checkLoyaltyStatus]);

  if (!hydrated || isMember === null) {
    return null;
  }

  return (
    <div>
      {isMember
        ? <LoyaltyDashboard />
        : <LoyaltyEnrollment onSuccess={checkLoyaltyStatus} />
      }
    </div>
  )
}