import z from "zod";

const isValidCPF = (cpf: string): boolean => {
  const cleanedCPF = cpf.replace(/\D/g, "");

  if (cleanedCPF.length !== 11) return false;

  if (/^(\d)\1{10}$/.test(cleanedCPF)) return false;

  let sum = 0;

  for (let i = 0; i < 9; i++) {
    sum += Number(cleanedCPF[i]) * (10 - i);
  }

  let remainder = (sum * 10) % 11;
  const digit1 = remainder === 10 ? 0 : remainder;

  if (digit1 !== Number(cleanedCPF[9])) {
    return false;
  }

  sum = 0;

  for (let i = 0; i < 10; i++) {
    sum += Number(cleanedCPF[i]) * (11 - i);
  }

  remainder = (sum * 10) % 11;
  const digit2 = remainder === 10 ? 0 : remainder;

  return digit2 === Number(cleanedCPF[10]);
};

const validateAge = (dateString: string, minAge: number = 13) => {
  const birthDate = new Date(dateString);
  if (isNaN(birthDate.getTime())) return false;

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age >= minAge;
};

export const createAuthSchema = (type: "email" | "cpf") => {
  return z.object({
    value:
      type === "email"
        ? z
          .email("Digite um e-mail válido")
          .min(1, "E-mail obrigatório")
        : z
          .string()
          .min(1, "CPF obrigatório")
          .refine(isValidCPF, "Digite um CPF válido"),
  });
};

export const createSignupSchema = () => {
  return z.object({
    name: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres'),
    cpf: z.string().min(1, 'CPF obrigatório').refine(isValidCPF, 'Digite um CPF válido'),
    email: z.email("Digite um e-mail válido"),
    phone: z.string().min(11, 'Número de telefone inválido'),
    birthDate: z.string().refine((val) => validateAge(val, 13), {
      message: 'Você deve ter pelo menos 13 anos.',
    }),
    password: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres'),
    confirmPassword: z.string(),
    terms: z.literal(true, {
      error: 'Você precisa aceitar os termos para continuar'
    })
  }).refine(data => data.password === data.confirmPassword, {
    error: 'As senhas não coincidem. Por favor, verifique.',
    path: ['confirmPassword']
  })
}

export type AuthFormData = z.infer<ReturnType<typeof createAuthSchema>>;
