// ── Catálogo de planes ───────────────────────────────────────────────────────
// La fuente de verdad de lo que incluye cada plan (créditos, side events,
// features, precio) es la tabla `plans` de Supabase, editable desde
// Admin → Planes y expuesta por el backend en `GET /api/plans`. La landing
// nunca debe hardcodear esos números: siempre se leen de aquí.

/** Tag de caché del catálogo; lo invalida /api/revalidate/plans. */
export const PLANS_CACHE_TAG = "plans";

export type PlanId = "free" | "paperless" | "lite" | "pro";

export type PlanIcon =
  | "invitation"
  | "dresscode"
  | "itinerary"
  | "gifts"
  | "gallery"
  | "design"
  | "edits"
  | "public"
  | "private"
  | "rsvp"
  | "guests"
  | "tables"
  | "whatsapp"
  | "passes"
  | "side_events"
  | "photo_wall"
  | "lia"
  | "check";

export type PlanLang = "es" | "en";

export type PlanFeature = {
  // "invitation" → "Tu invitación", "event" → "Gestión del evento" (checkout).
  group?: "invitation" | "event";
  icon: PlanIcon | string;
  es: string;
  en: string;
};

export type PlanHighlight = {
  title: string;
  note: string;
};

export type PlanPrice = {
  amount: number;
  currency: string;
  active: boolean;
};

export type Plan = {
  id: PlanId | string;
  name: string;
  tagline: string;
  // Párrafo de la tarjeta de /about/pricing. Links con la forma [texto](/ruta).
  description: string;
  // "Y además incluye" de esa misma tarjeta.
  highlights: PlanHighlight[];
  credits_included: number;
  side_events_included: number;
  can_buy_side_events: boolean;
  features: PlanFeature[];
  stripe_price_id: string | null;
  is_public: boolean;
  // En qué pantallas se ofrece (Admin → Planes → "Dónde se muestra").
  show_landing: boolean;
  show_checkout: boolean;
  show_app: boolean;
  sort_order: number;
  price: PlanPrice | null;
};

