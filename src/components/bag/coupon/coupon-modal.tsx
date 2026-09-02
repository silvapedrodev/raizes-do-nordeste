"use client"

import { X } from "lucide-react"
import { useRouter } from "next/navigation"
import { LoyaltyJoinModal } from "./loyalty-join-modal"
import { useEffect } from "react"

export function ModalCupom() {
  const router = useRouter()

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [])

  function handleClose() {
    router.back()
  }

  return (
    <div className="fixed inset-0 z-1000 px-5 overflow-y-auto">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs"
        onClick={handleClose}
      />

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
          <LoyaltyJoinModal />
        </div>
      </div>
    </div>
  )
}
