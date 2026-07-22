# AGENTS.md — iattend-next

## Qué es este repo
Sitio de marketing público de **I attend** (invitaciones digitales y gestión de invitados para bodas y eventos), publicado en `iattend.site`. No es la app de invitados ni el dashboard: es la landing/venta — home, `/about/*` (features, precios, FAQs, casos de uso), formulario de colaboradores y captura de leads — que dirige al usuario hacia la app real (login, dashboard, ver invitación) a través de otros dominios.

## Stack técnico
- **Framework:** Next.js 15 (App Router), `next dev --turbopack` en desarrollo
- **Lenguaje:** TypeScript (`strict: true`)
- **Estilos:** CSS Modules por página/componente + `src/styles/main.css` con variables de tema (custom properties), sin Tailwind
- **Librería de UI base:** Ant Design v6 (`antd`, vía `AntdProvider` + `@ant-design/nextjs-registry`), usado sobre todo para `Button`; iconos con `lucide-react` (aunque persisten imports sueltos de `react-icons` en componentes más antiguos — no seguir ese patrón en código nuevo)
- **Otras dependencias clave:**
  - `@supabase/supabase-js` / `@supabase/ssr` — cliente de Supabase (browser, server con cookies, y server "público" sin sesión)
  - `firebase` (auth/firestore/storage) — configurado en `src/lib/firebase`, con uso muy limitado hoy (revisar antes de asumir que está activo)
  - `deepl-node` — traducción de invitaciones vía DeepL, solo server-side (`import "server-only"`)
  - `motion` — animaciones (wrappers en `src/components/Motion`: `FadeIn`, `FadeLeft`, `FadeRight`, `FadeUp`, `FadeSides`, `AnimatedPath`)
  - `axios` — llamadas al backend de I attend (`src/services/customHook.ts`)
  - `canvas-confetti`, `add-to-calendar-button-react`, `@ag-grid-community/locale` — están en `package.json` pero **no se usan en `src`** (dependencias muertas, candidatas a limpieza)

## Cómo se conecta con el resto de I attend
- **iattend--backend**: se consume vía `NEXT_PUBLIC_IATTEND_API_URL` / `IATTEND_API_URL` con `axios` (`src/services/customHook.ts`) o `fetch` directo (p. ej. `src/app/api/colaboradores/route.ts` para enviar correos de notificación, `Shipments.tsx` para envíos de WhatsApp). No hay autenticación de usuario contra este backend desde este repo — es solo consumo de endpoints puntuales de marketing/leads.
- **Supabase**: conexión **directa** desde el cliente y desde route handlers (no hay capa intermedia del backend para esto). Se usa para:
  - Insertar leads de colaboradores (`colaboradores_interesados`) desde `src/app/api/colaboradores/route.ts`
  - Leer estadísticas públicas vía RPC (`get_total_events_count`, `get_guest_states_total`, `get_total_guest_states`) en `SocialProof` y `Final` para mostrar números en la landing
  - Cache de traducciones de invitaciones (`invitation_translations`) desde `src/lib/translation/cache.ts`
- **Otros repos**:
  - `iattend.events` — la app donde se visualizan las invitaciones reales; los CTAs de "ver ejemplo" (`Invitation`, `SideEvents`, `Shipments`) enlazan ahí con URLs hardcodeadas (no hay integración en código, son links `<a>`/`CustomButton`).
  - La app de dashboard/login vive detrás de `NEXT_PUBLIC_APP_URL` (los botones "Login", "Get started", "See how it works" apuntan ahí, p. ej. `/login`, `/preview-mood`).
  - `vercel.json` redirige rutas legacy (`/wedding/:x`, `/xv/:x`, `/bap/:x`, `/kids/:x`, `/event/:x`, `/party/:x`, `/side-event/:x`) hacia `iattend.events`, y `/dashboard`, `/invitations`, `/features` hacia `iattend.site` (mismo dominio, posiblemente redirects obsoletos).

## Estructura de carpetas clave

