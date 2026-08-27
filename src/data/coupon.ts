import { Coupon } from "@/types/bag-item";


export const MOCK_COUPONS: Coupon[] = [
  {
    id: "1",
    code: "PRIMEIRACOMPRA",
    discountValue: 5.00,
    expirationDate: new Date("2027-12-31"),
  },
  {
    id: "1",
    code: "PRIMEIRACOMPRA2",
    discountValue: 20.00,
    expirationDate: new Date("2027-12-31"),
    minValue: 50.00,
  },
  {
    id: "2",
    code: "EXPIRADO",
    discountValue: 10.00,
    expirationDate: new Date("2023-01-01"), // Data passada (inválido)
  }
];