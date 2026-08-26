"use client"

import Image from "next/image"
import Link from "next/link"
import { StoreLocationSelect } from "./store-location-select"
import { HeaderSearch } from "./header-search"
import { PaperBag, UserRound } from "lucide-react"
import { useBagStore } from "@/store/bag"

export function Header() {
  const bag = useBagStore(state => state.bag)

  const value = bag.length
  const displayValue = value > 99 ? "99+" : value

  return (
    <header className="border-b border-gray-200">
      <div className="mx-auto w-full max-w-7xl px-6 py-4 md:px0 md:py-3">

        <div className="flex items-center">

          <div className="flex shrink-0 items-center gap-6 md:gap-8">
            <Link href="/">
              <Image
                src="/assets/ui/logo.svg"
                alt="Raízes do Nordeste"
                width={92}
                height={32}
                priority
              />
            </Link>

            <StoreLocationSelect />
          </div>

          <div className="ml-7 hidden min-w-0 flex-1 md:block md:max-w-[488px]">
            <HeaderSearch />
          </div>

          <div className="ml-auto hidden gap-6 md:flex">
            <Link href="/perfil" className="flex items-center gap-1.5">
              <UserRound className="text-primary-main" />
              <span className="text-sm">Minha conta</span>
            </Link>

            <Link href="/sacola" className="flex items-center gap-1.5">
              <div className="relative">
                <PaperBag className="text-primary-main" />

                {value > 0 &&
                  <span className="absolute -top-2 -right-2 flex min-w-4 h-4 items-center justify-center rounded-full bg-primary-main text-[10px] text-white truncate">
                    {displayValue}
                  </span>
                }
              </div>

              <span className="text-sm">Sacola</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}