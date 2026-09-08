# Project guide

This document extends the [README](../README.md). The README answers *what the project is, how to run it, and where things live*. This guide explains *how the current codebase is organized, which decisions it follows, and how a screen maps to files*.

Nothing here describes features that are not in this version. Planned work is listed only when the source already marks a seam (TODO, unused action, or a `#` link).

---

## 1. Intent and academic scope

Raízes do Nordeste is a **customer-facing** ordering simulation: catalog, bag, mock payment, orders, loyalty, and account/privacy UX. Legal pages state that the company and documents are **fictional** and exist for academic use.

Data is local:

- Catalog and units: TypeScript modules under `src/data`
- Users, loyalty balances, and orders: `localStorage`
- Session bag, auth token, and selected unit: cookies, hydrated into Zustand

There is no backend API, database, or third-party payment provider in this version.

---

## 2. How the app is structured

### 2.1 Page files vs components

The App Router owns **URLs**. Feature folders under `src/components` own **UI**.

Convention used in this project:

| Route file | Component folder |
|---|---|
| `src/app/(site)/page.tsx` | `src/components/home/` |
| `src/app/(site)/produto/[slug]/page.tsx` | `src/components/product/` |
| `src/app/(site)/sacola/` | `src/components/bag/` |
| `src/app/(site)/checkout/` | `src/components/checkout/` |
| `src/app/(auth)/entrar/page.tsx` | `src/components/auth/` |
| `src/app/(site)/(protected)/perfil/` | `src/components/profile/` |
| `src/app/(site)/(protected)/pedidos/` | `src/components/order/` |
| `src/app/(site)/programa-de-fidelidade/` | `src/components/loyalty/` |
| `src/app/(site)/(protected)/perfil/gerenciar-consentimentos/` | `src/components/manage-consent/` |
| `src/app/(site)/termos-de-uso/page.tsx` and `politica-de-privacidade` | `src/components/legal/` |

Shared chrome lives in `src/components/layout/`. Catalog grids and product cards used on several routes live at `src/components/` root (`product-catalog.tsx`, `product-item.tsx`, `product-section.tsx`, `product-list.tsx`).

`src/components/ui/` is the shadcn/ui layer (configured in `components.json`, style **base-luma**). Prefer those primitives for new controls.

### 2.2 Route groups

| Group | Path | Layout behavior |
|---|---|---|
| `(site)` | Most customer pages | `src/app/(site)/layout.tsx`: header, main, footer, mobile nav, toaster |
| `(auth)` | `/entrar` | No site chrome. `AuthContent` provides the login layout |
| `(protected)` | Nested under `(site)` | Extra desktop sidebar (`DesktopSidebar`). Used by `/perfil`, `/pedidos`, and consents |

`(protected)` is a **layout** grouping. Access control is **not** implemented only by the folder name. `src/proxy.ts` redirects unauthenticated requests to `/entrar` when the `auth_token` cookie is missing.

Proxy matcher:

- `/pedidos/:path*`
- `/perfil/:path*`
- `/programa-de-fidelidade`
- `/checkout/:path*`

`/programa-de-fidelidade` sits in `(site)`, not in `(protected)`, but it is still gated by the proxy. `/sacola` is **not** gated; checkout buttons send guests to `/entrar`.

### 2.3 Root layout and hydration

`src/app/layout.tsx` sets metadata (`pt_BR`, Open Graph), the DM Sans font, and mounts `StoreHydration` (`src/providers/store-hydration.tsx`). On the client, hydration loads:

- Auth token → `useAuthStore`
- Bag (items, fulfillment, coupon) → `useBagStore`
- Selected unit → `useUnitStore` and `useBagStore.unit`

until cookies and stores agree.

---

## 3. Domain model (this version)

### 3.1 Units and menus

Units: `src/data/units.ts`. Each unit has address, opening hours, status, and fulfillment types `pickup` and `dine-in`.

Menus: `src/data/menus.ts`. A menu is tied to `unitId`. Each line can override `price`, add `categories`, and set `available`.

Resolution: `getProductsByUnit` in `src/lib/menu.ts` joins menu lines with `src/data/product.ts`. The selected unit cookie (`selected-unit`) is read by `getCurrentUnitId` / `getProductsForCurrentUnit` in `src/lib/get-current-unit.ts`. The header control is `src/components/layout/store-location-select.tsx`.

Default unit when the cookie is missing: `units[0]` (Jardim Paulista, SP, `unit-001`).

### 3.2 Products

Type: `src/types/product.ts`. Listing and search filter by `categories` and `tags`. Home “Mais vendidos” uses category `mais-vendidos`. “Pratos do Dia” uses `pratos-do-dia`. Inactive products (for example seasonal `festa-junina` items with `status: "inactive"`) are redirected away from the product page.

