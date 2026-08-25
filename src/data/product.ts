import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "prod-001",
    slug: "cuscuz-nordestino",
    name: "Cuscuz Nordestino",
    images: {
      main: "https://images.unsplash.com/photo-1673447296882-4ebd121682f6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gallery: [
        "https://images.unsplash.com/photo-1582576169831-5af7150192ad?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1777613112957-87db054297d8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    description:
      "Cuscuz de milho servido com manteiga de garrafa e queijo coalho.",
    price: 18.9,
    categories: [
      "cuscuz",
      "cafe-da-manha",
      "mais-vendidos",
      "pratos-do-dia",
    ],
    tags: ["mais vendido", "tradicional"],
    rating: {
      average: 4.8,
      count: 1287,
    },
    nutrition: {
      calories: 420,
      protein: 14,
      carbohydrates: 48,
      fat: 18,
    },
    preparationTimeMinutes: 15,
    availability: {
      type: "available",
    },
    status: "active",
  },

  {
    id: "prod-002",
    slug: "tapioca-carne-de-sol",
    name: "Tapioca de Carne de Sol",
    images: {
      main: "https://images.unsplash.com/photo-1676515231566-eb804ac487c1?q=80&w=1043&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gallery: [
        "/assets/products/tapioca-carne-de-sol-01.webp",
        "/assets/products/tapioca-carne-de-sol-02.webp",
      ],
    },
    description:
      "Tapioca crocante recheada com carne de sol, queijo coalho e cebola.",
    price: 22.9,
    categories: [
      "tapioca",
      "cafe-da-manha",
      "mais-vendidos",
      "pratos-do-dia",
    ],
    tags: ["mais vendido", "nordestino"],
    rating: {
      average: 4.7,
      count: 982,
    },
    nutrition: {
      calories: 510,
      protein: 24,
      carbohydrates: 42,
      fat: 24,
    },
    preparationTimeMinutes: 18,
    availability: {
      type: "available",
    },
    status: "active",
  },

  {
    id: "prod-003",
    slug: "combo-cafe-da-manha",
    name: "Combo Café da Manhã",
    images: {
      main: "https://images.unsplash.com/photo-1538220856186-0be0e085984d?q=80&w=763&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gallery: [
        "/assets/products/combo-cafe-da-manha-01.webp",
        "/assets/products/combo-cafe-da-manha-02.webp",
      ],
    },
    description:
      "Combo completo com cuscuz, ovos, bolo de rolo e café para começar o dia.",
    price: 29.9,
    categories: [
      "combo",
      "cafe-da-manha",
      "mais-vendidos",
    ],
    tags: ["mais vendido", "combo"],
    rating: {
      average: 4.6,
      count: 1104,
    },
    nutrition: {
      calories: 680,
      protein: 22,
      carbohydrates: 76,
      fat: 28,
    },
    preparationTimeMinutes: 20,
    availability: {
      type: "available",
    },
    status: "active",
  },

  {
    id: "prod-004",
    slug: "bolo-de-rolo",
    name: "Bolo de Rolo",
    images: {
      main: "https://images.unsplash.com/photo-1593872423141-bb230bd352c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gallery: [
        "/assets/products/bolo-de-rolo-01.webp",
        "/assets/products/bolo-de-rolo-02.webp",
      ],
    },
    description:
      "Tradicional bolo de rolo pernambucano com finas camadas de massa e goiabada.",
    price: 16.9,
    categories: [
      "bolo",
      "sobremesa",
      "mais-vendidos",
    ],
    tags: ["mais vendido", "tradicional", "pernambucano"],
    rating: {
      average: 4.9,
      count: 856,
    },
    nutrition: {
      calories: 320,
      protein: 4,
      carbohydrates: 52,
      fat: 11,
    },
    preparationTimeMinutes: 8,
    availability: {
      type: "available",
    },
    status: "active",
  },

  {
    id: "prod-005",
    slug: "carne-de-sol-com-macaxeira",
    name: "Carne de Sol com Macaxeira",
    images: {
      main: "https://images.unsplash.com/photo-1737138472959-34736ad4d12e?q=80&w=684&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gallery: [
        "/assets/products/carne-de-sol-macaxeira-01.webp",
        "/assets/products/carne-de-sol-macaxeira-02.webp",
      ],
    },
    description:
      "Carne de sol grelhada acompanhada de macaxeira, queijo coalho e vinagrete.",
    price: 39.9,
    categories: [
      "almoco",
      "prato-principal",
      "pratos-do-dia",
    ],
    tags: ["especial do dia", "nordestino"],
    rating: {
      average: 4.8,
      count: 743,
    },
    nutrition: {
      calories: 720,
      protein: 42,
      carbohydrates: 58,
      fat: 32,
    },
    preparationTimeMinutes: 28,
    availability: {
      type: "available",
    },
    status: "active",
  },

  {
    id: "prod-006",
    slug: "baiao-de-dois",
    name: "Baião de Dois",
    images: {
      main: "https://images.unsplash.com/photo-1779592639268-acee1edc1133?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gallery: [
        "/assets/products/baiao-de-dois-01.webp",
        "/assets/products/baiao-de-dois-02.webp",
      ],
    },
    description:
      "Arroz e feijão preparados juntos com queijo coalho, carne de sol e temperos.",
    price: 34.9,
    categories: [
      "almoco"
    ],
    tags: ["especial do dia", "tradicional"],
    rating: {
      average: 4.7,
      count: 621,
    },
    nutrition: {
      calories: 690,
      protein: 31,
      carbohydrates: 82,
      fat: 25,
    },
    preparationTimeMinutes: 25,
    availability: {
      type: "available",
    },
    status: "active",
  },
];

export const product: Product = {
  id: "prod-001",
  slug: "cuscuz-nordestino",
  name: "Cuscuz Nordestino",
  images: {
    main: "https://images.unsplash.com/photo-1673447296882-4ebd121682f6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1582576169831-5af7150192ad?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1777613112957-87db054297d8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  description:
    "Cuscuz de milho servido com manteiga de garrafa e queijo coalho.",
  price: 18.9,
  categories: [
    "cuscuz",
    "cafe-da-manha",
    "mais-vendidos",
    "pratos-do-dia",
  ],
  tags: ["mais vendido", "tradicional"],
  rating: {
    average: 4.8,
    count: 1287,
  },
  nutrition: {
    calories: 420,
    protein: 14,
    carbohydrates: 48,
    fat: 18,
  },
  preparationTimeMinutes: 15,
  availability: {
    type: "available",
  },
  status: "active",
}