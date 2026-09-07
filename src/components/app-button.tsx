"use client"

import { LucideIcon } from "lucide-react"
import { Button } from "./ui/button"

interface AppButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: LucideIcon;
  variant?: "default" | "outline"
}

export const AppButton = ({ children, icon: Icon, variant = "default", className, ...props }: AppButtonProps) => {
  return (
    <Button
      {...props}
      variant={variant}
      className={`w-full h-12 rounded-xl py-3 font-semibold text-base gap-2 
        ${variant === 'outline'
          ? 'text-primary-main border-gray-200 hover:bg-gray-100'
          : 'bg-primary-main text-white hover:bg-primary-main/80 '}
          ${className}
      `}
    >
      {Icon && <Icon size={24} className="size-6" />}
      {children}
    </Button>
  );
}