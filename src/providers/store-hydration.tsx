"use client"

import { getBagState } from "@/actions/get-bag-state";
import { getUnitState } from "@/actions/get-unit-state";
import { useBagStore } from "@/store/bag";
import { useUnitStore } from "@/store/unit";
import { useEffect } from "react";

export const StoreHydration = () => {

  useEffect(() => {
    const loadServerData = async () => {
      try {
        const [bagData, unitData] = await Promise.all([
          getBagState(),
          getUnitState()
        ])

        const bag = await bagData.bag;
        if (bag && bag.length > 0) {
          useBagStore.setState({ bag })
        }

        if (unitData.unit) useUnitStore.setState({ selectedUnitId: unitData.unit })

      } catch (error) {
        console.error("Erro ao hidratar os stores:", error);
      }
    };

    loadServerData();
  }, [])

  return null;
}