import type { Metadata } from "next";
import { ArrowRight, CalendarPlus, Heart, Hourglass, ImagePlus, Send, Sparkles } from "lucide-react";
import { Header } from "@/components/LandPage/Header/Header";
import { FooterLand } from "@/components/LandPage/Footer/Footer";
import { PhoneFrame } from "@/components/PhoneFrame/PhoneFrame";
import styles from "./page.module.css";

// Mini landing del Save the Date gratis (CTA principal del navbar). Todo lo
// que se crea pasa por la app: https://www.iattend.site/save-the-date.
const CREAR_URL = "https://www.iattend.site/save-the-date";
// Save the Date real, para que se vea funcionando dentro del teléfono.
const DEMO_URL = "https://www.iattend.events/save-the-date/07147a8b-aee8-4de4-9270-cfe2255e8899";

export const metadata: Metadata = {
  title: "Save the Date digital gratis para tu boda | I attend",
  description:
    "Crea tu Save the Date digital gratis en minutos: tu foto, sus nombres y la fecha, con cuenta regresiva. Compártelo por WhatsApp y recibe las reacciones de tus invitados en tiempo real.",
  keywords: [
    "save the date gratis",
    "save the date digital",
    "save the date boda",
    "invitación save the date",
    "save the date whatsapp",
    "reserva la fecha boda",
    "I attend save the date",
  ],
  openGraph: {
    title: "Tu Save the Date, gratis | I attend",
    description:
      "Diséñalo en minutos, compártelo con un link y mira las reacciones de tus invitados llegar en tiempo real.",
    url: "https://iattend.site/about/save-the-date",
    siteName: "I attend",
    images: [
      {
        url: "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/meta.jpg",
        width: 1200,
        height: 630,
        alt: "I attend – Save the Date digital gratis",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tu Save the Date, gratis | I attend",
    description: "Diséñalo en minutos y compártelo por WhatsApp. Gratis.",
    images: ["https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/meta.jpg"],
  },
  robots: { index: true, follow: true },
};

const INCLUYE = [
  {
    icon: Hourglass,
    title: "Cuenta regresiva",
    text: "Días, horas y minutos para el gran día, siempre al centro.",
  },
  {
    icon: Heart,
    title: "Reacciones y mensajes",
    text: "Tus invitados te dejan un corazón o unas palabras, y tú los ves llegar al momento.",
  },
  {
    icon: CalendarPlus,
    title: "Directo a su calendario",
    text: "Con un toque la fecha queda guardada en su celular. Nadie tiene excusa para olvidarla.",
  },
];

const PASOS = [
  {
    icon: ImagePlus,
    title: "Crea el tuyo",
    text: "Sube tu foto favorita, escribe sus nombres y la fecha. En minutos está listo, sin saber de diseño.",
  },
  {
    icon: Send,
    title: "Compártelo",
    text: "Un link para mandar por WhatsApp o publicar en tus redes. Se abre en cualquier celular.",
  },
  {
    icon: Sparkles,
    title: "Recibe la emoción",
    text: "Mira las reacciones y los mensajes de tus invitados en tiempo real, desde tu cuenta.",
  },
];

const PREGUNTAS = [
  {
    q: "¿De verdad es gratis?",
    a: "Sí. Tu Save the Date no tiene costo ni fecha de vencimiento, y no te pedimos tarjeta.",
  },
  {
    q: "¿Qué necesito para crearlo?",
    a: "Una foto, sus nombres y la fecha de tu evento. Si todavía no tienes todos los detalles, no pasa nada: ese es justo el punto de un Save the Date.",
  },
  {
    q: "¿Y cuando quiera la invitación completa?",
    a: "Cuando quieras, lo conviertes en tu invitación con confirmaciones, lista de invitados y mesas, desde la misma cuenta.",
  },
];

export default function SaveTheDatePage() {
  return (
    <div className={styles.page}>
      <Header />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.hero_text}>
          <span className={styles.eyebrow}>Gratis, para siempre</span>
          <h1 className={styles.title}>
            Tu Save the Date,<br /><em>gratis.</em>
          </h1>
          <p className={styles.sub}>
            Que tus invitados aparten la fecha desde el día uno. Diséñalo en minutos,
            compártelo por WhatsApp y recibe sus reacciones en tiempo real.
          </p>
          <a href={CREAR_URL} className={styles.cta}>
            Crea el tuyo gratis <ArrowRight size={18} strokeWidth={2.6} />
          </a>
          <span className={styles.cta_note}>Sin tarjeta · listo en minutos</span>
        </div>

        <div className={styles.hero_visual}>
          {/* Mismo teléfono que el editor de la app (BuildContent). */}
          <div className={styles.phone}>
            <PhoneFrame scale={0.78}>
              <iframe src={DEMO_URL} title="Ejemplo de Save the Date de I attend" loading="lazy" />
            </PhoneFrame>
          </div>
          <span className={styles.phone_caption}>Así se ve el de Ale & Santiago</span>
        </div>
      </section>

      {/* ── Qué incluye ── */}
      <section className={styles.section}>
        <span className={styles.section_eyebrow}>Qué es</span>
        <h2 className={styles.section_title}>El primer aviso de tu boda</h2>
        <p className={styles.section_sub}>
          Un Save the Date es ese mensaje que llega meses antes para que nadie haga otros
          planes. El tuyo vive en un link: bonito, en tu celular y en el de todos.
        </p>

        <div className={styles.grid}>
          {INCLUYE.map(({ icon: Icon, title, text }) => (
            <div key={title} className={styles.card}>
              <span className={styles.card_icon}><Icon size={20} strokeWidth={2} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Cómo funciona ── */}
      <section className={styles.section}>
        <span className={styles.section_eyebrow}>Cómo funciona</span>
        <h2 className={styles.section_title}>Tres pasos y listo</h2>

        <ol className={styles.steps}>
          {PASOS.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className={styles.step}>
              <span className={styles.step_num}>{i + 1}</span>
              <span className={styles.step_icon}><Icon size={20} strokeWidth={2} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Preguntas ── */}
      <section className={styles.section}>
        <span className={styles.section_eyebrow}>Preguntas</span>
        <h2 className={styles.section_title}>Lo que más nos preguntan</h2>

        <div className={styles.faq}>
          {PREGUNTAS.map(({ q, a }) => (
            <details key={q} className={styles.faq_item}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className={styles.final}>
        <h2>Aparta la fecha hoy</h2>
        <p>Tu Save the Date gratis, listo para compartir en minutos.</p>
        <a href={CREAR_URL} className={styles.cta}>
          Crea el tuyo gratis <ArrowRight size={18} strokeWidth={2.6} />
        </a>
      </section>

      <FooterLand />
    </div>
  );
}
