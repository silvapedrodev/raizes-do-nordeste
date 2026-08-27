import { useBagStore } from "@/store/bag"
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group"
import { FulfillmentType } from "@/types/unit"
import { Circle, CircleCheck, ForkKnife, PaperBag } from "lucide-react"

export const ToggleFulfillment = () => {
  const { fulfillment, setFulfillment } = useBagStore()

  const currentValue = [fulfillment ?? "pickup"]

  const handleFulfillmentChange = async (values: string[]) => {
    const newValue = values[0] as FulfillmentType;
    if (newValue) {
      setFulfillment(newValue);
    }
  };

  return (
    <ToggleGroup
      multiple={false}
      variant="outline"
      value={currentValue}
      onValueChange={handleFulfillmentChange}
      className="flex flex-col md:flex-row w-full gap-3"
    >
      <ToggleGroupItem
        value="pickup"
        aria-label="Retirar no balcão"
        className={`py-2 px-4 rounded-lg w-full md:w-1/2 justify-between transition-all h-auto 
          ${fulfillment === 'pickup' && 'border-primary-main'}`}
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gray-200 rounded-lg">
            <PaperBag size={20} className="stroke-primary-main size-6" />
          </div>
          <div className="text-left">
            <p className="font-semibold text-sm">Retirar no balcão</p>
            <p className="text-xs text-gray-500">Retire seu pedido na unidade</p>
          </div>
        </div>

        <div>
          {fulfillment === "pickup" ? (
            <CircleCheck className="stroke-white fill-primary-main size-6" />
          ) : (
            <Circle className="stroke-gray-300 size-6" />
          )}
        </div>
      </ToggleGroupItem>

      <ToggleGroupItem
        value="dine-in"
        aria-label="Consumir no local"
        className={`py-2 px-4 rounded-lg w-full md:w-1/2 justify-between transition-all h-auto 
          ${fulfillment === 'dine-in' && 'border-primary-main'}`}
      >
        <div className="flex items-center gap-3 min-w-0 mr-2">
          <div className="p-2 bg-gray-200 rounded-lg">
            <ForkKnife size={20} className="stroke-primary-main size-6" />
          </div>
          <div className="text-left min-w-0">
            <p className="font-semibold text-sm">Consumir no local</p>
            <p className="text-xs text-gray-500 wrap-break-word">Consuma seu pedido na unidade</p>
          </div>
        </div>

        <div>
          {fulfillment === "dine-in" ? (
            <CircleCheck className="stroke-white fill-primary-main size-6" />
          ) : (
            <Circle className="stroke-gray-300 size-6" />
          )}
        </div>
      </ToggleGroupItem>
    </ToggleGroup>
  )
}