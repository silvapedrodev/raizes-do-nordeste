import { ErrorPage } from "@/components/checkout/error-page";

type Props = {
  searchParams: Promise<{ orderId?: string }>;
}

export default async function CheckoutErrorPage({ searchParams }: Props) {
  const { orderId } = await searchParams

  return <ErrorPage orderId={orderId ?? ""} />;
}