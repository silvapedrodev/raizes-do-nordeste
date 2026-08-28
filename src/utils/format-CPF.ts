export const formatCPF = (value: string): string => {
  const cpf = value.replace(/\D/g, "").slice(0, 11);

  return cpf
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d{1,2})$/, ".$1-$2");
};

export const unformatCPF = (value: string): string => {
  return value.replace(/\D/g, "");
};
