import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface CustomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export const AppInput = ({ error, className, id, ...props }: CustomInputProps) => {
  return (
    <div className="space-y-2">
      <Input
        id={id}
        className={cn(
          "h-12 rounded-xl bg-white border-gray-200 text-sm shadow-[1px_1px_8px_rgba(0,0,0,0.10)]",
          "focus-visible:ring-2 focus-visible:ring-gray-200",
          error && "border-2 border-red-500 focus-visible:ring-red-500 outline-red-500",
          className
        )}
        {...props}
      />

      {error && (
        <p className="text-sm font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}