Product URL: `/produto/[slug]` via `getProductBySlug` (`src/lib/get-product.ts`). Metadata: `src/lib/product-metadata.ts`.

### 3.3 Bag

Zustand: `src/store/bag.ts`. Cookie snapshot: `src/lib/server-cookies.ts` (`bag`). Types: `src/types/bag-item.ts`.

Fulfillment defaults to `pickup`. Toggle: `src/components/bag/toggle-fulfillment.tsx`.

### 3.4 Users and auth

Type: `src/types/user.ts` (profile, optional `loyalty`, `privacy`, `legalConsent`). Persistence: `src/lib/auth-mock.ts` (`localStorage` key `mock_users`). Tokens look like `mock_token_{userId}_{uuid}`.

Flow (`src/components/auth/`):

1. `IdentifierForm` — email or CPF (`src/schema/auth.schema.ts`)
2. Existing user → `SigninForm`
3. New user → `SignupForm` (minimum age 13; terms required)

Server cookie `auth_token` is httpOnly (`setServerAuthToken`). Client store: `src/store/auth.ts`.

### 3.5 Orders

Type: `src/types/order.ts`. Statuses in the type: `awaiting_payment`, `confirmed`, `preparing`, `ready`, `completed`, `cancelled`. Mock checkout currently writes **`confirmed`** or **`awaiting_payment`**.

Persistence: `src/lib/mock-checkout/order-mock.ts` (`mock_orders`). Ownership check: `validate-order-ownership.ts`, used by `useValidatedOrder` so success/error pages cannot show another user’s order.

---

## 4. Route catalog

For each URL: the page file, the main components, and notes.

### `/` — Home

- **Page:** `src/app/(site)/page.tsx`
- **Components:** `src/components/home/`
  - `cookie-banner.tsx` — first-visit consent (`localStorage` key `cookie_consent`)
  - `banners.tsx` — data from `src/data/banners.ts`
  - `category-nav.tsx` — `/cardapio/{cafe-da-manha,almoco,sobremesa,bebida}`
  - `quick-links.tsx` — `/cardapio/{combo,bolo,cafe,tapioca}`
  - `best-sellers.tsx` / `daily-products.tsx` — `ProductSection` + `getProductsForCurrentUnit`
  - `product-list-skeleton.tsx`

### `/cardapio/[slug]` — Category menu

- **Page:** `src/app/(site)/cardapio/[slug]/page.tsx`
- **Components:** `src/components/product-catalog.tsx`, `src/components/product-item.tsx`
- **Behavior:** Filter current-unit products where `categories` or `tags` include `slug`. Sort via query `?order=` (`views` | `selling` | `alphabetical`). There is no `/cardapio` index route.

### `/produto/[slug]` — Product

- **Page:** `src/app/(site)/produto/[slug]/page.tsx`
- **Components:** `src/components/product/image-slider.tsx`, `product-details.tsx`, `related-products.tsx`, `product-tag.tsx`
- Missing or inactive products redirect to `/`.

### `/buscar` and `/buscar/[query]` — Search

- **Pages:** `src/app/(site)/buscar/page.tsx`, `buscar/[query]/page.tsx`
- **Components:** `src/components/layout/header-search.tsx`, `product-catalog.tsx`
- Empty `/buscar` shows a prompt. Results match name, description, category, or tag (case-insensitive). Queries longer than 50 characters redirect to `/`.

### `/sacola` — Bag

- **Page:** `src/app/(site)/sacola/page.tsx`
- **Layout:** `sacola/layout.tsx` plus parallel slot `@modal`
- **Components:** `src/components/bag/` (`bag-container`, `bag-product-list`, `bag-product-item`, `bag-unit-info`, `empty-bag`, `finish-purchase-button`, `toggle-fulfillment`, `coupon/`)
- Empty bag renders `empty-bag.tsx`.

### `/sacola/cupom` — Coupons

- **Intercepting route:** `src/app/(site)/sacola/@modal/(.)cupom/page.tsx` → `coupon-modal.tsx` (soft navigation from the bag)
- **Hard load:** `src/app/(site)/sacola/cupom/page.tsx` redirects to `/sacola`
- Related modals: `loyalty-join-modal.tsx`, `loyalty-program-modal.tsx`

### `/entrar` — Auth

- **Page:** `src/app/(auth)/entrar/page.tsx`
- **Components:** `src/components/auth/auth-content.tsx`, `identifier-form.tsx`, `signin-form.tsx`, `signup-form.tsx`

### `/checkout/sucesso` and `/checkout/erro`

