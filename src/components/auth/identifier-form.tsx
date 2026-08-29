import { ChangeEvent, useState } from "react";
import { AppButton } from "@/components/app-button";
import { AppInput } from "@/components/app-input";
import { Field, FieldLabel } from "@/components/ui/field";
import Image from "next/image";
import { createAuthSchema } from "@/schema/auth.schema";
import { formatCPF, unformatCPF } from "@/utils/format-CPF";
import { findUserByIdentifier } from "@/lib/auth-mock";

type Props = {
  onNext: (value: string, exists: boolean) => void;
}

type AuthType = "email" | "cpf"

type ErrorStructure = {
  email?: string;
  cpf?: string;
}

export const IdentifierForm = ({ onNext }: Props) => {
  const [authType, setAuthType] = useState<AuthType>("email");
  const [value, setValue] = useState({ email: '', cpf: '' })

  const [errors, setErrors] = useState<ErrorStructure>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value: inputValue } = e.target;

    const newValue =
      name === "cpf"
        ? formatCPF(inputValue)
        : inputValue;

    setValue(prev => ({
      ...prev,
      [name]: newValue,
    }));

    setErrors(prev => ({
      ...prev,
      [name]: undefined,
    }));
  }

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    const inputValue =
      authType === "cpf"
        ? unformatCPF(value.cpf)
        : value.email;

    const result = createAuthSchema(authType).safeParse({
      value: inputValue,
    });

    if (!result.success) {
      setErrors({
        [authType]: result.error.issues[0]?.message,
      });

      return;
    }

    setErrors({});

    const user = findUserByIdentifier(result.data.value);
    onNext(result.data.value, !!user);
  }

  const handleAuthTypeChange = (type: AuthType) => {
    setAuthType(type);
    setValue({ email: '', cpf: '' });
  };

  return (
    <div>
      <h1 className="font-semibold text-3xl lg:text-4xl text-center lg:text-start">
        Bem-vindo a <br />
        Raízes do Nordeste
      </h1>
      <p className="text-sm lg:text-base text-gray-500 mt-2">
        Entre para fazer seu pedido e acompanha tudo de perto.
      </p>

      <form onSubmit={handleSubmit}>
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
            onClick={() => handleAuthTypeChange('email')}
          >
            E-mail
          </AppButton>

          <AppButton
            type="button"
            variant="outline"
            className={`flex-1 
                ${authType === 'cpf' ? 'border-primary-main text-primary-main hover:bg-primary-main/10 hover:text-primary-main' : ' text-gray-500'}
              `}
            onClick={() => handleAuthTypeChange('cpf')}
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
                name="email"
                type="email"
                placeholder="Digite seu e-mail"
                value={value.email}
                onChange={handleChange}
                error={errors.email}
              />
            </Field>

            <AppButton type="submit" className="mt-4">Continuar</AppButton>
          </div>
        }

        {authType === 'cpf' &&
          <div className="">
            <Field>
              <FieldLabel htmlFor="input-field-cpf" className="">CPF</FieldLabel>
              <AppInput
                id="input-field-cpf"
                name="cpf"
                maxLength={14}
                type="text"
                placeholder="Digite seu CPF"
                value={value.cpf}
                onChange={handleChange}
                error={errors.cpf}
              />
            </Field>

            <AppButton type="submit" className="mt-4">Continuar</AppButton>
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