import { setAuthCookie } from "@/actions/set-auth-cookie";
import { AppButton } from "@/components/app-button";
import { PasswordInput } from "@/components/password-input";
import { Field, FieldLabel } from "@/components/ui/field";
import { findUserByIdentifier, signin } from "@/lib/auth-mock";
import { useAuthStore } from "@/store/auth";
import { ChevronLeft } from "lucide-react";
import { redirect } from "next/navigation";
import { useState } from "react";

type Props = {
  identifier: string
  onBack: () => void
}

export const SigninForm = ({ identifier, onBack }: Props) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const setToken = useAuthStore(state => state.setToken);
  const user = findUserByIdentifier(identifier);
  const firstName = user?.name.trim().split(/\s+/)[0];

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    setError("");
    if (!password) {
      setError("Digite sua senha");
      return;
    }

    setLoading(true);
    const result = signin(identifier, password);

    if (!result.token) {
      setError(result.error ?? "Não foi possível entrar");
      setLoading(false);
      return;
    }

    await setAuthCookie(result.token);
    setToken(result.token);

    setLoading(false);
    redirect("/")
    // Login concluído
  };

  return (
    <form className="w-full max-w-sm lg:max-w-md" onSubmit={handleSubmit}>
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-primary-main hover:text-gray-800 mb-6 transition-colors"
      >
        <ChevronLeft size={24} className="lg:size-8" />
      </button>

      <div>
        <h1 className="font-semibold text-3xl lg:text-4xl">Olá, {firstName}</h1>
        <p className="text-sm lg:text-base text-gray-500 mt-2">Digite sua senha para continuar</p>
      </div>

      <div className="mt-8">
        <Field>
          <FieldLabel>Senha</FieldLabel>
          <PasswordInput
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            error={error}
          />
        </Field>

        <AppButton
          type="submit"
          className="mt-4"
          disabled={loading}
        >
          {loading ? "Entrando..." : "Entrar"}
        </AppButton>
      </div>

      <div className="text-center mt-8">
        <button className="text-sm font-medium text-primary-main">Esqueci minha senha</button>
      </div>
    </form>
  );
}