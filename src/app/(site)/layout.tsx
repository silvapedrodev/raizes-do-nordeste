import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <div>
      <Header />
      <main className="w-full max-w-7xl mx-auto px-6 mt-6 md:mt-10">
        {children}
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}
