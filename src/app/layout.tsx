import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { StoreHydration } from "@/providers/store-hydration";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

const SITE_URL = "https://raizes-do-nordeste-pi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Raízes do Nordeste",
    template: "%s | Raízes do Nordeste",
  },
  description:
    "Peça comida nordestina de forma rápida e prática. Encontre cuscuz, tapioca, bolos, pratos regionais e outras delícias do Nordeste na Raízes do Nordeste.",
  openGraph: {
    title: "Raízes do Nordeste",
    description: "Peça comida nordestina de forma rápida e prática.",
    url: SITE_URL,
    siteName: "Raízes do Nordeste",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raízes do Nordeste",
    description: "Peça comida nordestina de forma rápida e prática.",
    images: ["/og-default.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col selection:bg-primary-main selection:text-white">
        <StoreHydration />
        {children}
      </body>
    </html>
  );
}
