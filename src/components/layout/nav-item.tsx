"use client"

import { icons, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  href: string;
  label: string;
  icon: keyof typeof icons;
}

export const NavItem = ({ href, label, icon }: NavItemProps) => {
  const Icon = icons[icon] as LucideIcon;
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <li className="w-full py-1">
      <Link href={href} className="flex flex-col items-center gap-1">
        <Icon
          size={28}
          className={`${isActive
            ? 'font-bold text-primary-main'
            : 'font-medium text-gray-500 '
            }`}
        />
        <span
          className={`text-sm ${isActive
            ? 'font-bold text-primary-main'
            : 'font-medium text-gray-500'
            }`}
        >{label}</span>
      </Link>
    </li>
  );
}