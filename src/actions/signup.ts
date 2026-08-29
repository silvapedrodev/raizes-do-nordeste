"user server"

type SignupData = {
  name: string;
  cpf: string;
  phone: string;
  birthDate: Date;
  email: string;
  password: string;
}

export const signup = async ({ name, cpf, phone, birthDate, email, password }: SignupData): Promise<{ error: string | null }> => {
  // TODO: requisição para fazer cadastro
  return { error: null }
}