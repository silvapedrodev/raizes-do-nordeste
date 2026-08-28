import { useState } from "react"
import { AppInput } from "./app-input"
import { Eye, EyeOff } from "lucide-react"

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export const PasswordInput = ({ error, className, ...props }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="relative w-full">
      <AppInput
        type={showPassword ? "text" : "password"}
        error={error}
        className={`"pr-12", ${className})`}
        {...props}
      />

      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600 focus:outline-none"
        tabIndex={-1} 
      >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  )
}