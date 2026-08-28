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

export const createAuthSchema = (type: "email" | "cpf") => {
  return z.object({
    value:
      type === "email"
        ? z
          .string()
          .min(1, "E-mail obrigatório")
          .email("Digite um e-mail válido")
        : z
          .string()
          .min(1, "CPF obrigatório")
          .refine(isValidCPF, "Digite um CPF válido"),
  });
};

export type AuthFormData = z.infer<ReturnType<typeof createAuthSchema>>;
