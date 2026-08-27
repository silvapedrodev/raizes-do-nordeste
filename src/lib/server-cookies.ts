import { BagStateData } from "@/types/bag-item";
import { cookies } from "next/headers";

export const getServerBag = async (): Promise<BagStateData> => {
  const cookieStore = await cookies();
  const value = cookieStore.get('bag')?.value;

  const defaultState: BagStateData = {
    bag: [],
    fulfillment: "pickup",
    couponDiscount: null,
    couponCode: null,
  };

  if (!value) return defaultState;

  try {
    const parsed = JSON.parse(value);
    if (Array.isArray(parsed)) return { ...defaultState, bag: parsed };
    return { ...defaultState, ...parsed };
  } catch {
    return defaultState;
  }
}

export const setServerBag = async (state: BagStateData) => {
  const cookieStore = await cookies();
  cookieStore.set('bag', JSON.stringify(state), { httpOnly: true });
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