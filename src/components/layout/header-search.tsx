"use client"

import { Search } from "lucide-react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const HeaderSearch = () => {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();

  const rawSlug = params?.slug as string | undefined;
  const initialSearch = rawSlug ? decodeURIComponent(rawSlug) : "";

  const [search, setSearch] = useState(initialSearch);

  useEffect(() => {
    if (pathname.includes("/buscar") && rawSlug) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSearch(decodeURIComponent(rawSlug));
    } else {
      setSearch("");
    }
  }, [rawSlug, pathname])

  const handleSearch = () => {
    if (!search.trim()) return
    const querySlug = encodeURIComponent(search.trim().toLowerCase());
    console.log(querySlug)
    router.push(`/buscar/${querySlug}`);
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        className="bg-gray-100 w-full py-3 px-4 rounded-full "
        placeholder="O que você está procurando?"
        maxLength={35}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button
        type="button"
        onClick={handleSearch}
        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-primary-main hover:opacity-80 transition-opacity"
        aria-label="Pesquisar"
      >
        <Search size={24} />
      </button>
    </div>
  );
}