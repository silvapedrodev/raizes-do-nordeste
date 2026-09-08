import type { Metadata } from "next";
import { getProductBySlug } from "@/lib/get-product";

export async function buildProductMetadata(slug: string): Promise<Metadata> {
  const product = await getProductBySlug(slug);

  if (!product || product.status === "inactive") {
    return {
      title: "Produto não encontrado",
    };
  }

  const precoFormatado = product.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const description = `${precoFormatado} — ${product.description ?? "Peça agora na Raízes do Nordeste."}`;
  const imageUrl = product.images?.main || product.images?.gallery?.[0] || "/og-default.png";

  return {
    title: product.name,
    description,
    openGraph: {
      title: product.name,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description,
      images: [imageUrl],
    },
  };
}