// Solo es un respaldo mientras el API no responde (p. ej. el endpoint aún no
// existe en producción o el backend está caído). Refleja el seed original del
// catálogo; la fuente real es Admin → Planes. No editar aquí para cambiar lo
// que incluye un plan.
export const FALLBACK_PLANS: Plan[] = [
  {
    id: "paperless",
    name: "Paperless",
    tagline: "La invitación digital esencial, simple y sin límites.",
    description: "La invitación digital esencial, simple y sin límites.",
    highlights: [],
    credits_included: 0,
    side_events_included: 0,
    can_buy_side_events: false,
    features: [
      { group: "invitation", icon: "invitation", es: "Invitación Paperless", en: "Paperless invitation" },
      { group: "invitation", icon: "design", es: "Diseño libre", en: "Free design" },
      { group: "invitation", icon: "edits", es: "Ediciones ilimitadas", en: "Unlimited edits" },
      { group: "event", icon: "public", es: "Evento público", en: "Public event" },
      { group: "event", icon: "rsvp", es: "Confirmación manual", en: "Manual confirmation" },
    ],
    stripe_price_id: "price_1SkRvtAAdNlITNVbj8BA6F2Q",
    is_public: true,
    show_landing: false,
    show_checkout: false,
    show_app: true,
    sort_order: 1,
    price: { amount: 849, currency: "mxn", active: true },
  },
  {
    id: "lite",
    name: "Lite",
    tagline: "Invitación digital con control de invitados.",
    description: "Incluye una [invitación digital](/about/invitacion-digital) para que te olvides de las impresiones y reimpresiones. Un [gestor de invitados](/about/guest-management) para alejarte del Excel de 200 filas — sabes quién confirmó sin perseguir a nadie. [Acomodo de mesas](/about/mapa-de-mesas) para organizar el seating chart sin dolores de cabeza. Y un [Side Event](/about/side-events) para ese momento extra que no puede faltar.",
    highlights: [],
    credits_included: 0,
    side_events_included: 1,
    can_buy_side_events: true,
    features: [
      { group: "invitation", icon: "invitation", es: "Portada de invitación", en: "Invitation cover" },
      { group: "invitation", icon: "dresscode", es: "Dresscode", en: "Dress code" },
      { group: "invitation", icon: "itinerary", es: "Itinerario", en: "Itinerary" },
      { group: "invitation", icon: "gifts", es: "Mesa de regalos", en: "Gift registry" },
      { group: "invitation", icon: "gallery", es: "Galería de fotos", en: "Photo gallery" },
      { group: "event", icon: "guests", es: "Lista de invitados", en: "Guest list" },
      { group: "event", icon: "tables", es: "Acomodo de mesas", en: "Seating chart" },
      { group: "event", icon: "side_events", es: "{side_events} Side event", en: "{side_events} Side event" },
    ],
    stripe_price_id: "price_1Tl9jyAAdNlITNVbm0hq6omU",
    is_public: true,
    show_landing: true,
    show_checkout: true,
    show_app: true,
    sort_order: 2,
    price: { amount: 2899, currency: "mxn", active: true },
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "La experiencia completa: invita, gestiona y automatiza.",
    description: "Incluye una [invitación digital](/about/invitacion-digital) para que te olvides de impresiones y reimpresiones. Un [gestor de invitados](/about/guest-management) para alejarte del Excel de 200 filas: sabes en tiempo real quién confirmó y quién no, sin perseguir a nadie. Y el [acomodo de mesas](/about/mapa-de-mesas) para que el seating chart no te quite el sueño. Y un [Side Event](/about/side-events) para ese momento extra que no puede faltar.",
    highlights: [
      { title: "Envíos automáticos por WhatsApp", note: "invita a todos en minutos, sin copiar y pegar, sin arriesgar tu número." },
      { title: "2 Side Events adicionales", note: "porque tu boda son muchos momentos — la cena, el brunch, el civil, todo desde el mismo lugar." },
      { title: "Pases digitales + Apple Wallet", note: "para que nadie busque listas impresas el día del evento ni haga filas en la entrada." },
    ],
    credits_included: 300,
    side_events_included: 3,
    can_buy_side_events: true,
    features: [
      { group: "invitation", icon: "invitation", es: "Portada de invitación", en: "Invitation cover" },
      { group: "invitation", icon: "dresscode", es: "Dresscode", en: "Dress code" },
      { group: "invitation", icon: "itinerary", es: "Itinerario", en: "Itinerary" },
      { group: "invitation", icon: "gifts", es: "Mesa de regalos", en: "Gift registry" },
      { group: "invitation", icon: "gallery", es: "Galería de fotos", en: "Photo gallery" },
      { group: "event", icon: "guests", es: "Lista de invitados", en: "Guest list" },
      { group: "event", icon: "tables", es: "Acomodo de mesas", en: "Seating chart" },
      { group: "event", icon: "side_events", es: "{side_events} Side events", en: "{side_events} Side events" },
      { group: "event", icon: "photo_wall", es: "Photo Wall", en: "Photo Wall" },
      { group: "event", icon: "whatsapp", es: "Envíos por WhatsApp · {credits} créditos", en: "WhatsApp sends · {credits} credits" },
      { group: "event", icon: "passes", es: "Pases en Apple Wallet", en: "Apple Wallet passes" },
      { group: "event", icon: "lia", es: "Lia · asistente IA", en: "Lia · AI assistant" },
    ],
    stripe_price_id: "price_1Tl9fQAAdNlITNVb953oCZLs",
    is_public: true,
    show_landing: true,
    show_checkout: true,
    show_app: true,
    sort_order: 3,
    price: { amount: 3999, currency: "mxn", active: true },
  },
];

// `IATTEND_API_URL` ya trae el sufijo `/api` en el .env; se normaliza para no
// terminar pidiendo `/api/api/plans` si algún día se configura sin él.
function plansUrl(): string | null {
  const base = process.env.IATTEND_API_URL ?? process.env.NEXT_PUBLIC_IATTEND_API_URL;
  if (!base) return null;
  return `${base.replace(/\/+$/, "").replace(/\/api$/, "")}/api/plans`;
}

const toNumber = (v: unknown): number => (typeof v === "number" && Number.isFinite(v) ? v : 0);

const fallbackOf = (id: unknown) => FALLBACK_PLANS.find((p) => p.id === id);

// Normaliza lo que llega del API para que un campo faltante no rompa el render.
function normalizePlan(raw: Partial<Plan>): Plan {
  return {
    id: String(raw.id ?? ""),
    name: raw.name ?? "",
    tagline: raw.tagline ?? "",
    // Sin la columna (migración 2026-09-25b sin correr) se usa el copy de
    // respaldo, para que la tarjeta no salga sin descripción.
    description: raw.description ?? fallbackOf(raw.id)?.description ?? "",
    highlights: Array.isArray(raw.highlights) ? raw.highlights : fallbackOf(raw.id)?.highlights ?? [],
    credits_included: toNumber(raw.credits_included),
    side_events_included: toNumber(raw.side_events_included),
    can_buy_side_events: Boolean(raw.can_buy_side_events),
    features: Array.isArray(raw.features) ? raw.features : [],
    stripe_price_id: raw.stripe_price_id ?? null,
    is_public: raw.is_public ?? true,
    // Sin las columnas (migración 2026-09-26 sin correr) se respeta lo que se
    // veía antes: Pro y Lite en landing y checkout.
    show_landing: raw.show_landing ?? ["pro", "lite"].includes(String(raw.id)),
    show_checkout: raw.show_checkout ?? ["pro", "lite"].includes(String(raw.id)),
    show_app: raw.show_app ?? ["pro", "lite", "paperless"].includes(String(raw.id)),
    sort_order: toNumber(raw.sort_order),
    price: raw.price && typeof raw.price.amount === "number" ? raw.price : null,
  };
}

