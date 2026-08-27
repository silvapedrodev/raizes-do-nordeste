"use server"

import { getServerBag, setServerBag as saveCookie } from "@/lib/server-cookies";
import { BagItem, BagStateData } from "@/types/bag-item";

export const setBagState = async (newState: BagStateData | BagItem[]) => {
  if (Array.isArray(newState)) {
    const currentBagState = await getServerBag();

    const mergedState: BagStateData = {
      ...currentBagState,
      bag: newState,
    };

    await saveCookie(mergedState);
    return;
  }

  await saveCookie(newState);
}