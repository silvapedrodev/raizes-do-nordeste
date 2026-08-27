"use server"

import { getServerBag } from "@/lib/server-cookies"

export const getBagState = async () => {
  const bagData = await getServerBag();
  return bagData;
}