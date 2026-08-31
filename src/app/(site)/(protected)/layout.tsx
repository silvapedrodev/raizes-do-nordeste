import { DesktopSidebar } from "@/components/layout/protected/desktop-sidebar";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
   <div className="flex xl:-ml-[max(0px,calc((100vw-80rem)/2-80px))] xl:-mb-28">
      <DesktopSidebar />

      <main className="flex-1 xl:px-6">
        {children}
      </main>
    </div>
  );
}
