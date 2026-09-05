import { Coupon } from "@/types/bag-item";

export type Reward = Coupon & {
  requiredPoints: number;
};

export const AVAILABLE_REWARDS: Reward[] = [
  {
    id: "reward-001",
    code: "RAIZES5",
    discountValue: 5,
    minValue: 15,
    requiredPoints: 60,
    expirationDate: new Date("2027-12-31"),
  },
  {
    id: "reward-002",
    code: "NORDESTE15",
    discountValue: 15.00,
    minValue: 45,
    requiredPoints: 180,
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
    code: "RAIZES30",
    discountValue: 30,
    minValue: 80,
    requiredPoints: 350,
    expirationDate: new Date("2027-12-31"),
  },
  {
    id: "reward-005",
    code: "NORDESTINO40",
    discountValue: 40.00,
    minValue: 100,
    requiredPoints: 450,
    expirationDate: new Date("2027-12-31"),
  },
  {
    id: "reward-006",
    code: "RAIZES55",
    discountValue: 55,
    minValue: 130,
    requiredPoints: 600,
    expirationDate: new Date("2027-12-31"),
  },
  {
    id: "reward-007",
    code: "RAIZES75",
    discountValue: 75,
    minValue: 170,
    requiredPoints: 700,
    expirationDate: new Date("2027-12-31"),
  },
  {
    id: "reward-008",
    code: "VIP100",
    discountValue: 100,
    minValue: 220,
    requiredPoints: 850,
    expirationDate: new Date("2027-12-31"),
  },
  {
    id: "reward-009",
    code: "VIP180",
    discountValue: 180,
    minValue: 220,
    requiredPoints: 1000,
    expirationDate: new Date("2027-12-31"),
  },
  {
    id: "reward-010",
    code: "CASA150",
    discountValue: 150,
    minValue: 300.00,
    requiredPoints: 1000,
    expirationDate: new Date("2027-12-31"),
  },
];