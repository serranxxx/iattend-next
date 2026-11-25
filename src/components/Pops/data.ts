// Contenido de la landing de Pops (/pops). Copys finales del handoff
// "Landing Pops — Collage (tablero azul · lima)".

// Los CTA "Make a Pop" / "Share a Pop" llevan a la app. Aún no hay una ruta
// pública de creación de Pops: se manda al login y desde ahí el usuario crea
// su Pop en el dashboard.
export const POPS_APP_URL = `${process.env.NEXT_PUBLIC_APP_URL}/login`;

// "Suscribirme a Pops+" todavía no tiene destino (Stripe o flujo en la app).
// Cuando exista, poner aquí la URL; con null el botón no lleva a ningún lado.
export const POPS_PLUS_URL: string | null = null;

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
  // Cuaderno de precios. Provisionales hasta tener las fotos finales del
  // handoff (foto pegada 270×160 y polaroid "la carne asada" 182×128).
  notebookPhoto: "/pops/col-obj-1.webp",
  notebookPolaroid: "/pops/col-polaroid-2.webp",
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

// Precios: cuaderno abierto con Gratis (izquierda) y Pops+ (derecha).
export type NotebookNote = { q: string; a: string };

export const FREE_PLAN = {
  title: "Gratis",
  subtitle: "para todos · para lo que surja hoy.",
  items: [
    { q: "Hazla tú, que te quedan bonitas", a: "Lista en minutos, desde tu celular." },
    { q: "¿Y al final quién va?", a: "Lo ves en vivo, sin preguntar en el grupo." },
    { q: "Pásame la ubi", a: "Ya la tienen, con hora y mapa." },
    { q: "Siempre no es el sábado", a: "La cambias una vez y se actualiza para todos." },
  ] as NotebookNote[],
  price: "$0",
  priceNote: "gratis, siempre",
  fine: "Hasta 30 personas por Pop · 3 Pops activos al mismo tiempo",
  cta: "Make a Pop",
  ctaSticker: "gratis",
  ctaNote: "↑ es gratis, de verdad",
};

// Color y rotación de cada post-it viven en notebook.module.css (postIt_<color>).
export type PostIt = NotebookNote & { color: "lime" | "pink" | "sky" | "white" | "limeAlt" };

export const PLUS_PLAN = {
  subtitle: "para quien siempre termina organizando.",
  items: [
    { q: "Somos como 80, ¿sí caben?", a: "Invita a todos. Sin tope de personas ni de Pops.", color: "lime" },
    { q: "Ocupo nombre, puesto y talla de playera", a: "Pídelo en el registro y descárgalo en Excel.", color: "pink" },
    { q: "No encuentro mi pase", a: "Lo guardan en Apple Wallet, a un toque en su iPhone.", color: "sky" },
    { q: "Son los mismos de la vez pasada", a: "Trae tu lista de otro evento en segundos.", color: "white" },
    { q: "¿Dónde quedaron las fotos de la posada?", a: "Tus archivos se quedan contigo.", color: "limeAlt" },
  ] as PostIt[],
  price: "$259",
  per: "/mes",
  fine: "MXN · cancela cuando quieras",
  cta: "Suscribirme a Pops+",
  polaroidCaption: "la carne asada ★",
};
