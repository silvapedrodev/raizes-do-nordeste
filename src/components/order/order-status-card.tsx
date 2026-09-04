import { OrderStatus } from "@/types/order";

type Props = {
  status: OrderStatus;
};

const orderStatusMap: Record<OrderStatus, { label: string; className: string }> = {
  awaiting_payment: {
    label: "Aguardando pagamento",
    className: "text-secondary-main bg-secondary-main/10",
  },
  confirmed: {
    label: "Recebido",
    className: "text-blue-600 bg-blue-600/10 border-blue-200",
  },
  preparing: {
    label: "Preparando",
    className: "text-orange-700 bg-orange-50 border-orange-200",
  },
  ready: {
    label: "Pronto",
    className: "bg-violet-50 text-violet-700",
  },
  completed: {
    label: "Entregue",
    className: "text-green-600 bg-green-600/10",
  },
  cancelled: {
    label: "Cancelado",
    className: "text-red-600 bg-red-600/10",
  },
};

export const OrderStatusCard = ({ status }: Props) => {
  const currentStatus = orderStatusMap[status] || {
    label: "Desconhecido",
    className: "text-gray-600 bg-gray-50 border-gray-200",
  };

  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${currentStatus.className}`}>
      <span
        className={`size-1.5 rounded-full bg-current ${!["cancelled", "completed"].includes(status)
            ? "animate-pulse"
            : ""
          }`}
      />
      {currentStatus.label}
    </div>
  );
};