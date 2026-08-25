"use client"

import { LucideIcon } from "lucide-react"
import { Button } from "./ui/button"

type Props = {
  children: React.ReactNode
  icon?: LucideIcon
  variant?: "default" | "outline"
  onClick?: () => void
  className?: string
}

export const AppButton = ({ children, icon: Icon, variant, onClick, className }: Props) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      className={`w-full h-12 rounded-xl py-3 font-semibold text-base gap-2 ${className}
        ${variant === 'outline'
          ? 'text-primary-main border-gray-200 hover:bg-gray-100'
          : 'bg-primary-main text-white hover:bg-primary-main/80 '}
      `}
    >
      {Icon && <Icon size={24} className="size-6" />}
      {children}
    </Button>
  );
}