import { setUnitState } from "@/actions/set-unit-state";
import { create } from "zustand";

type UnitState = {
  selectedUnitId: string | null;
  setUnit: (unit: string) => Promise<void>
  initUnit: (unitId: string) => void;
}

export const useUnitStore = create<UnitState>((set) => ({
  selectedUnitId: 'unit-001',

  initUnit: (unitId: string) => set({ selectedUnitId: unitId }),

  setUnit: async (unit: string) => {
    set({ selectedUnitId: unit })
    await setUnitState(unit)
  }
}))