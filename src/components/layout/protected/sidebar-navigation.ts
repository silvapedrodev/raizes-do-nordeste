import {
  User, Trash2,
  Settings,
  ReceiptText,
  Info,
  Headset,
  FileText,
  ShieldCheck,
  SlidersHorizontal,
  Gift
} from "lucide-react";

export const profileNavigation = [
  {
    title: "Minha Conta",
    items: [
      {
        label: "Meu Perfil",
        href: "/perfil",
        icon: User,
      },
      {
        label: "Meus pedidos",
        href: "/pedidos",
        icon: ReceiptText,
      },
      {
        label: "Programa de Fidelidade",
        href: '#',
        icon: Gift,
      },
      {
        label: "Preferências",
        href: '#',
        icon: Settings,
      },
      {
        label: "Excluir conta",
        href: '#',
        icon: Trash2,
      },
    ],
  },
  {
    title: "Suporte",
    items: [
      {
        label: "Central de ajuda",
        href: '#',
        icon: Info,
      },
      {
        label: "Fale conosco",
        href: '#',
        icon: Headset,
      },
    ],
  },
  {
    title: "Privacidade",
    items: [
      {
        label: "Termos de uso",
        href: '/termos-de-uso',
        icon: FileText,
      },
      {
        label: "Política de privacidade",
        href: '/politica-de-privacidade',
        icon: ShieldCheck,
      },
    ],
  },
  {
    title: "Consentimentos de Dados",
    items: [
      {
        label: "Gerenciar consentimentos",
        href: '#',
        icon: SlidersHorizontal,
      },
    ],
  },
];
