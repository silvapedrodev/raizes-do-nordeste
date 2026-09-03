import { SuccessPage } from "@/components/checkout/success-page";

type Props = {
  searchParams: Promise<{ orderId?: string }>;
}

export default async function CheckoutSuccessPage({ searchParams }: Props) {
  const { orderId } = await searchParams

  return <SuccessPage orderId={orderId ?? ""} />;
}