- **Pages:** `src/app/(site)/checkout/sucesso/page.tsx`, `checkout/erro/page.tsx`
- **Components:** `src/components/checkout/` (`success-page`, `success-details`, `error-page`, `error-details`, `status-card`, skeletons)
- Query: `orderId`. Success allows status `confirmed`. Error allows `awaiting_payment`. Otherwise `useValidatedOrder` sends the user home.

### `/pedidos` — Orders

- **Page:** `src/app/(site)/(protected)/pedidos/page.tsx`
- **Components:** `src/components/order/` (`order.content.tsx`, `order-item.tsx`, `order-status-card.tsx`, `empty-orders.tsx`)
- Data: `use-user-orders.ts` → `getOrdersByUserId`

### `/perfil` — Profile

- **Page:** `src/app/(site)/(protected)/perfil/page.tsx`
- **Components:** `src/components/profile/` (`profile-content`, `mobile-view`, `desktop-profile-view`, `navigation-list`)
- Nav config: `src/components/layout/protected/sidebar-navigation.ts`
- Implemented destinations: `/perfil`, `/pedidos`, `/programa-de-fidelidade`, `/termos-de-uso`, `/politica-de-privacidade`, `/perfil/gerenciar-consentimentos`
- Still `#`: Preferências, Excluir conta, Central de ajuda, Fale conosco

### `/perfil/gerenciar-consentimentos`

- **Page:** `src/app/(site)/(protected)/perfil/gerenciar-consentimentos/page.tsx`
- **Components:** `src/components/manage-consent/` — cookies, loyalty participation, personal data, privacy

### `/programa-de-fidelidade`

- **Page:** `src/app/(site)/programa-de-fidelidade/page.tsx`
- **Components:** `src/components/loyalty/` — enrollment vs dashboard (points, claimable rewards, claimed coupons, history)
- Claim logic: `src/lib/loyalty-service.ts` against `src/data/loyalty_rewards.ts`

### `/termos-de-uso` and `/politica-de-privacidade`

- **Pages:** `src/app/(site)/termos-de-uso/page.tsx`, `politica-de-privacidade/page.tsx`
- Markdown: `src/data/terms-use.md`, `src/data/policy-and-politics.md`
- Renderer: `src/components/legal/policy-content.tsx`

### Other app files

| File | Role |
|---|---|
| `src/app/not-found.tsx` | `src/components/not-found-page.tsx` |
| `src/app/robots.ts` | Allows `/`; disallows account, loyalty, checkout, and `/api/*` (no API routes exist in this version) |
| `src/app/manifest.json` | PWA-style name and icons |

---

## 5. Layout chrome

| Component | Path | Role |
|---|---|---|
| Header | `src/components/layout/header.tsx` | Logo, unit select, search (md+), account, bag |
| Header search | `src/components/layout/header-search.tsx` | Navigates to `/buscar/[query]` |
| Footer | `src/components/layout/footer.tsx` | Site footer |
| Mobile nav | `src/components/layout/mobile-nav.tsx` | Início, Buscar, Sacola, Pedidos, Perfil (`md:hidden`) |
| Desktop sidebar | `src/components/layout/protected/desktop-sidebar.tsx` | Protected pages |

---

## 6. State, cookies, and server actions

### 6.1 Zustand (`src/store`)

| Store | File | Holds |
|---|---|---|
| Auth | `auth.ts` | `token`, `hydrated` |
| Bag | `bag.ts` | Items, coupon, unit, fulfillment |
| Unit | `unit.ts` | `selectedUnitId`; `setUnit` writes the cookie |

### 6.2 Cookies (`src/lib/server-cookies.ts`)

| Cookie | Purpose |
|---|---|
| `auth_token` | Session (httpOnly). Required by `proxy.ts` |
| `bag` | Bag JSON (httpOnly) |
| `selected-unit` | Unit id (readable on the client) |

Browser-only (not cookies): `cookie_consent`, `mock_users`, `mock_token`, `mock_orders`.

### 6.3 Server actions (`src/actions`)

| Action | Typical use |
|---|---|
| `get-auth-state` / `set-auth-cookie` / `clear-auth-cookie` | Auth cookie |
| `signin` / `signup` | Auth forms |
| `get-bag-state` / `set-bag-state` / `clear-bag-cookie` | Bag cookie |
| `apply-coupon` / `remove-coupon` | Promotional and reward codes (`coupon.ts` + `loyalty_rewards.ts`) |
| `get-unit-state` / `set-unit-state` | Unit cookie |
| `get-product-from-list` | Resolve bag line items |
| `finish-bag.ts` | Placeholder that returns a fake payment URL. **Checkout does not call this today.** |

---

## 7. Mock checkout (decision and flow)

**Decision:** keep payment local so the academic demo can show both success and failure without a gateway.

**Toggle:** `src/lib/mock-checkout/mock-payment-gateway.ts`

