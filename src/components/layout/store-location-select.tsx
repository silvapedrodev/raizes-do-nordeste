import { Store } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useUnitStore } from "@/store/unit";
import { units } from "@/data/units";
import { useRouter } from "next/navigation";
import { useBagStore } from "@/store/bag";
import { validateBagForUnit } from "@/lib/bag-validation";
import { setBagState } from "@/actions/set-bag-state";

export const StoreLocationSelect = () => {
  const { selectedUnitId, setUnit } = useUnitStore()
  const bag = useBagStore((state) => state.bag)

  const router = useRouter()

  const currentUnit = units.find(unit => unit.id === selectedUnitId) || units[0]

  const handleChange = async (value: string | null) => {
    if (!value) return

    const newUnitObject = units.find((u) => u.id === value);

    const validBag = validateBagForUnit(bag, value);
    useBagStore.setState({ bag: validBag });
    await setBagState(validBag);

    await setUnit(value);
    if (newUnitObject) useBagStore.setState({ unit: newUnitObject });
    router.refresh();
  }

  return (
    <div className="flex items-center gap-1">
      <Store
        size={24}
        className="text-primary-main"
      />

      <div>
        <Select
          value={currentUnit.id}
          onValueChange={handleChange}
        >
          <SelectTrigger aria-label={`Selecionar unidade`} className="w-44 font-medium text-sm bg-transparent px-0 ">
            <SelectValue placeholder="Unidade">
              {(value: string) =>
                units.find((unit) => unit.id === value)?.name ?? "Unidade"
              }
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {units.map((item) => (
                <SelectItem
                  key={item.id}
                  value={item.id}
                >
                  {item.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}