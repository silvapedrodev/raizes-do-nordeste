import { Unit } from "@/types/unit";

export const units: Unit[] = [
  {
    id: "unit-001",
    slug: "recife-centro",
    name: "Raízes do Nordeste — Recife Centro",

    address: {
      street: "Rua do Imperador",
      number: "245",
      neighborhood: "Santo Antônio",
      city: "Recife",
      state: "PE",
      zipCode: "50010-240",
    },

    openingHours: {
      monday: {
        open: "06:00",
        close: "22:00",
      },
      tuesday: {
        open: "06:00",
        close: "22:00",
      },
      wednesday: {
        open: "06:00",
        close: "22:00",
      },
      thursday: {
        open: "06:00",
        close: "22:00",
      },
      friday: {
        open: "06:00",
        close: "23:00",
      },
      saturday: {
        open: "07:00",
        close: "23:00",
      },
      sunday: {
        open: "07:00",
        close: "20:00",
      },
    },

    availableFulfillmentTypes: [
      "pickup",
      "dine-in",
    ],

    status: "active",
  },

  {
    id: "unit-002",
    slug: "sao-paulo-centro",
    name: "Raízes do Nordeste — São Paulo Centro",

    address: {
      street: "Rua Augusta",
      number: "820",
      neighborhood: "Consolação",
      city: "São Paulo",
      state: "SP",
      zipCode: "01304-001",
    },

    openingHours: {
      monday: {
        open: "07:00",
        close: "22:00",
      },
      tuesday: {
        open: "07:00",
        close: "22:00",
      },
      wednesday: {
        open: "07:00",
        close: "22:00",
      },
      thursday: {
        open: "07:00",
        close: "22:00",
      },
      friday: {
        open: "07:00",
        close: "23:00",
      },
      saturday: {
        open: "08:00",
        close: "23:00",
      },
      sunday: {
        open: "08:00",
        close: "20:00",
      },
    },

    availableFulfillmentTypes: [
      "pickup",
      "dine-in",
    ],

    status: "active",
  },
];