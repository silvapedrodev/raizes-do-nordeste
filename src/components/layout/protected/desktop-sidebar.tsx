"use client"

import Link from "next/link";
import { profileNavigation } from "@/components/layout/protected/sidebar-navigation"
import { usePathname, useRouter } from "next/navigation";
import { AppButton } from "@/components/app-button";
import { useAuthStore } from "@/store/auth";
import { useState } from "react";
import { clearAuthCookie } from "@/actions/clear-auth-cookie";
import { LogOut } from "lucide-react";

export const DesktopSidebar = () => {
  const pathname = usePathname();
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
    <aside className="hidden lg:block w-64 shrink-0 -mt-10 py-5 border-r border-gray-200">
      <nav className="px-4 mb-20">
        {profileNavigation.map((section, sectionIndex) => (
          <div
            key={section.title}
            className="flex flex-col gap-4"
          >
            {sectionIndex > 0 && <hr className="mt-4"/>}

            <div className="px-3">
              {section.items.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={index ?? item.label}
                    href={item.href ?? "#"}
                    className={`flex items-center gap-2 rounded-md px-3 py-4 ${item.href === pathname
                      ? "bg-gray-200 font-semibold text-primary-main "
                      : "text-gray-500 hover:bg-gray-200/40"
                      }`}
                  >
                    <Icon size={24} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}

        <div className="mt-8">
          <AppButton
            variant="outline"
            className="w-full border-primary-main hover:text-primary-main"
            onClick={handleLogout}
          >
            <LogOut />
            {isLoading ? "Saindo..." : "Sair"}
          </AppButton>
        </div>
      </nav>
    </aside>
  );
}