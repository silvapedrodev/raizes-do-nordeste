"use client"

import { User } from "@/types/user";
import { phoneMask } from "@/utils/format-phone";
import { LogOut, Pencil, UserRound } from "lucide-react";
import { NavigationList } from "@/components/profile/navigation-list";
import { AppButton } from "@/components/app-button";
import { useAuthStore } from "@/store/auth";
import { clearAuthCookie } from "@/actions/clear-auth-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  user: User;
}

export const MobileView = ({ user }: Props) => {
  const { clearToken } = useAuthStore(state => state)
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = async () => {
    try {
      setIsLoading(true)
      clearToken()
      await clearAuthCookie();
      router.push("/")
    } catch (error) {
      setIsLoading(false)
    }
  }

  return (
    <div className="lg:hidden">
      <h1 className="font-bold text-xl">Meu Perfil</h1>

      <div className="border border-gray-200 p-4 rounded-xl mt-2 flex items-center gap-4 shadow-[1px_1px_8px_rgba(0,0,0,0.10)]">
        <div className="relative size-20">
          <div className="bg-gray-200 size-20 flex items-center justify-center rounded-full">
            <UserRound size={42} className="stroke-primary-main" />
          </div>

          <button
            type="button"
            className="absolute bottom-0 right-0 size-6 flex items-center justify-center rounded-full bg-primary-main"
          >
            <Pencil size={14} className="stroke-white" />
          </button>
        </div>

        <div className="space-y-0.5 max-w-full overflow-hidden">
          <h3 className="font-semibold text-lg truncate">{user.name}</h3>
          <p className="text-sm text-gray-500 truncate">{user.email}</p>
          <p className="text-sm text-gray-500">{phoneMask(user.phone)}</p>
        </div>
      </div>

      <div>
        <NavigationList />
        <div className="mt-8">
          <AppButton
            variant="outline"
            className="border-primary-main hover:text-primary-main"
            onClick={handleLogout}
          >
            <LogOut />
            {isLoading ? "Saindo..." : "Sair"}
          </AppButton>
        </div>
      </div>
    </div>
  );
}