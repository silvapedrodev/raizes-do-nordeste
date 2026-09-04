export const formatDate = (date: Date | string) => {
  const value = date instanceof Date ? date : new Date(date);

  const [year, month, day] = value.toISOString().split("T")[0].split("-");

  return `${day}/${month}/${year}`;
}

export const formatTime = (dateString: string | Date) => {
  return new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date(dateString));
};