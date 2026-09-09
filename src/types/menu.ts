export type MenuItem = {
  id: string;
  productId: string;
  price?: number;
  categories?: string[];
  tags?: string[]
  available: boolean;
};

export type Menu = {
  id: string;
  unitId: string;
  items: MenuItem[];
  status: "active" | "inactive";
};