```
src/
├── app/
│   ├── page.tsx                 # home → redirect a /about
│   ├── layout.tsx                # layout raíz: fuentes, AppProvider, AntdProvider/Registry
│   ├── sitemap.ts
│   ├── about/                    # landing real: cada subcarpeta es una página de marketing
│   │   ├── page.tsx / page.module.css
│   │   ├── pricing/, products/, faqs/, this-is-us/, contact-us/, legal/, privacidad/, ...
│   │   └── layout.tsx
│   └── api/
│       └── colaboradores/route.ts   # único route handler: alta de leads + notificación por mail
├── components/
│   ├── LandPage/                 # secciones de la landing (una carpeta por sección)
│   │   ├── HERO/, Header/, Footer/, KeyFeatures/, Plans/, Invitation/, SideEvents/,
│   │   │   Shipments/, SocialProof/, WorkFlow/, FAQs/, CTA/, Action/, Final/, PageLoader/, ...
│   │   └── cada carpeta: Componente.tsx + componente.module.css
│   ├── Motion/                   # wrappers de animación (Fade*, AnimatedPath) sobre `motion`
│   ├── CustomButton/, BackButton/, GoogleTranslate/, HomeScroll/
├── context/                       # AppContext + AppProvider + appReducer (estado global simple: user/tema/idioma)
├── helpers/
│   ├── SEO/                       # datos estáticos para JSON-LD / FAQs / reviews
│   └── images.ts                  # listas de URLs de imágenes de Supabase Storage
├── hooks/                         # useScreenWidth
├── lib/
│   ├── supabase/                  # client.ts (browser), server.ts (SSR con cookies), public-server.ts (sin sesión)
│   ├── firebase/                  # config de Firebase (uso limitado)
│   └── translation/                # deepl.ts (motor de traducción), cache.ts (cache en Supabase)
├── services/                      # customHook.ts (hooks de axios hacia clima e IATTEND_API), apiWeather.ts
├── styles/                        # globals.css (fuentes @font-face), main.css (variables + tipografía), modules.css, seo.css
└── types/                         # app.ts, context.ts, db.ts, guests.ts (⚠️ ver gotchas), global.d.ts
```

## Convenciones y patrones que hay que respetar
- **CSS Modules por archivo**: cada página (`page.tsx`) o componente reutilizable tiene su `[nombre].module.css` en la misma carpeta (p. ej. `hero.module.css`, `plans.module.css`). Nunca CSS plano para estilos de página/componente.
- **Solo variables de `src/styles/main.css`**: colores, sombras, bordes y tipografía deben usar las custom properties (`var(--brand-color-500)`, `var(--secondary-color)`, etc.) y las clases tipográficas globales (`.h1`–`.h6`, `.s1`, `.s2`, `.b1`–`.b4`, `.c1`–`.c3`, `.label`). No declarar variables nuevas ni valores hardcodeados. (Ver skill `canplast-css-conventions` para el detalle completo de reglas — nombres de clases y componentes de ejemplo usan un dominio distinto pero las reglas de fondo aplican aquí.)
- **Iconos**: `lucide-react`, tamaño estándar `size={14}`–`18` según contexto. Evitar sumar más `react-icons` a componentes nuevos aunque existan restos en componentes viejos (`Shipments`, `Footer`).
- **UI**: usar componentes de `antd` (`Button`, etc.) en vez de elementos HTML planos cuando haya equivalente, siguiendo el patrón ya usado en `HERO`, `Header`, `CustomButton`.
- **Alias de imports**: `@/*` apunta a `src/*` (configurado en `tsconfig.json`).
- **Metadata/SEO repetitivo por página**: cada página bajo `about/` define su propio `export const metadata` (title, description, openGraph, twitter) y en varios casos JSON-LD manual — es un patrón copiado entre páginas, no una utilidad compartida.
- **Imports/variables no usados**: ESLint falla en unused imports (`unused-imports/no-unused-imports`); variables/argumentos no usados deben prefijarse con `_` para no ser reportados.
- **CTAs hacia la app**: los botones de conversión (`Login`, `Get started`, `See how it works`) siempre apuntan a `${process.env.NEXT_PUBLIC_APP_URL}/...`, nunca a rutas hardcodeadas del dominio.

