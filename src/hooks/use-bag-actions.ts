import { setBagState } from "@/actions/set-bag-state";
import { toast } from "@/components/ui/toast";
import { useBagStore } from "@/store/bag";

export const useBagActions = () => {
  const bagStore = useBagStore((state) => state)

  const addToBag = async (productId: string) => {
    bagStore.addItem({ productId, quantity: 1 });

    

    const updatedBag = useBagStore.getState().bag;
    await setBagState(updatedBag);

    toast.add({
      title: "Item adicionado à sacola!",
      description: "Você pode ver os itens clicando na sacola.",
      
    })
  };

  return {
    addToBag,
  };
}