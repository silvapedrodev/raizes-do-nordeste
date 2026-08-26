import { Menu } from "@/types/menu";

export const menus: Menu[] = [
  {
    id: "menu-001",
    unitId: "unit-001",

    items: [
      {
        id: "menu-item-001",
        productId: "prod-001",
        available: true,
      },

      {
        id: "menu-item-002",
        productId: "prod-002",
        price: 22.90,
        available: true,
      },

      {
        id: "menu-item-003",
        productId: "prod-003",
        price: 16.90,
        available: true,
      },
    ],

    status: "active",
  },

  {
    id: "menu-002",
    unitId: "unit-002",

    items: [
      {
        id: "menu-item-004",
        productId: "prod-001",
        price: 40.90,
        available: true,
      },

      {
        id: "menu-item-005",
        productId: "prod-002",
        price: 25.90,
        available: true,
      },

      {
        id: "menu-item-006",
        productId: "prod-004",
        price: 25.90,
        available: true,
        categories: ['pratos-do-dia']
      },
    ],

    status: "active",
  },
];