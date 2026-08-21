import { NavItem } from "./nav-item";

export const MobileNav = () => {
  return (
    <nav
      aria-label="Navegação principal"
      className="md:hidden fixed bottom-0 left-0 right-0 px-6 z-50 border-t border-gray-200"
    >
      <ul className="flex gap-3">
        <NavItem
          href="/"
          label="Início"
          icon="House"
        />
        <NavItem
          href="/buscar"
          label="Buscar"
          icon="Search"
        />
        <NavItem
          href="/sacola"
          label="Sacola"
          icon="PaperBag"
        />
        <NavItem
          href="/pedidos"
          label="Pedidos"
          icon="ReceiptText"
        />
        <NavItem
          href="/perfil"
          label="Perfil"
          icon="UserRound"
        />
      </ul>
    </nav>
  );
}