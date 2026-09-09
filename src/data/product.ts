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
        "https://images.unsplash.com/photo-1619683909216-820c3bc64b67?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1759337169580-e21b49e1e8ce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    tags: [
      "mais vendido",
      "nordestino",
      "tradicional"
    ],
    rating: {
      average: 4.9,
      count: 964,
    },
    nutrition: {
      calories: 480,
      protein: 25,
      carbohydrates: 43,
      fat: 22,
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
        "https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1464306208223-e0b4495a5553?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    description:
      "Combo completo com cuscuz, ovos, bolo de rolo e café para começar o dia.",
    price: 29.9,
    categories: [
      "combos",
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
        "https://images.unsplash.com/photo-1778448639858-ee3e9fe35ac4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1695738552233-74b57bf47cf1?q=80&w=783&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        "https://cdn.pixabay.com/photo/2022/08/25/17/41/spare-ribs-7410911_1280.jpg",
        "https://cdn.pixabay.com/photo/2022/02/12/20/20/pork-7009879_1280.jpg",
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
        "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1762631383628-77f92d18b184?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

  {
    id: "prod-007",
    slug: "canjica-cremosa",
    name: "Canjica Cremosa",
    images: {
      main: "https://cdn.pixabay.com/photo/2023/11/12/18/05/artisanal-food-and-drink-8383849_1280.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2017/08/25/21/50/food-2681519_1280.jpg",
        "https://cdn.pixabay.com/photo/2023/11/12/18/05/brazil-8383847_1280.jpg",
      ],
    },
    description:
      "Canjica de milho branco cozida lentamente com leite, leite condensado, coco e canela.",
    price: 12.9,
    categories: [
      "sobremesa",
      "festa-junina",
    ],
    tags: [
      "festa junina",
      "tradicional",
      "sazonal",
    ],
    rating: {
      average: 4.8,
      count: 387,
    },
    nutrition: {
      calories: 320,
      protein: 7,
      carbohydrates: 48,
      fat: 11,
    },
    preparationTimeMinutes: 10,
    availability: {
      type: "seasonal",
      startDate: "01/06/2027",
      endDate: "31/07/2027",
    },
    status: "inactive",
  },
  {
    id: "prod-008",
    slug: "cafe-da-manha-raizes",
    name: "Café da Manhã Raízes",
    images: {
      main: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1200&auto=format&fit=crop",
      ],
    },
    description:
      "Café da manhã completo com café coado na hora, cuscuz, ovo, queijo coalho grelhado e fruta do dia.",
    price: 29.90,
    categories: [
      "cafe-da-manha",
      "combos",
      "mais-vendidos",
    ],
    tags: [
      "cafe da manha",
      "tradicional",
      "completo",
      "nordestino",
    ],
    rating: {
      average: 4.9,
      count: 842,
    },
    nutrition: {
      calories: 560,
      protein: 23,
      carbohydrates: 62,
      fat: 24,
    },
    preparationTimeMinutes: 15,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-009",
    slug: "cafe-da-manha-completo",
    name: "Café da Manhã Completo",
    images: {
      main: "https://cdn.pixabay.com/photo/2016/11/06/23/16/breakfast-1804436_1280.jpg",
      gallery: [
        "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1200&auto=format&fit=crop",
        "https://cdn.pixabay.com/photo/2016/11/18/14/39/beans-1834984_1280.jpg",
      ],
    },
    description:
      "Um café da manhã completo e farto com café coado, cuscuz, tapioca, ovos, queijo coalho, bolo regional, fruta do dia e suco de laranja.",
    price: 42.90,
    categories: [
      "cafe-da-manha",
      "combos",
    ],
    tags: [
      "cafe da manha",
      "completo",
      "tradicional",
      "nordestino",
      "para compartilhar",
    ],
    rating: {
      average: 4.9,
      count: 634,
    },
    nutrition: {
      calories: 920,
      protein: 32,
      carbohydrates: 108,
      fat: 37,
    },
    preparationTimeMinutes: 20,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-010",
    slug: "cafe-da-manha-para-dois",
    name: "Café da Manhã para Dois",
    images: {
      main: "https://cdn.pixabay.com/photo/2016/05/17/14/52/breakfast-1398259_1280.jpg",
      gallery: [
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop",
        "https://cdn.pixabay.com/photo/2016/11/21/11/57/bowl-1844894_1280.jpg",
      ],
    },
    description:
      "Café da manhã generoso para compartilhar, com dois cafés coados, dois cuscuzes, duas tapiocas, ovos, queijo coalho, bolo regional e frutas do dia.",
    price: 64.90,
    categories: [
      "cafe-da-manha",
      "combos",
      "para-compartilhar",
    ],
    tags: [
      "para dois",
      "cafe da manha",
      "completo",
      "tradicional",
      "nordestino",
    ],
    rating: {
      average: 4.9,
      count: 428,
    },
    nutrition: {
      calories: 1650,
      protein: 58,
      carbohydrates: 190,
      fat: 68,
    },
    preparationTimeMinutes: 25,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-011",
    slug: "cuscuz-charque-queijo-coalho",
    name: "Cuscuz com Charque e Queijo Coalho",
    images: {
      main: "https://cdn.pixabay.com/photo/2020/07/04/21/45/cuscus-5371034_1280.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2015/09/29/18/16/cous-cous-964298_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/08/04/17/37/couscous-1569590_1280.jpg",
      ],
    },
    description:
      "Cuscuz de milho quentinho servido com charque desfiada e queijo coalho dourado, finalizado com um toque de manteiga de garrafa.",
    price: 23.90,
    categories: [
      "cuscuz",
      "cafe-da-manha",
      "almoco",
    ],
    tags: [
      "tradicional",
      "nordestino",
      "charque",
      "queijo coalho",
    ],
    rating: {
      average: 4.8,
      count: 756,
    },
    nutrition: {
      calories: 510,
      protein: 27,
      carbohydrates: 45,
      fat: 24,
    },
    preparationTimeMinutes: 18,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-012",
    slug: "cuscuz-nordestino-da-casa",
    name: "Cuscuz Nordestino da Casa",
    images: {
      main: "https://images.unsplash.com/photo-1582576169831-5af7150192ad?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gallery: [
        "https://images.unsplash.com/photo-1782931608912-ccda83062946?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1710425190785-1bf888cf24e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    description:
      "Cuscuz de milho preparado à moda da casa, servido com ovos, queijo coalho, carne de sol desfiada e manteiga de garrafa.",
    price: 26.90,
    categories: [
      "cuscuz",
      "cafe-da-manha",
      "almoco",
    ],
    tags: [
      "especial da casa",
      "tradicional",
      "nordestino",
      "refeicao completa",
    ],
    rating: {
      average: 4.9,
      count: 683,
    },
    nutrition: {
      calories: 590,
      protein: 31,
      carbohydrates: 47,
      fat: 29,
    },
    preparationTimeMinutes: 20,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-013",
    slug: "tapioca-frango-queijo-coalho",
    name: "Tapioca de Frango com Queijo Coalho",
    images: {
      main: "https://cdn.pixabay.com/photo/2020/08/28/22/26/crepe-5525782_1280.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2019/07/07/12/45/crepe-4322435_1280.jpg",
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1200&auto=format&fit=crop",
      ],
    },
    description:
      "Tapioca quentinha recheada com frango desfiado temperado e queijo coalho derretido.",
    price: 19.90,
    categories: [
      "tapioca",
      "cafe-da-manha",
      "lanches",
    ],
    tags: [
      "tradicional",
      "frango",
      "queijo coalho",
    ],
    rating: {
      average: 4.7,
      count: 512,
    },
    nutrition: {
      calories: 430,
      protein: 27,
      carbohydrates: 42,
      fat: 17,
    },
    preparationTimeMinutes: 15,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-014",
    slug: "tapioca-carne-seca-queijo-coalho",
    name: "Tapioca de Carne Seca com Queijo Coalho",
    images: {
      main: "https://cdn.pixabay.com/photo/2019/07/07/12/45/crepe-4322435_1280.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2015/02/18/15/41/pancake-640871_1280.jpg",
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1200&auto=format&fit=crop",
      ],
    },
    description:
      "Tapioca macia recheada com carne seca desfiada e queijo coalho derretido, com um toque de manteiga de garrafa.",
    price: 21.90,
    categories: [
      "tapioca",
      "cafe-da-manha",
      "lanches",
    ],
    tags: [
      "tradicional",
      "carne seca",
      "queijo coalho",
      "nordestino",
    ],
    rating: {
      average: 4.8,
      count: 647,
    },
    nutrition: {
      calories: 470,
      protein: 29,
      carbohydrates: 41,
      fat: 21,
    },
    preparationTimeMinutes: 17,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-016",
    slug: "ovo-frito",
    name: "Ovo Frito",
    images: {
      main: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?q=80&w=1200&auto=format&fit=crop",
      ],
    },
    description:
      "Ovo frito preparado na hora, com gema macia e bordas levemente douradas.",
    price: 4.00,
    categories: [
      "acompanhamentos",
      "cafe-da-manha",
    ],
    tags: [
      "tradicional",
      "acompanhamento",
    ],
    rating: {
      average: 4.7,
      count: 286,
    },
    nutrition: {
      calories: 90,
      protein: 6,
      carbohydrates: 1,
      fat: 7,
    },
    preparationTimeMinutes: 5,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-018",
    slug: "queijo-coalho-grelhado",
    name: "Queijo Coalho Grelhado",
    images: {
      main: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        "https://cdn.pixabay.com/photo/2016/05/07/20/03/cheese-1378104_1280.jpg",
        "https://cdn.pixabay.com/photo/2020/05/08/02/20/freeze-dried-bean-curd-5143853_1280.jpg",
      ],
    },
    description:
      "Queijo coalho grelhado na hora, dourado por fora e macio por dentro, com sabor marcante e tradicional.",
    price: 7.00,
    categories: [
      "acompanhamentos",
      "cafe-da-manha",
    ],
    tags: [
      "tradicional",
      "nordestino",
      "queijo coalho",
      "grelhado",
    ],
    rating: {
      average: 4.9,
      count: 418,
    },
    nutrition: {
      calories: 190,
      protein: 12,
      carbohydrates: 2,
      fat: 15,
    },
    preparationTimeMinutes: 7,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-019",
    slug: "bolo-de-macaxeira",
    name: "Bolo de Macaxeira",
    images: {
      main: "https://cdn.pixabay.com/photo/2021/05/27/21/26/cake-6289291_1280.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2023/09/25/07/54/lemon-cake-8274419_1280.jpg",
        "https://cdn.pixabay.com/photo/2018/08/30/20/47/gugelhupf-3643259_1280.jpg",
      ],
    },
    description:
      "Bolo de macaxeira macio e cremoso, preparado com coco e assado até formar uma camada dourada por cima.",
    price: 9.90,
    categories: [
      "bolo",
      "sobremesa",
      "cafe-da-manha",
    ],
    tags: [
      "tradicional",
      "nordestino",
      "macaxeira",
      "coco",
    ],
    rating: {
      average: 4.9,
      count: 731,
    },
    nutrition: {
      calories: 340,
      protein: 4,
      carbohydrates: 48,
      fat: 15,
    },
    preparationTimeMinutes: 5,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-020",
    slug: "bolo-souza-leao",
    name: "Bolo Souza Leão",
    images: {
      main: "https://cdn.pixabay.com/photo/2014/07/21/23/00/orange-cake-398966_1280.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2014/02/09/13/22/cake-262780_1280.jpg",
        "https://images.unsplash.com/photo-1609355109553-3bb67c76b1f7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    description:
      "Tradicional bolo pernambucano preparado com massa de mandioca, leite de coco, manteiga e ovos, com textura macia e cremosa.",
    price: 10.90,
    categories: [
      "bolo",
      "sobremesa",
      "cafe-da-manha",
    ],
    tags: [
      "tradicional",
      "pernambucano",
      "receita regional",
      "especial da casa",
    ],
    rating: {
      average: 4.8,
      count: 384,
    },
    nutrition: {
      calories: 360,
      protein: 5,
      carbohydrates: 50,
      fat: 16,
    },
    preparationTimeMinutes: 5,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-021",
    slug: "bolo-de-noiva",
    name: "Bolo de Noiva",
    images: {
      main: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1640403413914-a112e78e4803?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1764944663598-8fc800cda25c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    description:
      "Clássico bolo de noiva pernambucano, rico em frutas cristalizadas e especiarias, com sabor intenso e textura úmida.",
    price: 10.90,
    categories: [
      "bolo",
      "sobremesa",
      "cafe-da-manha",
    ],
    tags: [
      "tradicional",
      "pernambucano",
      "receita regional",
      "frutas cristalizadas",
    ],
    rating: {
      average: 4.7,
      count: 296,
    },
    nutrition: {
      calories: 390,
      protein: 5,
      carbohydrates: 52,
      fat: 18,
    },
    preparationTimeMinutes: 5,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-022",
    slug: "bolo-barra-branca",
    name: "Bolo Barra Branca",
    images: {
      main: "https://images.unsplash.com/photo-1652284297803-4dae3eac9edc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gallery: [
        "https://images.unsplash.com/photo-1652284300485-c6ae2f5f071a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1628878639854-cdd283c9149b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    description:
      "Bolo caseiro de textura macia e sabor delicado, uma receita tradicional perfeita para acompanhar o café.",
    price: 9.90,
    categories: [
      "bolo",
      "cafe-da-manha",
      "sobremesa",
    ],
    tags: [
      "tradicional",
      "caseiro",
      "pernambucano",
    ],
    rating: {
      average: 4.6,
      count: 218,
    },
    nutrition: {
      calories: 330,
      protein: 5,
      carbohydrates: 46,
      fat: 14,
    },
    preparationTimeMinutes: 5,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-023",
    slug: "arrumadinho",
    name: "Arrumadinho",
    images: {
      main: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
      ],
    },
    description:
      "Prato típico nordestino com feijão-verde, carne de sol desfiada, farofa crocante, vinagrete e macaxeira, servido em porções separadas.",
    price: 32.90,
    categories: [
      "pratos-principais",
      "almoco",
      "comida-nordestina",
    ],
    tags: [
      "tradicional",
      "pernambucano",
      "nordestino",
      "carne de sol",
      "refeicao completa",
    ],
    rating: {
      average: 4.9,
      count: 527,
    },
    nutrition: {
      calories: 720,
      protein: 38,
      carbohydrates: 68,
      fat: 34,
    },
    preparationTimeMinutes: 25,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-024",
    slug: "carne-seca-com-jerimum",
    name: "Carne Seca com Jerimum",
    images: {
      main: "https://images.unsplash.com/photo-1478188555333-9e4d111377a5?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gallery: [
        "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1200&auto=format&fit=crop",
      ],
    },
    description:
      "Carne seca desfiada e bem temperada, acompanhada de jerimum cremoso e finalizada com manteiga de garrafa.",
    price: 34.90,
    categories: [
      "pratos-principais",
      "almoco",
      "comida-nordestina",
    ],
    tags: [
      "tradicional",
      "nordestino",
      "pernambucano",
      "carne seca",
      "jerimum",
    ],
    rating: {
      average: 4.8,
      count: 438,
    },
    nutrition: {
      calories: 680,
      protein: 39,
      carbohydrates: 55,
      fat: 31,
    },
    preparationTimeMinutes: 25,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-025",
    slug: "fava-com-charque",
    name: "Fava com Charque",
    images: {
      main: "https://cdn.pixabay.com/photo/2023/12/15/18/07/bean-8451254_1280.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2015/05/11/21/34/dried-beans-763158_1280.jpg",
        "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1200&auto=format&fit=crop",
      ],
    },
    description:
      "Fava cozida lentamente e bem temperada, servida com charque desfiada, cebola e ervas, acompanhada de farofa crocante.",
    price: 32.90,
    categories: [
      "pratos-principais",
      "almoco",
      "comida-nordestina",
    ],
    tags: [
      "tradicional",
      "nordestino",
      "pernambucano",
      "charque",
      "caseiro",
    ],
    rating: {
      average: 4.7,
      count: 316,
    },
    nutrition: {
      calories: 690,
      protein: 36,
      carbohydrates: 61,
      fat: 32,
    },
    preparationTimeMinutes: 25,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-027",
    slug: "chambaril",
    name: "Chambaril",
    images: {
      main: "https://images.unsplash.com/photo-1608500218861-01091cdc501e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gallery: [
        "https://images.unsplash.com/photo-1627054886476-0cdee47fde3d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1664741319755-920c2c616bdb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    description:
      "Tradicional chambaril cozido lentamente até ficar macio, servido com molho encorpado e acompanhamentos típicos da culinária nordestina.",
    price: 42.90,
    categories: [
      "almoco",
      "prato-principal",
      "comida-nordestina",
    ],
    tags: [
      "tradicional",
      "nordestino",
      "regional",
      "especialidade da casa",
      "premium",
    ],
    rating: {
      average: 4.2,
      count: 198,
    },
    nutrition: {
      calories: 820,
      protein: 52,
      carbohydrates: 58,
      fat: 39,
    },
    preparationTimeMinutes: 35,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-028",
    slug: "cartola",
    name: "Cartola",
    images: {
      main: "https://images.unsplash.com/photo-1724024699980-6a498f673182?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gallery: [
        "https://images.unsplash.com/photo-1775377262418-24c4d1c89574?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1775377262570-de45f1bf28ae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    description:
      "Sobremesa tradicional pernambucana com banana dourada, queijo derretido, açúcar e canela, servida quentinha.",
    price: 16.90,
    categories: [
      "sobremesa",
      "comida-nordestina",
    ],
    tags: [
      "tradicional",
      "pernambucano",
      "nordestino",
      "banana",
      "queijo",
    ],
    rating: {
      average: 4.9,
      count: 512,
    },
    nutrition: {
      calories: 420,
      protein: 10,
      carbohydrates: 54,
      fat: 19,
    },
    preparationTimeMinutes: 10,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-029",
    slug: "doce-de-jaca",
    name: "Doce de Jaca",
    images: {
      main: "https://images.unsplash.com/photo-1613478223458-9bdf45940ef1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gallery: [
        "https://images.unsplash.com/photo-1624711078028-19ed36a91f02?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://cdn.pixabay.com/photo/2014/10/26/17/47/jam-504176_1280.jpg",
      ],
    },
    description:
      "Doce caseiro de jaca preparado lentamente com açúcar, preservando o sabor e o aroma marcantes da fruta.",
    price: 9.90,
    categories: [
      "sobremesa",
      "doces",
    ],
    tags: [
      "tradicional",
      "caseiro",
      "nordestino",
      "regional",
      "jaca",
    ],
    rating: {
      average: 4.7,
      count: 263,
    },
    nutrition: {
      calories: 210,
      protein: 1,
      carbohydrates: 52,
      fat: 0,
    },
    preparationTimeMinutes: 5,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-030",
    slug: "doce-de-caju",
    name: "Doce de Caju",
    images: {
      main: "https://cdn.pixabay.com/photo/2014/10/26/17/47/jam-504176_1280.jpg",
      gallery: [
        "https://images.unsplash.com/photo-1649103989989-6980dbf74dda?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1764607080323-f9c760408cd3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    description:
      "Doce caseiro de caju preparado lentamente com açúcar, resultando em uma sobremesa macia, aromática e cheia de sabor regional.",
    price: 9.90,
    categories: [
      "sobremesa",
      "doces",
      "comida-nordestina",
    ],
    tags: [
      "tradicional",
      "caseiro",
      "nordestino",
      "regional",
      "caju",
    ],
    rating: {
      average: 4.8,
      count: 294,
    },
    nutrition: {
      calories: 220,
      protein: 1,
      carbohydrates: 54,
      fat: 0,
    },
    preparationTimeMinutes: 5,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-031",
    slug: "pudim-de-macaxeira",
    name: "Pudim de Macaxeira",
    images: {
      main: "https://images.unsplash.com/photo-1532556660262-1c45d5fae825?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gallery: [
        "https://images.unsplash.com/photo-1646587191367-a8cbc34e6fd1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1773632996592-e150b9ed5059?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    description:
      "Pudim cremoso de macaxeira com textura delicada e sabor marcante, coberto com uma calda de caramelo.",
    price: 11.90,
    categories: [
      "sobremesa",
      "doces",
      "comida-nordestina",
    ],
    tags: [
      "tradicional",
      "caseiro",
      "nordestino",
      "macaxeira",
      "caramelo",
    ],
    rating: {
      average: 4.8,
      count: 347,
    },
    nutrition: {
      calories: 330,
      protein: 5,
      carbohydrates: 48,
      fat: 13,
    },
    preparationTimeMinutes: 5,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-032",
    slug: "sorvete-de-caja",
    name: "Sorvete de Cajá",
    images: {
      main: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=708&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gallery: [
        "https://images.unsplash.com/photo-1529790912688-db5fec227b5a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1613489977845-8ec7e0ff3ae0?q=80&w=779&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    description:
      "Sorvete cremoso de cajá, com sabor tropical, levemente ácido e refrescante.",
    price: 10.90,
    categories: [
      "sobremesa",
      "sorvetes",
    ],
    tags: [
      "regional",
      "nordestino",
      "tropical",
      "cajá",
      "refrescante",
    ],
    rating: {
      average: 4.8,
      count: 318,
    },
    nutrition: {
      calories: 180,
      carbohydrates: 28,
      fat: 6,
      protein: 3,
    },
    preparationTimeMinutes: 3,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-034",
    slug: "sorvete-de-graviola",
    name: "Sorvete de Graviola",
    images: {
      main: "https://cdn.pixabay.com/photo/2019/07/28/04/24/sweets-4367919_1280.jpg",
      gallery: [
        "https://images.unsplash.com/photo-1707895601623-a0115d2bd91e?q=80&w=734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1568903880699-b53f3e0c2b96?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    description:
      "Sorvete cremoso de graviola, com textura suave e sabor tropical delicadamente adocicado.",
    price: 10.90,
    categories: [
      "sobremesa",
      "sorvetes",
    ],
    tags: [
      "regional",
      "nordestino",
      "tropical",
      "graviola",
      "cremoso",
    ],
    rating: {
      average: 4.8,
      count: 281,
    },
    nutrition: {
      calories: 185,
      carbohydrates: 29,
      fat: 6,
      protein: 3,
    },
    preparationTimeMinutes: 3,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-035",
    slug: "cafe-coado",
    name: "Café Coado",
    images: {
      main: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop",
      ],
    },
    description:
      "Café coado na hora, servido quente e preparado com grãos selecionados para acompanhar o melhor da cozinha nordestina.",
    price: 6.90,
    categories: [
      "bebida",
      "cafes",
      "bebidas-quentes",
    ],
    tags: [
      "tradicional",
      "cafe da manha",
      "coado",
    ],
    rating: {
      average: 4.9,
      count: 924,
    },
    nutrition: {
      calories: 5,
      protein: 0
    },
    preparationTimeMinutes: 5,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-036",
    slug: "cafe-expresso",
    name: "Café Expresso",
    images: {
      main: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
      ],
    },
    description:
      "Café expresso encorpado, preparado na hora com aroma intenso e crema delicada.",
    price: 6.50,
    categories: [
      "bebida",
      "cafes",
      "bebidas-quentes",
    ],
    tags: [
      "tradicional",
      "cafe",
      "expresso",
    ],
    rating: {
      average: 4.7,
      count: 687,
    },
    nutrition: {
      calories: 5,
      protein: 0
    },
    preparationTimeMinutes: 4,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-037",
    slug: "cafe-nordestino",
    name: "Café Nordestino",
    images: {
      main: "https://cdn.pixabay.com/photo/2019/07/18/04/23/coffe-4345449_1280.jpg",
      gallery: [
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop",
      ],
    },
    description:
      "Café especial da casa, preparado com café coado e servido com um toque de rapadura, trazendo o sabor marcante do Nordeste.",
    price: 10.90,
    categories: [
      "bebida",
      "cafes",
      "bebidas-quentes",
    ],
    tags: [
      "especialidade da casa",
      "nordestino",
      "tradicional",
      "rapadura",
    ],
    rating: {
      average: 4.9,
      count: 463,
    },
    nutrition: {
      calories: 55,
      protein: 0,
      carbohydrates: 14,
    },
    preparationTimeMinutes: 5,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-038",
    slug: "cha-de-erva-cidreira",
    name: "Chá de Erva-Cidreira",
    images: {
      main: "https://cdn.pixabay.com/photo/2016/09/21/22/00/tea-1685847_1280.jpg",
      gallery: [
        "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1200&auto=format&fit=crop",
      ],
    },
    description:
      "Chá quente de erva-cidreira, preparado na hora e servido aromático e reconfortante.",
    price: 6.90,
    categories: [
      "bebida",
      "chas",
      "bebidas-quentes",
    ],
    tags: [
      "tradicional",
      "natural",
      "erva-cidreira",
    ],
    rating: {
      average: 4.7,
      count: 214,
    },
    nutrition: {
      calories: 2,
      protein: 0
    },
    preparationTimeMinutes: 6,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-039",
    slug: "cha-de-capim-santo",
    name: "Chá de Capim-Santo",
    images: {
      main: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=1200&auto=format&fit=crop",
      ],
    },
    description:
      "Chá quente de capim-santo, preparado com folhas aromáticas e servido na hora.",
    price: 6.90,
    categories: [
      "bebida",
      "chas",
      "bebidas-quentes",
    ],
    tags: [
      "tradicional",
      "natural",
      "capim-santo",
      "regional",
    ],
    rating: {
      average: 4.8,
      count: 197,
    },
    nutrition: {
      calories: 2,
      protein: 0
    },
    preparationTimeMinutes: 6,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-040",
    slug: "leite-maltado-tradicional",
    name: "Leite Maltado Tradicional",
    images: {
      main: "https://images.unsplash.com/photo-1609246280917-339404083c49?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gallery: [
        "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=1200&auto=format&fit=crop",
      ],
    },
    description:
      "Bebida cremosa e gelada à base de leite e malte, preparada na hora e servida bem gelada.",
    price: 12.90,
    categories: [
      "bebida",
      "vitaminas",
      "bebidas-geladas",
    ],
    tags: [
      "cremoso",
      "gelado",
      "tradicional",
      "malte",
    ],
    rating: {
      average: 4.7,
      count: 286,
    },
    nutrition: {
      calories: 320,
      protein: 10,
      carbohydrates: 43,
      fat: 12,
    },
    preparationTimeMinutes: 7,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-041",
    slug: "leite-maltado-com-chocolate",
    name: "Leite Maltado com Chocolate",
    images: {
      main: "https://cdn.pixabay.com/photo/2016/10/13/11/44/chocolates-1737503_1280.jpg",
      gallery: [
        "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1200&auto=format&fit=crop",
      ],
    },
    description:
      "Leite maltado cremoso batido com chocolate, servido gelado para uma bebida encorpada e saborosa.",
    price: 14.90,
    categories: [
      "bebida",
      "vitaminas",
      "bebidas-geladas",
    ],
    tags: [
      "chocolate",
      "cremoso",
      "gelado",
      "malte",
    ],
    rating: {
      average: 4.8,
      count: 354,
    },
    nutrition: {
      calories: 390,
      protein: 11,
      carbohydrates: 55,
      fat: 14,
    },
    preparationTimeMinutes: 7,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-042",
    slug: "suco-natural",
    name: "Suco Natural",
    images: {
      main: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=1200&auto=format&fit=crop",
      ],
    },
    description:
      "Suco natural preparado na hora com frutas selecionadas. Consulte os sabores disponíveis.",
    price: 9.90,
    categories: [
      "bebida",
      "sucos",
      "bebidas-geladas",
    ],
    tags: [
      "natural",
      "frutas",
      "refrescante",
      "feito na hora",
    ],
    rating: {
      average: 4.8,
      count: 672,
    },
    nutrition: {
      calories: 120,
      protein: 1,
      carbohydrates: 28,
    },
    preparationTimeMinutes: 5,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-043",
    slug: "vitamina",
    name: "Vitamina",
    images: {
      main: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gallery: [
        "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1746203103061-ada107c8a584?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    description:
      "Vitamina cremosa preparada na hora com leite e frutas selecionadas. Consulte os sabores disponíveis.",
    price: 13.90,
    categories: [
      "bebida",
      "vitaminas",
      "bebidas-geladas",
    ],
    tags: [
      "cremoso",
      "natural",
      "frutas",
      "feito na hora",
    ],
    rating: {
      average: 4.8,
      count: 438,
    },
    nutrition: {
      calories: 260,
      protein: 8,
      carbohydrates: 39,
      fat: 8,
    },
    preparationTimeMinutes: 7,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-044",
    slug: "umbuzada",
    name: "Umbuzada",
    images: {
      main: "https://images.unsplash.com/photo-1662130187270-a4d52c700eb6?q=80&w=1102&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gallery: [
        "https://images.unsplash.com/photo-1623400518626-6ea9ab64c5ec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1717239548598-1c9af5b7efff?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    description:
      "Bebida tradicional nordestina preparada com umbu, leite e açúcar, de sabor levemente ácido, doce e refrescante.",
    price: 12.90,
    categories: [
      "bebidas",
      "sucos",
      "bebidas-geladas",
      "comida-nordestina",
    ],
    tags: [
      "tradicional",
      "nordestino",
      "regional",
      "umbu",
      "refrescante",
    ],
    rating: {
      average: 4.9,
      count: 529,
    },
    nutrition: {
      calories: 210,
      protein: 5,
      carbohydrates: 34,
      fat: 6,
    },
    preparationTimeMinutes: 7,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-045",
    slug: "agua-de-coco",
    name: "Água de Coco",
    images: {
      main: "https://cdn.pixabay.com/photo/2019/05/22/11/20/coconut-4221288_1280.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2018/01/05/04/44/food-3062139_1280.jpg",
        "https://images.unsplash.com/photo-1625535927032-dd38fdf54f84?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    description:
      "Água de coco gelada, leve e refrescante, perfeita para acompanhar uma refeição ou lanche.",
    price: 9.90,
    categories: [
      "bebida",
      "bebidas-geladas",
    ],
    tags: [
      "natural",
      "refrescante",
      "coco",
      "tropical",
    ],
    rating: {
      average: 4.8,
      count: 591,
    },
    nutrition: {
      calories: 45,
      protein: 1,
      carbohydrates: 9,
    },
    preparationTimeMinutes: 3,
    availability: {
      type: "available",
    },
    status: "active",
  },
  {
    id: "prod-046",
    slug: "pamonha",
    name: "Pamonha",
    images: {
      main: "https://images.unsplash.com/photo-1578365969259-12a673fc9d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gallery: [
        "https://images.unsplash.com/photo-1707535347910-471dccf5b37b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1779889237399-e818b36d5737?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    description:
      "Pamonha tradicional preparada com milho verde ralado, leite e açúcar, cozida lentamente até ficar macia e cremosa.",
    price: 10.90,
    categories: [
      "sobremesa",
      "festa-junina",
    ],
    tags: [
      "festa junina",
      "tradicional",
      "milho",
      "regional",
      "sazonal",
    ],
    rating: {
      average: 4.9,
      count: 426,
    },
    nutrition: {
      calories: 280,
      protein: 5,
      carbohydrates: 48,
      fat: 8,
    },
    preparationTimeMinutes: 15,
    availability: {
      type: "seasonal",
      startDate: "01/06/2027",
      endDate: "31/07/2027",
    },
    status: "inactive",
  },
  {
    id: "prod-047",
    slug: "cocada-de-forno",
    name: "Cocada de Forno",
    images: {
      main: "https://images.unsplash.com/photo-1676364000560-eefe24b03c45?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gallery: [
        "https://images.unsplash.com/photo-1662490880155-700ebafbae4c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1606814087497-cd8c067c1d7b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    description:
      "Cocada assada lentamente no forno, preparada com coco ralado, leite condensado e açúcar, com superfície dourada e interior macio.",
    price: 11.90,
    categories: [
      "sobremesa",
      "festa-junina",
    ],
    tags: [
      "festa junina",
      "tradicional",
      "coco",
      "caseiro",
      "regional",
      "sazonal",
    ],
    rating: {
      average: 4.8,
      count: 318,
    },
    nutrition: {
      calories: 310,
      protein: 4,
      carbohydrates: 43,
      fat: 14,
    },
    preparationTimeMinutes: 15,
    availability: {
      type: "seasonal",
      startDate: "01/06/2027",
      endDate: "31/07/2027",
    },
    status: "inactive",
  },
  {
    id: "prod-048",
    slug: "pe-de-moleque",
    name: "Pé de Moleque",
    images: {
      main: "https://cdn.pixabay.com/photo/2017/04/04/16/48/candy-2201931_1280.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2016/12/04/16/43/confectionery-1882035_1280.jpg",
        "https://images.unsplash.com/photo-1772984969824-26dd129c9df0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    description:
      "Doce tradicional de amendoim caramelizado com açúcar, preparado de forma artesanal até ficar crocante e saboroso.",
    price: 8.90,
    categories: [
      "sobremesa",
      "festa-junina",
    ],
    tags: [
      "festa junina",
      "tradicional",
      "amendoim",
      "crocante",
      "regional",
      "sazonal",
    ],
    rating: {
      average: 4.9,
      count: 583,
    },
    nutrition: {
      calories: 230,
      protein: 6,
      carbohydrates: 27,
      fat: 12,
    },
    preparationTimeMinutes: 5,
    availability: {
      type: "seasonal",
      startDate: "01/06/2027",
      endDate: "31/07/2027",
    },
    status: "inactive",
  }
];