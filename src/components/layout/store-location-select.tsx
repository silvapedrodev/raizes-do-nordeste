import { Store } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useUnitStore } from "@/store/unit";
import { units } from "@/data/units";
import { useRouter } from "next/navigation";

export const StoreLocationSelect = () => {
  const { selectedUnitId, setUnit } = useUnitStore()
  const router = useRouter()

  const currentUnit = units.find(unit => unit.id === selectedUnitId) || units[0]

  const handleChange = async (value: string | null) => {
    if (!value) return

    await setUnit(value);
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
          <SelectTrigger className="w-44 font-medium text-sm bg-transparent px-0 ">
            <SelectValue placeholder="Unidade">
              {(value: string) =>
                units.find((unit) => unit.id === value)?.name ?? "Unidade"
              }
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="">
            <SelectGroup>
              {units.map((item) => (
                <SelectItem key={item.id} value={item.id}>
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