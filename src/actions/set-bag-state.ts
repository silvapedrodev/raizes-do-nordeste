"use server"

import { setServerBag } from "@/lib/server-cookies";
import { BagItem } from "@/types/bag-item";

export const setBagState = async (bag: BagItem[]) => {
  await setServerBag(bag);
}