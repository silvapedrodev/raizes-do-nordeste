"use server"

import { setServerBag } from "@/lib/server-cookies";
import { BagStateData } from "@/types/bag-item";

export const setBagState = async (state: BagStateData) => {
  await setServerBag(state);
}