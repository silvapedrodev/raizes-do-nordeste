import { Coupon } from "@/types/bag-item";

export type Reward = Coupon & {
  requiredPoints: number;
};

export const AVAILABLE_REWARDS: Reward[] = [
  {
    id: "reward-001",
    code: "RAIZES10",
    discountValue: 10.00,
    minValue: 30.00,
    requiredPoints: 100,
    expirationDate: new Date("2027-12-31"),
  },
  {
    id: "reward-002",
    code: "NORDESTINO40",
    discountValue: 40.00,
    minValue: 50.00,
    requiredPoints: 380,
    expirationDate: new Date("2027-12-31"),
  },
  {
    id: "reward-003",
    code: "RAIZES15",
    discountValue: 15.00,
    minValue: 75.00,
    requiredPoints: 200,
    expirationDate: new Date("2027-12-31"),
  },
  {
    id: "reward-004",
    code: "RAIZES75",
    discountValue: 75.00,
    minValue: 120.00,
    requiredPoints: 600,
    expirationDate: new Date("2027-12-31"),
  },
  {
    id: "reward-005",
    code: "VIP100",
    discountValue: 100,
    minValue: 170.00,
    requiredPoints: 800,
    expirationDate: new Date("2027-12-31"),
  },
  {
    id: "reward-006",
    code: "RAIZES80",
    discountValue: 80.00,
    minValue: 70.00,
    requiredPoints: 900,
    expirationDate: new Date("2027-12-31"),
  },
  {
    id: "reward-007",
    code: "CASA200",
    discountValue: 200.00,
    minValue: 300.00,
    requiredPoints: 1000,
    expirationDate: new Date("2027-12-31"),
  },
];