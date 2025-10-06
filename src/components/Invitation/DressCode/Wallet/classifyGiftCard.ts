// ❌ ya no importes imágenes desde src
// import amazon from "../../../../banks/AMAZON.png";
// ...

export type GiftCard = {
  kind: "store" | "bank";
  brand?: string | null;
  bank?: string | null;
};

export type BrandKey =
  | "amazon"
  | "banamex"
  | "banorte"
  | "bbva"
  | "hsbc"
  | "liverpool"
  | "nu"
  | "palacio"
  | "santander"
  | "scotiabank"
  | "sears";

type BrandMeta = {
  className: BrandKey | "default";
  imagePath?: string; // 👉 ruta pública
};

const normalize = (s?: string) =>
  (s ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, " ")
    .trim();

const ALIAS_TO_KEY: Record<string, BrandKey> = {
  liverpool: "liverpool",
  "el puerto de liverpool": "liverpool",
  "palacio de hierro": "palacio",
  "el palacio de hierro": "palacio",
  amazon: "amazon",
  sears: "sears",
  bbva: "bbva",
  banamex: "banamex",
  citibanamex: "banamex",
  banorte: "banorte",
  santander: "santander",
  hsbc: "hsbc",
  scotiabank: "scotiabank",
  nu: "nu",
  nubank: "nu",
  "nu bank": "nu",
  "banco nu": "nu",
};

// 👇 mapea a rutas públicas
const BRAND_META: Record<BrandKey, BrandMeta> = {
  amazon:     { className: "amazon",     imagePath: "/banks/AMAZON.png" },
  banamex:    { className: "banamex",    imagePath: "/banks/BANAMEX.png" },
  banorte:    { className: "banorte",    imagePath: "/banks/BANORTE.png" },
  bbva:       { className: "bbva",       imagePath: "/banks/BBVA.png" },
  hsbc:       { className: "hsbc",       imagePath: "/banks/HSBC.png" },
  liverpool:  { className: "liverpool",  imagePath: "/banks/LIVERPOOL.png" },
  nu:         { className: "nu",         imagePath: "/banks/NU.png" },
  palacio:    { className: "palacio",    imagePath: "/banks/PALACIO.png" },
  santander:  { className: "santander",  imagePath: "/banks/SANTANDER.png" },
  scotiabank: { className: "scotiabank", imagePath: "/banks/SCOTIABANK.png" },
  sears:      { className: "sears",      imagePath: "/banks/SEARS.png" },
};

export function classifyGiftCard(card: GiftCard): {
  key?: BrandKey;
  className: string;
  imageUrl: string | null; // listo para <img> o next/image
} {
  const raw = card.kind === "store" ? card.brand ?? "" : card.bank ?? "";
  const key = ALIAS_TO_KEY[normalize(raw)];
  if (!key) return { className: "default", imageUrl: null };

  const meta = BRAND_META[key];
  return { key, className: meta.className, imageUrl: meta.imagePath ?? null };
}