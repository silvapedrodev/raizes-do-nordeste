import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { StoreHydration } from "@/providers/store-hydration";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="min-h-screen flex flex-col">
      <StoreHydration />
      <Header />
      <main className="w-full max-w-7xl mx-auto px-6 mt-6 md:mt-10 flex-1 flex flex-col">
        {children}
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}
