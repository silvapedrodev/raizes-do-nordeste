import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <div>
      <Header />
      {children}
      <MobileNav />
    </div>
  );
}
