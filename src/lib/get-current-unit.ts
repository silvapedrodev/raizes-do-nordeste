import { cookies } from "next/headers";
import { getProductsByUnit } from "@/lib/menu";

export const getCurrentUnitId = async () => {
  const cookieStore = await cookies();
  return cookieStore.get("selected-unit")?.value ?? "unit-001";
}

export const getProductsForCurrentUnit = async () => {
  const unitId = await getCurrentUnitId();
  return getProductsByUnit(unitId);
}