import { FulfillmentType } from "@/types/unit";

export type BagItem = {
  productId: string;
  quantity: number;
}

export type BagStateData = {
  bag: BagItem[];
  fulfillment: FulfillmentType | null;
  couponDiscount: number | null;
  couponCode?: string | null;
}

export type Coupon = {
  id: string;
  code: string;
  discountValue: number;
  minValue?: number;
  expirationDate: Date;
}