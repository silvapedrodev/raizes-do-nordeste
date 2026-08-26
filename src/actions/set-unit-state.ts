"use server"

import { setServerUnit } from "@/lib/server-cookies";

export const setUnitState = async (unit: string) => {
  await setServerUnit(unit);
}