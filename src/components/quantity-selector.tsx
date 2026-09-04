import { setBagState } from "@/actions/set-bag-state";
import { useBagActions } from "@/hooks/use-bag-actions";
import { useBagStore } from "@/store/bag";
import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  productId: string
  quantity: number
  className?: string
}

export const QuantitySelector = ({
  quantity,
  productId,
  className }:
  QuantitySelectorProps) => {
  const bagStore = useBagStore(state => state);
  const { addToBag } = useBagActions()

  const updateCookie = async () => {
    const updatedBag = useBagStore.getState().bag
    await setBagState(updatedBag)
  }

  const handleMinus = async () => {
    if (quantity > 1) {
      bagStore.updateQuantity(productId, -1);
      await updateCookie();
      return;
    }

    bagStore.removeItem(productId);
    await updateCookie();
  };

  const handlePlus = async () => {
    if (quantity === 0) {
      addToBag(productId);
      await updateCookie();
      return;
    }

    bagStore.updateQuantity(productId, 1);
    await updateCookie();
  };

  return (
    <div className={`inline-flex items-center justify-between p-1 border border-gray-200 rounded-full h-10 bg-white shadow-xs ${className}`}>
      <button
        type="button"
        onClick={handleMinus}
        aria-label="Diminuir quantidade"
        className="w-8 h-8 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100 transition-all cursor-pointer"
      >
        <Minus size={14} strokeWidth={2} />
      </button>

      <span className="w-8 text-center text-sm font-semibold text-gray-900 select-none">
        {quantity}
      </span>

      <button
        type="button"
        onClick={handlePlus}
        aria-label="Aumentar quantidade"
        className="w-8 h-8 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100 transition-all cursor-pointer"
      >
        <Plus size={14} strokeWidth={2} />
      </button>
    </div>
  );
};