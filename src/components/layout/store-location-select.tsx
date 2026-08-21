import { Store } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export const StoreLocationSelect = () => {
  const items = [
    { label: "Jardim Paulista, SP", value: "Jardim Paulista, SP" },
    { label: "Boa Vista, PE", value: "Boa Vista, PE" },
  ]

  return (
    <div className="flex items-center gap-1">
      <Store
        size={24}
        className="text-primary-main"
      />

      <div>
        <Select defaultValue="Jardim Paulista, SP" items={items}>
          <SelectTrigger className="w-44 font-medium text-sm bg-transparent px-0 ">
            <SelectValue placeholder="Unidade" />
          </SelectTrigger>
          <SelectContent className="">
            <SelectGroup>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}