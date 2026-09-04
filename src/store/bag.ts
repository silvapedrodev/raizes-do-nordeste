import { BagItem } from "@/types/bag-item"
import { FulfillmentType, Unit } from "@/types/unit"
import { create } from "zustand"

type BagState = {
  // state
  bag: BagItem[]
  couponDiscount: number | null
  couponMinValue: number | null
  couponCode: string | null
  unit: Unit | null
  fulfillment: FulfillmentType | null

  // actions
  addItem: (bagItem: BagItem) => void;
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, delta: number) => void;
  setCoupon: (code: string | null, discount: number | null, minValue?: number | null) => void;
  setUnit: (unit: Unit | null) => void
  setFulfillment: (type: FulfillmentType | null) => void
  clearBag: () => void
}

export const useBagStore = create<BagState>((set) => ({
  bag: [],
  couponDiscount: null,
  couponMinValue: null,
  couponCode: null,
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

  updateQuantity: (productId, delta) => set(state => {
    const newBag = state.bag.map(item =>
      item.productId === productId
        ? { ...item, quantity: item.quantity + delta }
        : item
    );

    return { bag: newBag };
  }),

  setCoupon: (code, discount, minValue = null) => set({
    couponCode: code,
    couponDiscount: discount,
    couponMinValue: minValue
  }),

  setUnit: (unit) => set({ unit }),

  setFulfillment: (type) => set({ fulfillment: type }),

  clearBag: () =>
    set({
      bag: [],
      couponCode: null,
      couponDiscount: null,
    }),
}));