import { useState } from "react";
import { AppButton } from "@/components/app-button";
import { AppInput } from "../app-input";
import { Field, FieldLabel } from "@/components/ui/field";
import Image from "next/image";

export const IdentificadorForm = () => {
  const [authType, setAuthType] = useState<"email" | "cpf">("email");

  return (
    <div>
      <h1 className="font-semibold text-3xl lg:text-4xl text-center lg:text-start">
        Bem-vindo a <br />
        Raízes do Nordeste
      </h1>
      <p className="text-sm lg:text-base text-gray-500 mt-2">
        Entre para fazer seu pedido e acompanha tudo de perto.
      </p>

      <form>
        <p className="mt-11 font-semibold text-center lg:text-start">
          Como deseja continuar?
        </p>

        <div className="w-full flex gap-2 mt-1.5 mb-10">
          <AppButton
            type="button"
            variant="outline"
            className={`flex-1 
                ${authType === 'email' ? 'border-primary-main text-primary-main hover:bg-primary-main/10 hover:text-primary-main' : ' text-gray-500'}
              `}
          >
            E-mail
          </AppButton>

          <AppButton
            type="button"
            variant="outline"
            className={`flex-1 
                ${authType === 'cpf' ? 'border-primary-main text-primary-main hover:bg-primary-main/10 hover:text-primary-main' : ' text-gray-500'}
              `}
          >
            CPF
          </AppButton>
        </div>

        {authType === 'email' &&
          <div className="">
            <Field>
              <FieldLabel htmlFor="input-field-email" className="">E-mail</FieldLabel>
              <AppInput
                id="input-field-email"
                type="email"
                placeholder="Digite seu e-mail"
              />
            </Field>

            <AppButton className="mt-4">Continuar</AppButton>
          </div>
        }

        {authType === 'cpf' &&
          <div className="">
            <Field>
              <FieldLabel htmlFor="input-field-cpf" className="">CPF</FieldLabel>
              <AppInput
                id="input-field-cpf"
                maxLength={11}
                type="text"
                placeholder="Digite seu CPF"
              />
            </Field>

            <AppButton className="mt-4">Continuar</AppButton>
          </div>
        }
      </form>

      <div className="my-9 flex items-center gap-4 w-full">
        <hr className="flex-1 border-t border-gray-200" />
        <p className="text-sm text-gray-500 whitespace-nowrap">ou continue com</p>
        <hr className="flex-1 border-t border-gray-200" />
      </div>

      <div className="flex flex-col gap-3">
        <button className="flex gap-3 items-center justify-center w-full h-11 rounded-xl font-medium text-sm border border-gray-200 hover:bg-gray-100">
          <Image
            src={"/assets/ui/google.svg"}
            alt="Google icon"
            width={20}
            height={20}
          />
          Continuar com Google
        </button>

        <button className="flex gap-3 items-center justify-center w-full h-11 rounded-xl font-medium text-sm border border-gray-200 hover:bg-gray-100">
          <Image
            src={"/assets/ui/apple.svg"}
            alt="Google icon"
            width={20}
            height={20}
          />
          Continuar com Apple
        </button>
      </div>
    </div>
  );
}