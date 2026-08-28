import { AppButton } from "@/components/app-button";
import { PasswordInput } from "@/components/password-input";
import { Field, FieldLabel } from "@/components/ui/field";

export const SigninForm = () => {
  return (
    <form className="w-full max-w-sm lg:max-w-md">
      <div>
        <h1 className="font-semibold text-3xl lg:text-4xl">Olá, Name</h1>
        <p className="text-sm lg:text-base text-gray-500 mt-2">Digite sua senha para continuar</p>
      </div>

      <div className="mt-8">
        <Field>
          <FieldLabel>Senha</FieldLabel>
          <PasswordInput
            placeholder="Digite sua senha"
          />
        </Field>

        <AppButton className="mt-4">Entrar</AppButton>
      </div>

      <div className="text-center mt-8">
        <button className="text-sm font-medium text-primary-main">Esqueci minha senha</button>
      </div>
    </form>
  );
}