import { Coupon } from "@/types/bag-item";


export const MOCK_COUPONS: Coupon[] = [
  {
    id: "1",
    code: "PRIMEIRACOMPRA",
    discountValue: 5.00,
    expirationDate: new Date("2027-12-31"),
  },
  {
    id: "2",
    code: "CAFE5",
    discountValue: 5.00,
    minValue: 25.00,
    expirationDate: new Date("2027-12-31"),
  },
  {
    id: "3",
    code: "EXPIRADO",
    discountValue: 10.00,
    expirationDate: new Date("2023-01-01"), // Data passada (inválido)
  },
  {
    id: "4",
    code: "DOMINGO10",
    discountValue: 10.00,
    minValue: 50.00,
    expirationDate: new Date("2027-12-31"),
  },
  {
    id: "5",
    code: "TAPIOCA5",
    discountValue: 5.00,
    minValue: 20.00,
    expirationDate: new Date("2027-04-30"),
  },
  {
    id: "6",
    code: "FAMILIA20",
    discountValue: 20.00,
    minValue: 100.00,
    expirationDate: new Date("2027-12-31"),
  },
];