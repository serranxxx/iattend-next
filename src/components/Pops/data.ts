// Contenido de la landing de Pops (/pops). Copys finales del handoff
// "Landing Pops — Collage (tablero azul · lima)".

// Todos los CTA ("Send a Pop", "Comprar N Pops") llevan a la app. Aún no hay
// una ruta pública de creación/checkout de Pops: se manda al login y desde ahí
// el usuario crea su Pop en el dashboard.
export const POPS_APP_URL = `${process.env.NEXT_PUBLIC_APP_URL}/login`;

// Instagram de I attend (etiqueta lima del hero).
export const INSTAGRAM_URL = "https://www.instagram.com/iattend.mx/";

export const IMG = {
  obj1: "/pops/col-obj-1.webp",
  obj3: "/pops/col-obj-3.webp",
  polaroid1: "/pops/col-polaroid-1.webp",
  polaroid2: "/pops/col-polaroid-2.webp",
  polaroid3: "/pops/col-polaroid-3.webp",
  motoPop: "/pops/col-moto-pop.jpg",
  editorFoto: "/pops/col-editor-foto.webp",
  editorDesktop: "/pops/editor-desktop.png",
  motorola: "/pops/motorola-recorte.png",
  tijeras: "/pops/tijeras-recorte.png",
  wallet: "/pops/wallet_add.png",
  logo: "/pops/iattend_logo_negro.png",
  corazon: "/pops/stickers/corazon.svg",
  ojos: "/pops/stickers/ojos.svg",
  explosion: "/pops/stickers/explosion.svg",
  globo: "/pops/stickers/globo.svg",
  destello: "/pops/stickers/destello.svg",
};

export type Tone = "warm" | "white" | "gray" | "pink" | "sky" | "lime" | "limeAlt" | "dark";

export const STEPS: { n: string; title: string; text: string; tone: Tone }[] = [
  { n: "1.", title: "Dale estilo", text: "Colores, portada y fuente.", tone: "warm" },
  { n: "2.", title: "Arma tu evento", text: "Lugar, hora y lo que va a pasar.", tone: "pink" },
  { n: "3.", title: "Mándala fácil", text: "Por WhatsApp, 30 envíos gratis.", tone: "sky" },
  { n: "4.", title: "Recibe confirmaciones", text: "Quién va, en tiempo real.", tone: "lime" },
];

export const OCASIONES: { label: string; tone: Tone | "pinkStrong" }[] = [
  { label: "La reunión", tone: "gray" },
  { label: "Tus amigos", tone: "limeAlt" },
  { label: "Tu trabajo", tone: "white" },
  { label: "Cumpleaños", tone: "pink" },
  { label: "La cena del viernes", tone: "pinkStrong" },
  { label: "Junta de ventas", tone: "lime" },
];

// Problemas → soluciones: cada tarjeta es una situación real del anfitrión
// (título) y cómo la resuelve Pops. Cada una en un papel distinto.
// Módulo de producto (referencia interna, no se muestra): 01 Diseño · 02 Fecha,
// hora y lugar · 03 Confirmación · 04 Envíos WhatsApp · 05 Itinerario ·
// 06 Cómo llegar y clima · 07 Asistentes y chat · 08 Formulario · 09 Wallet.
export type PaperKind = "plain" | "notebook" | "grid" | "dots" | "postit" | "lined" | "dotsPink";

export type Feature = {
  n: string;
  q: string;
  a: string;
  tone: Tone;
  paper: PaperKind;
  pinkNumber?: boolean;
  sticker?: "explosion" | "globo";
  tape?: boolean;
  wallet?: boolean;
};

export const FEATURES: Feature[] = [
  { n: "01", q: "¿Y si la mando y luego ya no me gusta?", a: "La editas cuando quieras, aunque ya la tengan.", tone: "pink", paper: "plain", sticker: "explosion" },
  { n: "02", q: "Nos cambiaron la hora y ya las mandé todas", a: "La cambias una vez. Se actualiza para todos.", tone: "gray", paper: "notebook", pinkNumber: true },
  { n: "03", q: "El salón me pide el número final mañana y no sé cuántos van", a: "El número exacto, sin perseguir a nadie.", tone: "lime", paper: "grid" },
  { n: "04", q: "¿A mí no me invitaste?", a: "Les llega a todos. No se te pasa nadie.", tone: "white", paper: "dots", pinkNumber: true, tape: true },
  { n: "05", q: "Llegamos a las 8, ¿no? (comenzaba a las 6)", a: "Nadie se pierde lo importante.", tone: "limeAlt", paper: "postit" },
  { n: "06", q: "Pásame la ubi porfa", a: "Ya la tienen. Y saben si llevar suéter.", tone: "sky", paper: "grid" },
  { n: "07", q: "Es que no conozco a nadie, no sé si ir…", a: "Ven quién va y llegan ya platicando.", tone: "gray", paper: "lined", pinkNumber: true, sticker: "globo" },
  { n: "08", q: "¿Pollo o res? ¿Alguna alergia?", a: "Pregúntale a todos, sin perseguir a nadie.", tone: "pink", paper: "dotsPink" },
  { n: "09", q: "¿Me reenvías la invitación? Ya no la encuentro", a: "Guardada en su iPhone, a un toque.", tone: "dark", paper: "plain", wallet: true },
];

export type PricePlan = {
  kind: string;
  title: string;
  tone: "kraft" | "gray" | "lime";
  subtitle: string;
  /** `bold` marca el renglón en negritas (p. ej. el precio por Pop). */
  bullets: { text: string; bold?: boolean }[];
  price: string;
  /** Manuscrita antes del precio ("desde"). */
  pricePrefix?: string;
  /** Después del precio, en negritas ("/mes", "/Pop"). */
  pricePer?: string;
  /** Letra chica bajo el precio. */
  fine?: string;
  cta: string;
  best?: boolean;
};

// Valores vigentes al diseño (Stripe). Si cambian, actualizar aquí.
export const PLANS: PricePlan[] = [
  {
    kind: "suelto",
    title: "1 Pop",
    tone: "kraft",
    subtitle: "Para lo que surja hoy.",
    bullets: [{ text: "Invitación completa" }, { text: "30 envíos por WhatsApp" }, { text: "Pases, encuestas y chat" }],
    price: "$549",
    fine: "Pago único",
    cta: "Send a Pop",
  },
  {
    kind: "bucket",
    title: "5 Pops",
    tone: "gray",
    subtitle: "El paquete para la temporada.",
    bullets: [{ text: "5 invitaciones completas" }, { text: "Úsalos cuando quieras" }, { text: "Ahorras $496" }],
    price: "$450",
    pricePer: "/Pop",
    fine: "Total $2,249 · pago único",
    cta: "Comprar 5 Pops",
  },
  {
    kind: "bucket",
    title: "10 Pops",
    tone: "lime",
    subtitle: "Para quien organiza seguido.",
    bullets: [{ text: "10 invitaciones completas" }, { text: "$400 por Pop", bold: true }, { text: "Ahorras $1,490" }],
    pricePrefix: "desde",
    price: "$333",
    pricePer: "/mes",
    fine: "Hasta 12 MSI · o $4,000 de contado",
    cta: "Comprar 10 Pops",
    best: true,
  },
];
