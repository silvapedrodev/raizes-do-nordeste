"use server"

import { getServerBag } from "@/lib/server-cookies"

export const getBagState = async () => {
  const bag = await getServerBag();
  return { bag }
}