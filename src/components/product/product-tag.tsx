import { Flame, Calendar, Tag } from "lucide-react"

type ProductTagsProps = {
  tags?: string[]
}

export const ProductTags = ({ tags }: ProductTagsProps) => {
  if (!tags || tags.length === 0) return null

  const getTagConfig = (tag: string) => {
    const normalizedTag = tag.toLowerCase()

    switch (normalizedTag) {
      case "mais vendido":
      case "mais vendidos":
        return {
          icon: <Flame size={18} className="stroke-primary-main" />,
          label: "Mais vendidos",
          className: "bg-primary-main/10 text-primary-main",
        }
      case "prato do dia":
        return {
          icon: <Tag size={14} />,
          label: "Prato do dia",
          className: "bg-green-50 text-green-700",
        }
      case "especial":
        return {
          icon: <Calendar size={14} />,
          label: "Especial",
          className: "bg-purple-50 text-purple-700",
        }
      default:
        return null
    }
  }

  const validTags = tags.map(getTagConfig).filter(Boolean)
  if (validTags.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2 items-center">
      {tags.map((tag) => {
        const config = getTagConfig(tag)

        return (
          <span
            key={tag}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm font-medium ${config?.className}`}
          >
            {config?.icon}
            {config?.label}
          </span>
        )
      })}
    </div>
  )
}