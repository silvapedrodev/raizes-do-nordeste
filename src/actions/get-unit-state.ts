"use server"

import { getServerUnit } from "@/lib/server-cookies";

export const getUnitState = async () => {
  const unit = await getServerUnit();
  return { unit };
}