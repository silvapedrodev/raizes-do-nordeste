import { Search } from "lucide-react";

export const HeaderSearch = () => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        className="bg-gray-100 w-full py-3 px-4 rounded-full "
        placeholder="O que você está procurando?"
      />

      <Search
        size={24}
        className="text-primary-main absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
      />
    </div>
  );
}