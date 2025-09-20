import type { StaticImageData } from "next/image";
import amazon from "../../../../assets/banks/AMAZON.png";
import banamex from "../../../../assets/banks/BANAMEX.png";
import banorte from "../../../../assets/banks/BANORTE.png";
import bbva from "../../../../assets/banks/BBVA.png";
import hsbc from "../../../../assets/banks/HSBC.png";
import liverpool from "../../../../assets/banks/LIVERPOOL.png";
import nu from "../../../../assets/banks/NU.png";
import palacio from "../../../../assets/banks/PALACIO.png";
import santander from "../../../../assets/banks/SANTANDER.png";
import scotiabank from "../../../../assets/banks/SCOTIABANK.png";
import sears from "../../../../assets/banks/SEARS.png";

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
  image?: StaticImageData;
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

const BRAND_META: Record<BrandKey, BrandMeta> = {
  amazon: { className: "amazon", image: amazon },
  banamex: { className: "banamex", image: banamex },
  banorte: { className: "banorte", image: banorte },
  bbva: { className: "bbva", image: bbva },
  hsbc: { className: "hsbc", image: hsbc },
  liverpool: { className: "liverpool", image: liverpool },
  nu: { className: "nu", image: nu },
  palacio: { className: "palacio", image: palacio },
  santander: { className: "santander", image: santander },
  scotiabank: { className: "scotiabank", image: scotiabank },
  sears: { className: "sears", image: sears },
};

export function classifyGiftCard(card: GiftCard): {
  key?: BrandKey;
  className: string;
  imageUrl: string | null; // 👈 URL lista para <img>
} {
  const raw = card.kind === "store" ? card.brand ?? "" : card.bank ?? "";
  const key = ALIAS_TO_KEY[normalize(raw)];
  if (!key) return { className: "default", imageUrl: null };

  const meta = BRAND_META[key];
  const imageUrl = typeof meta.image === "string" ? meta.image : (meta.image as StaticImageData | undefined)?.src ?? null;

  return { key, className: meta.className, imageUrl };
}
