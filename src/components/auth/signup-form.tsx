import { PasswordInput } from "@/components/password-input";
import { Field, FieldLabel } from "@/components/ui/field";
import { AppInput } from "@/components/app-input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { AppButton } from "@/components/app-button";
import { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";

type Props = {
  identifier: string
  onBack: () => void
}

export const SignupForm = ({ identifier, onBack }: Props) => {
  const [email, setEmail] = useState("")
  const [cpf, setCpf] = useState("")

  const isEmail = identifier.includes("@")

  useEffect(() => {
    if (isEmail) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setEmail(identifier);
      return
    }
    setCpf(identifier)

  }, [identifier, isEmail]);

  return (
    <form className="w-full my-4 max-w-sm lg:max-w-md">
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-primary-main hover:text-gray-800 mb-6 transition-colors"
      >
        <ChevronLeft size={24} className="lg:size-8"/>
      </button>

      <div>
        <h1 className="font-semibold text-3xl lg:text-4xl text-center lg:text-start">
          Criar sua conta
        </h1>
        <p className="text-sm lg:text-base text-gray-500 mt-2 text-center lg:text-start">
          Preencha seus dados para começar a pedir.
        </p>
      </div>

      <div className="mt-10 space-y-3">
        <Field>
          <FieldLabel htmlFor="input-field-name" className="">Nome completo</FieldLabel>
          <AppInput
            id="input-field-name"
            type="text"
            placeholder="Digite seu nome completo"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="input-field-cpf" className="">CPF</FieldLabel>
          <AppInput
            id="input-field-cpf"
            maxLength={11}
            type="text"
            placeholder="Digite seu CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="input-field-email" className="">E-mail</FieldLabel>
          <AppInput
            id="input-field-email"
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="input-field-phone" className="">Telefone</FieldLabel>
          <AppInput
            id="input-field-phone"
            type="text"
            placeholder="(DD) 00000-000"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="input-field-dob" className="">Telefone</FieldLabel>
          <AppInput
            id="input-field-dob"
            type="text"
            placeholder="__/__/____"
          />
        </Field>

        <Field>
          <FieldLabel>Senha</FieldLabel>
          <PasswordInput
            placeholder="Crie sua senha"
          />
        </Field>

        <Field>
          <FieldLabel>Confirmar senha</FieldLabel>
          <PasswordInput
            placeholder="Confirme sua senha"
          />
        </Field>

        <div className="flex gap-2 items-center">
          <Checkbox
            id="terms-checkbox-basic"
            name="terms-checkbox-basic"
            className="size-5 bg-white borde border-gray-200 data-[checked]:bg-primary-main data-[checked]:border-primary-main"
          />
          <p className="flex flex-wrap items-center gap-1 text-xs">
            Eu aceito os<Link
              href={"/termos-de-uso"}
              className="text-primary-main font-bold hover:underline"
            >Termos de Uso</Link> e a
            <Link
              href={"/politica-de-privacidade"} className="text-primary-main font-bold hover:underline">Política de Privacidade.
            </Link>
          </p>
        </div>

        <AppButton className="mt-8">Criar conta</AppButton>
      </div>
    </form>
  );
}