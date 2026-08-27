import { BagItem } from "@/types/bag-item"
import { FulfillmentType, Unit } from "@/types/unit"
import { create } from "zustand"

type BagState = {
  // state
  bag: BagItem[]
  couponDiscount: number | null
  unit: Unit | null
  fulfillment: FulfillmentType | null

  // actions
  addItem: (bagItem: BagItem) => void;
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void;
  setCouponDiscount: (discount: number | null) => void;
  setUnit: (unit: Unit | null) => void
  setFulfillment: (type: FulfillmentType | null) => void
  clearBag: () => void
}

export const useBagStore = create<BagState>((set) => ({
  bag: [],
  couponDiscount: null,
  unit: null,
  fulfillment: "pickup",

  addItem: ({ productId, quantity }) => set(state => {
    const existingProduct = state.bag.find(item => item.productId === productId);
    let newBag
    if (existingProduct) {
      newBag = state.bag.map(item =>
        (item.productId === productId)
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      newBag = [...state.bag, { productId, quantity }];
    }
    return { bag: newBag }
  }),

  removeItem: (productId) => set(state => {
    const newBag = state.bag.filter(item => item.productId !== productId);
    return { bag: newBag }
  }),

  updateQuantity: (productId, quantity) => set(state => {
    const newBag = state.bag.map(item =>
      (item.productId === productId)
        ? { ...item, quantity }
        : item
    );
    return { bag: newBag }
  }),

  setCouponDiscount: (discount) => set({ couponDiscount: discount }),

  setUnit: (unit) => set({ unit }),

  setFulfillment: (type) => set({ fulfillment: type }),

  clearBag: () => set({ bag: [] })
}));