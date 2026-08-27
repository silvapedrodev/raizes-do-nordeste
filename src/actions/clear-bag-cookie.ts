"use server"

import { clearServerBag } from "@/lib/server-cookies"

export const clearBagCookie = async () => {
  await clearServerBag()
}