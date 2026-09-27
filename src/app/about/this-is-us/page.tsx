import type { Metadata } from "next";
import styles from "./page.module.css";
import { Header } from "@/components/LandPage/Header/Header";
import { FooterLand } from "@/components/LandPage/Footer/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nuestra historia | I attend",
  description: "I attend nació porque vimos a novias increíbles perder horas, energía y paz mental en algo que debería ser simple. Somos el sistema que hace que la parte más pesada de planear tu boda deje de pesarte.",
  openGraph: {
    title: "La historia detrás de I attend",
    description: "Nacimos de ver cómo algo tan especial como una boda se convertía en una carga. I attend existe para que tú disfrutes el proceso.",
    url: "https://iattend.site/about/this-is-us",
    siteName: "I attend",
    images: [{ url: "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/meta.jpg", width: 1200, height: 630, alt: "I attend – Nuestra historia" }],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "La historia detrás de I attend",
    description: "Nacimos de ver cómo algo tan especial como una boda se convertía en una carga. I attend existe para que disfrutes el proceso.",
    images: ["https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/meta.jpg"],
  },
};

const CHAPTERS = [
  {
    num: "01",
    title: "El punto de partida",
    imgLabel: "Pau buscando invitaciones, momento de estrés",
    imgSide: "left" as const,
    body: [
      "Cuando Pau se comprometió en 2024 comenzó la búsqueda de unas invitaciones que fueran elegantes, personales, privadas y que le facilitaran algo que anticipadamente la tenía muy estresada: la confirmación de sus invitados. Esta búsqueda se extendió sin éxito.",
    ],
  },
  {
    num: "02",
    title: "El encuentro",
    imgLabel: "Alberto diseñando/programando, close-up detalle",
    imgSide: "right" as const,
    body: [
      "Hasta que se acercó con Alberto, un buen amigo dispuesto a ayudar; programador, dedicado hasta el detalle y sumamente perfeccionista.",
      "Y así empezó a tomar forma algo nuevo. Algo que resolviera todo lo que el mercado de las invitaciones estaba dejando a medias.",
    ],
  },
  {
    num: "03",
    title: "Lo que se construyó",
    imgLabel: "mockup de la plataforma / pareja usando el dashboard",
    imgSide: "left" as const,
    body: [
      "Alberto diseñó una plataforma que superó cualquier expectativa. Un espacio donde Pau podía diseñar su invitación a su gusto, gestionar a cada uno de sus invitados y, sobre todo, dejar de cargar sola con el estrés de perseguir confirmaciones una por una.",
    ],
  },
];

export default function ThisIsUsPage() {
  return (
    <div className={styles.page}>
      <Header />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.hero_bg} />
        <div className={styles.hero_label_pill}>IMG DE FONDO · Pau y Alberto, retrato editorial candid, full-bleed</div>
        <div className={styles.hero_content}>
          <p className={styles.hero_eyebrow}>Sobre nosotros</p>
          <h1 className={styles.hero_title}>
            I attend surgió de la necesidad de una novia recién comprometida y la bondad de un amigo dispuesto a ayudarla.
          </h1>
          <Link href="/about" className={styles.hero_btn}>¡Bienvenidos!</Link>
        </div>
      </section>

      {/* ── Story chapters ── */}
      {CHAPTERS.map((ch) => (
        <section
          key={ch.num}
          className={`${styles.chapter} ${ch.imgSide === "right" ? styles.chapter_flip : ""}`}
        >
          <div className={styles.chapter_img_wrap}>
            <div className={styles.chapter_img_placeholder} />
            <span className={styles.img_label}>IMG · {ch.imgLabel}</span>
          </div>

          <div className={styles.chapter_text}>
            <p className={styles.chapter_eyebrow}>{ch.num} · {ch.title.toUpperCase()}</p>
            {ch.body.map((p, i) => (
              <p key={i} className={styles.chapter_body}>{p}</p>
            ))}
          </div>
        </section>
      ))}

      {/* ── Quote ── */}
      <section className={styles.quote_section}>
        <blockquote className={styles.quote_text}>
          &ldquo;Así nació I attend: desde las necesidades reales de una novia. Y desde entonces continúa nutriéndose con cada pareja que nos elige; con cada necesidad real que nos comparten (y claro, hasta con las tendencias que van llegando).&rdquo;
        </blockquote>
        <p className={styles.quote_tagline}>Your event, handled.</p>
      </section>

      {/* ── Dark closing ── */}
      <section className={styles.dark_section}>
        <p className={styles.dark_text}>
          Eso es I attend: la bondad de un amigo, la dedicación y la disposición de escuchar de verdad lo que cada pareja va necesitando. Todo esto para que el proceso de planear tu boda se sienta, por fin, bajo control.
        </p>
        <Link href="/about" className={styles.dark_btn}>¡Bienvenidos!</Link>
      </section>

      <FooterLand />
    </div>
  );
}