```ts
const HARDCODED_RESULT = true; // true = success | false = error
```

The function waits ~1s, then returns that boolean.

**Current finish path** (`src/components/bag/finish-purchase-button.tsx`):

1. Require `token` and `bagStore.unit.id`; guests go to `/entrar`
2. Load products with `getProductsByUnit`
3. Call `finishPurchase` (`src/lib/mock-checkout/finish-purchase.ts`)
4. Clear bag cookie and Zustand bag
5. Navigate to `/checkout/sucesso?orderId=` or `/checkout/erro?orderId=`

`finishPurchase` builds line items, totals, and discount; calls the mock gateway; sets status and pickup code; `addOrder`; if payment succeeded and the user is in loyalty, add `floor(total)` points (cap 1000) and invalidate a used loyalty coupon (`src/lib/mock-checkout/loyalty.ts`).

Other helpers in `src/lib/mock-checkout/`: `build-order-items.ts`, `generate-order-id.ts`, `generate-pickup-code.ts`, `estimate-preparation-time.ts`, `get-unit-by-id.ts`, `validate-order-ownership.ts`, `order-mock.ts`.

The comment on `finish-purchase-button.tsx` and the stub `finish-bag.ts` mark where a real gateway would plug in later. Do not treat `https://checkout.gateway.com/pay/xyz123` as a live integration.

---

## 8. Coupons and loyalty

Two catalogs:

1. **Promotional** — `MOCK_COUPONS` in `src/data/coupon.ts` (usable from the bag without claiming)
2. **Loyalty** — `AVAILABLE_REWARDS` in `src/data/loyalty_rewards.ts` (claim with points, then apply)

`applyCouponAction` looks up both lists, checks expiry and minimum subtotal, then writes the bag cookie. `validateRewardCouponUsage` in `src/lib/loyalty-service.ts` requires the reward to be in the user’s loyalty coupon list.

Points: `calculateLoyaltyPoints` uses `Math.floor(orderTotal)` and stops earning at 1000 (`MAX_LOYALTY_POINTS`).

Codes and values: [README](../README.md#mock-coupons-and-loyalty-rewards).

---

## 9. `src/` directory map

```text
src/
├── app/                      # URLs, layouts, robots, manifest
├── actions/                  # Server actions
├── components/
│   ├── auth/
│   ├── bag/                  # includes coupon/
│   ├── checkout/
│   ├── home/
│   ├── layout/               # includes protected/
│   ├── legal/
│   ├── loyalty/
│   ├── manage-consent/
│   ├── order/
│   ├── product/
│   ├── profile/
│   ├── ui/                   # shadcn
│   └── product-*.tsx         # shared catalog pieces
├── data/                     # Mock + markdown
├── hooks/
│   ├── use-bag-actions.ts
│   ├── use-querystring.ts
│   ├── use-user-orders.ts
│   └── use-validated-order.ts
├── lib/
│   ├── auth-mock.ts
│   ├── bag-validation.ts
│   ├── get-current-unit.ts
│   ├── get-product.ts
│   ├── loyalty-service.ts
│   ├── menu.ts
│   ├── product-metadata.ts
│   ├── server-cookies.ts
│   └── mock-checkout/
├── providers/store-hydration.tsx
├── schema/auth.schema.ts
├── store/                    # auth, bag, unit
├── types/
├── utils/                    # price, phone, CPF, dates, text
└── proxy.ts
```

Public images: `public/assets/` (UI, banners, product photos referenced from data). Remote product images are allowed from `images.unsplash.com` and `cdn.pixabay.com` (`next.config.ts`).

---

## 10. Types (`src/types`)

| File | Domain |
|---|---|
| `product.ts` | Product |
| `menu.ts` | Per-unit menu |
| `unit.ts` | Unit, hours, fulfillment |
| `bag-item.ts` | Bag lines, bag cookie payload, coupon |
| `bag-list-item.ts` | Bag row with product |
| `user.ts` | Account, loyalty, privacy |
| `order.ts` | Order and statuses |
| `banner.ts` | Home banners |

---

## 11. Known seams in this version

Keep these as documentation of **current** code, not as a product roadmap:

- Catalog still filters and sorts in the client (`product-catalog.tsx` TODO).
- Home sections still load from mock modules (`best-sellers.tsx`, `daily-products.tsx` TODOs).
- Product page comment still says to fetch by slug; the implementation already uses `getProductBySlug` on local data.
- Search page comment still says to implement search; `buscar/[query]` already filters the mock catalog.
- `finish-bag.ts` is a gateway stub; the bag uses `finishPurchase` + `mockPaymentGateway`.
- Profile sidebar entries with `href: '#'` have no pages.

When you change a route, update the page file, the matching `src/components/<feature>` folder, and this guide together so the convention stays obvious.
