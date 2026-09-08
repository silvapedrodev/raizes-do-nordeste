import type { MetadataRoute } from "next";

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
    }
  };
}