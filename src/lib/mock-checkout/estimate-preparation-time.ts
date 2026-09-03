import { OrderItem } from "@/types/order";

export type PreparationTimeRange = {
  min: number;
  max: number;
  label: string;
};

export const estimatePreparationTime = (items: OrderItem[]): PreparationTimeRange => {
  if (items.length === 0) return { min: 0, max: 0, label: "—" };

  const times = items.map((item) => item.preparationTimeMinutes);

  const max = Math.max(...times);
  const average = times.reduce((acc, t) => acc + t, 0) / times.length;
  const min = Math.round(average);

  const label = min === max ? `${max}min` : `${min}-${max}min`;

  return { min, max, label };
};