import { BagItem } from "@/types/bag-item";
import { cookies } from "next/headers";

export const getServerBag = async (): Promise<BagItem[]> => {
  const cookieStore = await cookies();
  const value = cookieStore.get('bag')?.value;
  if (!value) return [];

  try {
    return JSON.parse(value);
  } catch {
    return [];
  }
}

export const setServerBag = async (bag: BagItem[]) => {
  const cookieStore = await cookies();
  cookieStore.set('bag', JSON.stringify(bag), { httpOnly: true });
}

export const clearServerBag = async () => {
  const cookieStore = await cookies();
  cookieStore.delete('bag');
}

export const getServerUnit = async (): Promise<string | null> => {
  const cookieStore = await cookies();
  const value = cookieStore.get('selected-unit')?.value;
  return value || null;
}

export const setServerUnit = async (unit: string) => {
  const cookieStore = await cookies();
  cookieStore.set('selected-unit', unit, { httpOnly: false });
}