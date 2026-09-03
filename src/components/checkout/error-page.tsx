import { ErrorDetails } from "@/components/checkout/error-details";

type Props = {
  orderId: string;
}

export const ErrorPage = ({ orderId }: Props) => {
  return (
    <div className="">
      <ErrorDetails orderId={orderId} />
    </div>
  );
};