const bySortOrder = (a: Plan, b: Plan) => a.sort_order - b.sort_order;

/**
 * Catálogo ordenado por `sort_order`. Se revalida cada 5 min (ISR). Ante
 * cualquier error (red, 404, JSON inválido, catálogo vacío) devuelve
 * FALLBACK_PLANS para que ni el build ni la página se caigan.
 */
export async function getPlans(): Promise<Plan[]> {
  const url = plansUrl();
  if (!url) return [...FALLBACK_PLANS].sort(bySortOrder);

  try {
    const res = await fetch(url, {
      // El tag permite refrescar al instante al guardar en Admin → Planes
      // (POST /api/revalidate/plans); las 5 min son solo el respaldo.
      next: { revalidate: 300, tags: [PLANS_CACHE_TAG] },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const json = (await res.json()) as { ok?: boolean; plans?: Partial<Plan>[] };
    if (!json.ok || !Array.isArray(json.plans) || json.plans.length === 0) {
      throw new Error("Respuesta sin planes");
    }

    return json.plans.map(normalizePlan).sort(bySortOrder);
  } catch (error) {
    console.warn(`[plans] No se pudo leer ${url}, se usa FALLBACK_PLANS:`, (error as Error).message);
    return [...FALLBACK_PLANS].sort(bySortOrder);
  }
}

export async function getPlan(id: PlanId | string): Promise<Plan | undefined> {
  const plans = await getPlans();
  return plans.find((p) => p.id === id);
}

/**
 * Sustituye `{credits}` / `{side_events}` con los números del plan. Devuelve
 * null si la línea usa un marcador que vale 0: esa línea no se muestra. Misma
 * regla que `planText` en iattend-vite (src/hooks/usePlans.js).
 */
export function planText(plan: Plan, text: string | null | undefined): string | null {
  const values: Record<string, number> = {
    credits: plan.credits_included,
    side_events: plan.side_events_included,
  };
  let hidden = false;
  const result = String(text ?? "").replace(/{(\w+)}/g, (match, key: string) => {
    if (values[key] === undefined) return match;
    if (!values[key]) hidden = true;
    return values[key].toLocaleString("es-MX");
  });
  return hidden || !result.trim() ? null : result;
}

/** Texto de una feature en el idioma pedido (null si queda oculta). */
export function featureText(plan: Plan, feature: PlanFeature, lang: PlanLang = "es"): string | null {
  return planText(plan, feature[lang] || feature.es);
}

/** "Y además incluye" ya con texto; los puntos ocultos se quitan. */
export function planHighlights(plan: Plan): PlanHighlight[] {
  return plan.highlights
    .map((h) => ({ title: planText(plan, h.title), note: planText(plan, h.note) ?? "" }))
    .filter((h): h is PlanHighlight => Boolean(h.title));
}

export type DescriptionSegment = { text: string; href?: string };

/** Parte la descripción en texto y links `[texto](/ruta)`. */
export function descriptionSegments(text: string | null | undefined): DescriptionSegment[] {
  const source = String(text ?? "");
  const segments: DescriptionSegment[] = [];
  const pattern = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = pattern.exec(source))) {
    if (m.index > last) segments.push({ text: source.slice(last, m.index) });
    segments.push({ text: m[1], href: m[2] });
    last = m.index + m[0].length;
  }
  if (last < source.length) segments.push({ text: source.slice(last) });
  return segments;
}

/** "1 Side Event", "2 Side Events"; 0 → null (no se menciona). */
export function sideEventsLabel(n: number): string | null {
  if (!n || n <= 0) return null;
  return `${n} Side Event${n === 1 ? "" : "s"}`;
}

/** "$3,999" — el sufijo "MXN" lo pone cada página según su diseño. */
export function formatMXN(amount: number): string {
  return `$${amount.toLocaleString("es-MX")}`;
}

/** Une nombres en español: "A", "A y B", "A, B y C". */
export function joinEs(items: string[]): string {
  if (items.length <= 1) return items[0] ?? "";
  return `${items.slice(0, -1).join(", ")} y ${items[items.length - 1]}`;
}
