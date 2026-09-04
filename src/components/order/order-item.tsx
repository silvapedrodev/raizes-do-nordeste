import { getProductsByUnit } from "@/lib/menu";
import { Order } from "@/types/order"
import { OrderStatusCard } from "@/components/order/order-status-card";
import { formatDate, formatTime } from "@/utils/formatDate";
import Image from "next/image";
import { formatPrice } from "@/utils/format-price";
import { ChevronRight } from "lucide-react";
import { AppButton } from "@/components/app-button";
import Link from "next/link";

type Props = {
  order: Order;
}

export const OrderItem = ({ order }: Props) => {
  const products = getProductsByUnit(order.unitId)
  const firstOrderItem = order.items[0];

  const firstProduct = firstOrderItem
    ? products.find((product) => product.id === firstOrderItem.productId)
    : undefined;

  const fulfillmentLabels = {
    pickup: "Retirar no balcão",
    "dine-in": "Consumir no local",
  };


  return (
    <div className="max-w-3xl p-3 border rounded-xl shadow-[1px_1px_8px_rgba(0,0,0,0.10)]">
      <div className="flex justify-between">
        <OrderStatusCard status={order.status} />
        <p className="text-xs text-gray-500">
          {formatDate(order.createdAt)} &bull; {formatTime(order.createdAt)}
        </p>
      </div>

      <div
        className="flex items-center justify-between lg:grid lg:gap-10  lg:grid-cols-[1fr_auto_auto]"
      >
        <div className="flex items-center gap-2 lg:gap-3 mt-4">
          <div className="flex items-center gap-3">
            {firstProduct && (
              <Image
                src={firstProduct.images.main}
                alt={firstProduct.name}
                width={80}
                height={80}
                className="rounded-md size-20 aspect-square object-cover"
              />
            )}
          </div>

          <div className="space-y-0.5">
            <h2 className="font-semibold text-primary-main text-lg">Pedido {order.id}</h2>
            <p className="text-sm text-gray-500">
              {order.items.length}{" "}
              {order.items.length === 1 ? "Item" : "Itens"} &bull; R${" "}
              {formatPrice(order.total)}
            </p>
            <div>
              {order.pickupCode
                ? (
                  <div className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500">
                    <span>{fulfillmentLabels[order.fulfillment]}</span>

                    <span>&bull;</span>

                    <span>
                      Código:{" "}
                      <span className="text-sm text-primary-main border border-primary-main rounded-sm px-1">
                        {order.pickupCode}
                      </span>
                    </span>
                  </div>
                )
                : <p className="text-sm text-gray-500">
                  {order.status === 'cancelled' ? 'Cancelado' : 'Aguardando pagamento'}
                </p>
              }
            </div>
          </div>
        </div>

        <div className="hidden lg:block lg:w-40">
          <AppButton
            variant="outline"
            className={`${order.status === 'cancelled'
              ? 'text-primary-main border-primary-main' : 'text-gray-500'}
              `}
          >
            Ver detalhes
          </AppButton>
        </div>

        <Link
          href={"#"}
          aria-label={`Ver detalhes do pedido ${order.id}`}
        >
          <ChevronRight
            size={28}
            aria-hidden="true"
            className="stroke-primary-main"
          />
        </Link>
      </div>
    </div >
  )
}