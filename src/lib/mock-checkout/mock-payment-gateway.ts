const HARDCODED_RESULT = true; // true = sucesso | false = erro

export const mockPaymentGateway = async (): Promise<boolean> => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // simula latência
  return HARDCODED_RESULT;
};