"use client"

import { X } from "lucide-react"
import { useRouter } from "next/navigation"
import { LoyaltyJoinModal } from "./loyalty-join-modal"
import { useCallback, useEffect, useState } from "react"
import { getUserByToken } from "@/lib/auth-mock"
import { useAuthStore } from "@/store/auth"
import { LoyaltyProgramModal } from "./loyalty-program-modal"
import { FocusTrap } from "focus-trap-react"

export function ModalCupom() {
  const token = useAuthStore((state) => state.token);
  const hydrated = useAuthStore((state) => state.hydrated);
  const [isMember, setIsMember] = useState<boolean | null>(null);

  const router = useRouter()

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

  useEffect(() => {
    if (isMember === false) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isMember]);

  if (!hydrated || isMember === null) {
    return null;
  }

  function handleClose() {
    router.back();
  }

  return (
    <div className="fixed inset-0 z-1000 px-5 overflow-y-auto">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs"
        onClick={handleClose}
      />
      <FocusTrap
      >
        <div className="relative z-10 mx-auto mt-10 max-w-233 rounded-xl bg-white p-6">
          <div className="text-end">
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700 font-medium"
            >
              <X size={20} className="stroke-primary-main" />
            </button>
          </div>

          <div>
            {isMember
              ? <LoyaltyProgramModal />
              : <LoyaltyJoinModal />
            }
          </div>
        </div>
      </FocusTrap>

    </div>
  )
}
