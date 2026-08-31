
export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <div>
      <aside className="hidden lg:block">Menu desktop</aside>

      <main>{children}</main>
    </div>
  );
}
