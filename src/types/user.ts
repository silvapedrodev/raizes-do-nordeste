import { Coupon } from "@/types/bag-item";
import { Order } from "@/types/order";

export type LoyaltyAccount = {
  points: number;
  coupons: Coupon[];
};

export type PrivacyPreferences = {
  analyticsCookies: boolean;
  personalizedOffers: boolean;
};

export type LegalConsent = {
  termsOfUse: boolean;
  privacyPolicy: boolean;
  acceptedAt: string;
};

export type User = {
  id: string;

  name: string;
  cpf: string;
  email: string;
  phone: string;
  birthDate: string;
  password: string;

  orders: Order[];

  loyalty: LoyaltyAccount | null;

  privacy: PrivacyPreferences;

  legalConsent: LegalConsent;

  createdAt: string;
  updatedAt: string;
};