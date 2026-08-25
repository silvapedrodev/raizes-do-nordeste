import { HeaderSearch } from "@/components/layout/header-search";

export default async function Page() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="w-full md:hidden">
        <HeaderSearch />
      </div>

      <div className="mt-10 p-8 bg-gray-50 rounded-xl border border-gray-200 text-center text-gray-500">
        Digite algo na barra de pesquisa acima para encontrar produtos deliciosos.
      </div>
    </div>
  );
}