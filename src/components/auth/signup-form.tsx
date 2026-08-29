import { PasswordInput } from "@/components/password-input";
import { Field, FieldLabel } from "@/components/ui/field";
import { AppInput } from "@/components/app-input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { AppButton } from "@/components/app-button";
import { ChangeEvent, useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";
import { formatCPF, unformatCPF } from "@/utils/format-CPF";
import { phoneMask, removePhoneMask } from "@/utils/format-phone";
import { createSignupSchema } from "@/schema/auth.schema";
import { createMockUser, userExistsByEmailOrCpf } from "@/lib/auth-mock";

type Props = {
  identifier: string
  onBack: () => void
}

type ErrorStructure = {
  name?: string;
  cpf?: string;
  email?: string;
  phone?: string;
  birthDate?: string;
  password?: string;
  confirmPassword?: string;
  terms?: string;
  form?: string;
}

export const SignupForm = ({ identifier, onBack }: Props) => {
  const [form, setForm] = useState({
    name: '',
    cpf: '',
    email: '',
    phone: '',
    birthDate: '',
    password: '',
    confirmPassword: '',
    terms: false
  })
  const [erros, setErros] = useState<ErrorStructure>({})
  const [loading, setLoading] = useState(false);

  const isEmail = identifier.includes("@")

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setForm(prev => ({
      ...prev,
      email: isEmail ? identifier : '',
      cpf: !isEmail ? formatCPF(identifier) : ''
    }));

  }, [identifier, isEmail]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    let finalValue = type === 'checkbox' ? checked : value;

    if (name === 'cpf') finalValue = formatCPF(value as string);
    if (name === 'phone') finalValue = phoneMask(value as string);

    setForm(form => ({
      ...form,
      [name]: finalValue
    }));

    setErros(erros => ({
      ...erros,
      [name]: undefined,
      form: undefined
    }))
  }

  const handleCheckboxChange = (checked: boolean | "indeterminate") => {
    const isChecked = checked === true;

    setForm(form => ({ ...form, terms: isChecked }));
    setErros(erros => ({ ...erros, terms: undefined, form: undefined }));
  };

  const isFormFilled = Object.values(form).every(value =>
    typeof value === "boolean" ? value : value.trim() !== ""
  )

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    const dataToValidate = {
      ...form,
      email: form.email.trim().toLowerCase(),
      cpf: unformatCPF(form.cpf),
      phone: removePhoneMask(form.phone),
    };

    setLoading(true);
    try {
      const result = createSignupSchema().safeParse(dataToValidate);

      if (!result.success) {
        const formattedErrors: ErrorStructure = {};
        result.error.issues.forEach((issue) => {
          const fieldName = issue.path[0] as keyof ErrorStructure;
          if (fieldName) {
            formattedErrors[fieldName] = issue.message;
          }
        });

        setErros(formattedErrors);
        return;
      }

      const userExists = userExistsByEmailOrCpf(
        result.data.email,
        result.data.cpf
      );

      if (userExists) {
        setErros({
          form: 'Usuário já cadastrado.'
        });

        return;
      }

      createMockUser(result.data)
      onBack()
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      className="w-full my-4 max-w-sm lg:max-w-md"
      onSubmit={handleSubmit}
    >
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-primary-main hover:text-gray-800 mb-6 transition-colors"
      >
        <ChevronLeft size={24} className="lg:size-8" />
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
            name="name"
            type="text"
            placeholder="Digite seu nome completo"
            value={form.name}
            onChange={handleChange}
            error={erros.name}
            required
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="input-field-cpf" className="">CPF</FieldLabel>
          <AppInput
            id="input-field-cpf"
            name="cpf"
            maxLength={17}
            type="text"
            placeholder="Digite seu CPF"
            value={form.cpf}
            onChange={handleChange}
            error={erros.cpf}
            required
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="input-field-email" className="">E-mail</FieldLabel>
          <AppInput
            id="input-field-email"
            name="email"
            type="email"
            placeholder="Digite seu e-mail"
            value={form.email}
            onChange={handleChange}
            error={erros.email}
            required
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="input-field-phone" className="">Celular</FieldLabel>
          <AppInput
            id="input-field-phone"
            name="phone"
            type="text"
            placeholder="(DD) 00000-000"
            value={form.phone}
            onChange={handleChange}
            error={erros.phone}
            required
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="input-field-birthDate" className="">Data de nascimento</FieldLabel>
          <AppInput
            id="input-field-birthDate"
            name="birthDate"
            type="date"
            value={form.birthDate}
            onChange={handleChange}
            error={erros.birthDate}
            required
          />
        </Field>

        <Field>
          <FieldLabel>Senha</FieldLabel>
          <PasswordInput
            value={form.password}
            onChange={handleChange}
            placeholder="Crie sua senha"
            name="password"
            maxLength={40}
            error={erros.password}
            required
          />
        </Field>

        <Field>
          <FieldLabel>Confirmar senha</FieldLabel>
          <PasswordInput
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirme sua senha"
            name="confirmPassword"
            maxLength={40}
            error={erros.confirmPassword}
            required
          />
        </Field>

        <div className="flex gap-2 items-center">
          <Checkbox
            id="terms-checkbox"
            name="terms"
            className="size-5 bg-white borde border-gray-200 data-[checked]:bg-primary-main data-[checked]:border-primary-main"
            checked={form.terms}
            onCheckedChange={handleCheckboxChange}
            required
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

        {erros.form && (
          <p className="text-sm font-medium text-red-500 mt-2">
            {erros.form}
          </p>
        )}

        <AppButton
          type="submit"
          className="mt-8"
          disabled={!isFormFilled || loading}
        >
          {loading ? "Carregando..." : "Criar conta"}
        </AppButton>
      </div>
    </form>
  );
}