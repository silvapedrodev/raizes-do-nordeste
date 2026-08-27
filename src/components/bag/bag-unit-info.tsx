import { useBagStore } from "@/store/bag"
import { OpeningHours } from "@/types/unit";
import { Store } from "lucide-react"
import { ToggleFulfillment } from "@/components/bag/toggle-fulfillment";

type WeekDay = keyof OpeningHours;

export const BagUnitInfo = () => {
  const { unit } = useBagStore()

  const currentDay = new Date()
    .toLocaleDateString('en-US', { weekday: 'long' })
    .toLowerCase() as WeekDay;

  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="font-semibold md:text-xl">Unidade selecionada</h2>

      <div className="flex gap-1 items-center justify-between">
        <div className="flex gap-3 items-center">
          <div className="aspect-square flex items-center justify-center bg-primary-main p-4 rounded-full">
            <Store size={24} className="stroke-white md:size-8" />
          </div>
          <div>
            <p className="font-bold text-sm md:text-base">Unidade - {unit?.name}</p>
            <div className="flex flex-col md:flex-row md:gap-1 text-sm text-gray-500">
              <p>
                <span>{unit?.address.street}, </span>
                <span>{unit?.address.number}</span>
              </p>
              <p>
                <span>{unit?.address.neighborhood}, </span>
                <span>{unit?.address.state}</span>
              </p>
            </div>
          </div>
        </div>
        <p className="text-sm md:text-base text-primary-main font-bold">Aberto até {unit?.openingHours[currentDay].close}</p>
      </div>

      <h2 className="font-semibold md:text-xl">Como você quer receber?</h2>
      <div>
        <ToggleFulfillment />
      </div>
    </div>
  )
}