## Rutas / páginas principales
| Ruta | Qué hace | Componente principal |
|---|---|---|
| `/` | Redirect a `/about` | `src/app/page.tsx` |
| `/about` | Landing principal (hero, features, planes, social proof, CTA) | `src/app/about/page.tsx` + secciones en `components/LandPage/*` |
| `/about/pricing` | Planes y precios | `src/app/about/pricing/page.tsx` |
| `/about/products` | Catálogo de producto/funcionalidades | `src/app/about/products/page.tsx` |
| `/about/guest-management`, `/mapa-de-mesas`, `/pases-digitales`, `/invitacion-digital`, `/invitacion-paperless`, `/envios-whatsapp`, `/side-events` | Páginas de feature individual (SEO-first) | `src/app/about/<feature>/page.tsx` |
| `/about/cliente-ideal`, `/como-funciona`, `/this-is-us`, `/opiniones`, `/faqs` | Contenido informativo/soporte a conversión | `src/app/about/<x>/page.tsx` |
| `/about/contact-us` | Formulario de colaboradores (alta de leads) | `src/app/about/contact-us/page.tsx` → `POST /api/colaboradores` |
| `/about/legal`, `/privacidad` | Legales | `src/app/about/legal/page.tsx`, `src/app/about/privacidad/page.tsx` |
| `/api/colaboradores` | Alta de lead en Supabase + email de notificación | `src/app/api/colaboradores/route.ts` |

## Comandos frecuentes

```bash
# instalar
npm install

# correr en dev (turbopack, puerto 3000)
npm run dev

# build
npm run build

# start (producción, tras build)
npm run start

# lint
npm run lint
```

No hay suite de tests configurada en este repo.

## Variables de entorno que necesita
- `IATTEND_API_URL`
- `NEXT_PUBLIC_IATTEND_API_URL`
- `NEXT_PUBLIC_APP_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `DEEPL_API_KEY` (usada en `src/lib/translation/deepl.ts`, no está en el `.env` local actual — confirmar si el flujo de traducción está en uso)

## Cosas que hay que saber antes de tocar este repo (gotchas)
- **El home no tiene contenido propio**: `/` solo hace `redirect('/about')`. Si algo "no aparece en la home", probablemente hay que buscarlo en `about/page.tsx`.
- **Supabase se llama directo desde el cliente** (no vía backend) para RPCs de estadísticas públicas (`SocialProof`, `Final`) y desde el route handler de colaboradores. No hay capa de autenticación aquí: solo se usa la anon key, y las RPC/tablas expuestas deben ser seguras para acceso público (RLS).
- **`vercel.json` tiene un rewrite catch-all** (`"/(.*)" → "/"`) además de los redirects explícitos. Cualquier ruta no contemplada en Next ni en los redirects listados cae silenciosamente en la home en vez de dar 404 — tenerlo en cuenta al depurar enlaces rotos.
- **`src/types/guests.ts`, `src/context/AppContext` (login/user/tema/idioma) y `src/lib/translation/*`** parecen pensados para una app de gestión de invitados/invitaciones (login de usuario, tablas, traducción de invitaciones) que no corresponde al alcance actual de este repo (landing pública). Es probable que sean restos compartidos de otro repo (`iattend-events` o el dashboard) — no asumir que están conectados a un flujo real sin verificar antes de extenderlos.
- **Dependencias sin uso detectado en `src`**: `canvas-confetti`, `add-to-calendar-button-react`, `@ag-grid-community/locale`, `@types/aos` (sin `aos` como dependencia real). Confirmar antes de usarlas o de asumir que ya resuelven algo.
- **`firebase`** está configurado (`src/lib/firebase/firebase.ts`) con muy poco consumo real en el código — no asumir que la autenticación o storage de Firebase están activos en este repo sin verificarlo primero.
- **CSS y componentes de UI están gobernados por la skill `canplast-css-conventions`** (variables de `main.css`, tipografía en clases globales, CSS Modules por archivo, componentes de `antd`, iconos solo de `lucide-react`) — aplica al escribir o tocar cualquier página/componente de este repo.

## Pendientes / deuda técnica conocida
- Limpiar dependencias no usadas (`canvas-confetti`, `add-to-calendar-button-react`, `@ag-grid-community/locale`, `@types/aos`).
- Definir si `src/types/guests.ts`, `AppContext`/`appReducer` y `src/lib/translation/*` siguen siendo necesarios en este repo o deberían vivir solo en el repo de la app de invitaciones.
- Reemplazar los imports sueltos de `react-icons` (`Shipments`, `Footer`) por `lucide-react` para consistencia.
- Revisar si los redirects de `vercel.json` hacia `/dashboard`, `/invitations`, `/features` (mismo dominio `iattend.site`) siguen siendo necesarios.
