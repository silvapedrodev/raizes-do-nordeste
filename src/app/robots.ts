import type { MetadataRoute } from "next";

const SITE_URL = "https://raizes-do-nordeste-pi.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/pedidos",
        "/pedidos/*",
        "/perfil",
        "/perfil/*",
        "/programa-de-fidelidade",
        "/checkout",
        "/checkout/*",
        "/api/*",
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}