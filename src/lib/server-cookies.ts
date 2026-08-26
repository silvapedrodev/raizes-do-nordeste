import { BagItem } from "@/types/bag-item";
import { cookies } from "next/headers";

export const getServerBag = async (): Promise<BagItem[]> => {
  const cookieStore = await cookies();
  const value = cookieStore.get('cart')?.value;
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

