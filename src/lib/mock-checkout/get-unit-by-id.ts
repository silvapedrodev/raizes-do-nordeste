import { units } from "@/data/units";
import { Unit } from "@/types/unit";

export const getUnitById = (unitId: string): Unit | null => {
  return units.find((unit) => unit.id === unitId) ?? null;
};