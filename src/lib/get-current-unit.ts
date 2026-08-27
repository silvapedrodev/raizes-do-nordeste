import { cookies } from "next/headers";
import { getProductsByUnit } from "@/lib/menu";
import { units } from "@/data/units";

export const getCurrentUnitId = async () => {
  const cookieStore = await cookies();
  return cookieStore.get("selected-unit")?.value ?? units[0].id;
}

export const getProductsForCurrentUnit = async () => {
  const unitId = await getCurrentUnitId();
  return getProductsByUnit(unitId);
}