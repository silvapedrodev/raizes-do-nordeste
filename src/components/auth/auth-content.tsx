"use client"

import Image from "next/image"
import Link from "next/link"
import { SignupForm } from "@/components/auth/signup-form"
import { useState } from "react"
import { IdentifierForm } from "@/components/auth/identifier-form"
import { SigninForm } from "@/components/auth/signin-form"

export const AuthContent = () => {
  const [step, setStep] = useState<"method" | "signin" | "signup">("method")
  const [authValue, setAuthValue] = useState("")

  function handleNext(value: string, exists: boolean) {
    setAuthValue(value)

    if (exists) {
      setStep("signin");
      return;
    }

    setStep("signup");
  }

  return (
    <div className="flex min-h-screen w-full px-6 py-8 lg:py-0 lg:px-0 lg:gap-38 items-center">
      <div className="hidden self-start lg:flex lg:min-h-screen lg:min-w-2/5 bg-primary-main items-center justify-end">
        <Image
          src={"/assets/ui/login-image.png"}
          alt="Imagem café da manhã"
          width={730}
          height={680}
          loading="eager"
        />
      </div>

      <div className="w-full mx-auto lg:mx-0 flex flex-col items-center lg:items-start">
        <div className="mb-10 lg:hidden">
          <Link href={"/"}>
            <Image
              src={"/assets/ui/logo.svg"}
              alt="logo"
              width={168}
              height={64}
              className="w-38"
            />
          </Link>
        </div>

        {step === "method" &&
          <IdentifierForm onNext={handleNext} />
        }

        {step === "signin" &&
          <SigninForm
            identifier={authValue}
            onBack={() => setStep("method")}
          />
        }

        {step === "signup" &&
          <SignupForm
            identifier={authValue}
            onBack={() => setStep("method")}
          />
        }
      </div>
    </div>
  )
}