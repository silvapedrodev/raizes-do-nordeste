"use server"

type LoginData = {
  email: string;
  password: string;
}

export const signin = async (): Promise<{ error: string | null, token?: string }> => {
  // TODO: requisição para logar
  return { error: null, token: '123' }
}