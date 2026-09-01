import { ChevronRight, LucideIcon } from "lucide-react"
import Link from "next/link";

type Props = {
  icon: LucideIcon
  href?: string
  title: string;
  children?: React.ReactNode
}

export const SettingsSectionItem = ({ title, href, icon: Icon, children }: Props) => {
  const content = (
    <>
      <div className="flex items-center gap-2">
        <div className="flex size-8 items-center justify-center rounded-full bg-primary-main/10">
          <Icon size={20} className="stroke-primary-main" />
        </div>

        <p className="font-semibold">{title}</p>
      </div>

      <div>
        {children ?? (
          <ChevronRight
            size={24}
            className="stroke-primary-main"
          />
        )}
      </div>
    </>
  )

  if (href) {
    return (
      <Link
        href={href}
        className="flex items-center justify-between py-4"
      >
        {content}
      </Link>
    )
  }

  return (
    <div className="flex items-center justify-between py-4">
      {content}
    </div>
  )
}