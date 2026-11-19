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
  motoPop: "/pops/col-moto-pop.webp",
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
  { n: "1.", title: "Dale estilo", text: "Escoge colores, portada y fuente. Lo que vaya con el evento.", tone: "warm" },
  { n: "2.", title: "Arma tu evento", text: "Pon el lugar, la hora y lo que va a pasar. Lo demás lo agregas después.", tone: "pink" },
  { n: "3.", title: "Mándala", text: "Comparte tu link por WhatsApp, con hasta 30 envíos automáticos gratis.", tone: "sky" },
  { n: "4.", title: "Recibe confirmaciones", text: "Mira quién va, en tiempo real. Cada quien guarda su pase en Apple Wallet.", tone: "lime" },
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
  { n: "05", q: "Llegamos a las 8, ¿no? (y la misa era a las 6)", a: "Nadie se pierde lo importante.", tone: "limeAlt", paper: "postit" },
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
  perPop?: string;
  bullets?: string[];
  price?: string;
  rows?: [string, string, string][];
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
    bullets: ["Invitación completa", "30 envíos por WhatsApp", "Pases, encuestas y chat"],
    price: "$549",
    cta: "Send a Pop",
  },
  {
    kind: "bucket",
    title: "5 Pops",
    tone: "gray",
    subtitle: "5 por el precio de 4 · ",
    perPop: "$440 por Pop",
    rows: [
      ["De contado", "$2,200", "—"],
      ["3 meses", "$2,370", "$790"],
      ["6 meses", "$2,430", "$405"],
    ],
    cta: "Comprar 5 Pops",
  },
  {
    kind: "bucket",
    title: "10 Pops",
    tone: "lime",
    subtitle: "10 por el precio de 7 · ",
    perPop: "$385 por Pop",
    rows: [
      ["De contado", "$3,850", "—"],
      ["3 meses", "$4,170", "$1,390"],
      ["6 meses", "$4,320", "$720"],
      ["12 meses", "$4,560", "$380"],
    ],
    cta: "Comprar 10 Pops",
    best: true,
  },
];
