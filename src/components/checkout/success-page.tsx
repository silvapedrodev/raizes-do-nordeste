import { SuccessDetails } from "@/components/checkout/success-details";

type Props = {
  orderId: string;
}

export const SuccessPage = ({ orderId }: Props) => {
  return (
    <div className="">
      <SuccessDetails orderId={orderId} />
    </div>
  );
};