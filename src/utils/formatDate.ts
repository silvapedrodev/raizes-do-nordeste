export const formatDate = (date: Date | string) => {
  const value = date instanceof Date ? date : new Date(date);

  const [year, month, day] = value.toISOString().split("T")[0].split("-");

  return `${day}/${month}/${year}`;
}