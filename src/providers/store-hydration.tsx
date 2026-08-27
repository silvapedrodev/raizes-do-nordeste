"use client"

import { getBagState } from "@/actions/get-bag-state";
import { getUnitState } from "@/actions/get-unit-state";
import { units } from "@/data/units";
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

        const bag = bagData.bag;
        if (bag && bag.length > 0) {
          useBagStore.setState({ bag })
        }

        if (bagData.fulfillment) {
          useBagStore.setState({ fulfillment: bagData.fulfillment })
        }

        if (bagData.couponDiscount !== null && bagData.couponDiscount !== undefined) {
          useBagStore.setState({ couponDiscount: bagData.couponDiscount })
        }

        if (bagData.couponCode) {
          useBagStore.setState({ couponCode: bagData.couponCode })
        }

        const unitId = unitData.unit || units[0].id;
        if (unitId) {
          const foundUnit = units.find((u) => u.id === unitId);

          if (foundUnit) {
            useUnitStore.setState({ selectedUnitId: foundUnit.id });
            useBagStore.setState({ unit: foundUnit });
          }
        }

      } catch (error) {
        console.error("Erro ao hidratar os stores:", error);

        useBagStore.setState({ bag: [] });
      }
    };

    loadServerData();
  }, [])

  return null;
}