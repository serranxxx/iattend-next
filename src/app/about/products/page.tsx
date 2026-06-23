import type { Metadata } from "next";
import styles from "./page.module.css";
import { Header } from "@/components/LandPage/Header/Header";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FooterLand } from "@/components/LandPage/Footer/Footer";

export const metadata: Metadata = {
  title: "Productos | I attend",
  description: "Descubre todos los productos de I attend: invitaciones digitales, gestión de invitados, pases digitales, acomodo de mesas, envíos automáticos y más.",
};

const PRODUCTS = [
  {
    id: "lia",
    name: "LIA",
    tagline: "Tu asistente de IA, siempre disponible",
    img: "https://picsum.photos/seed/abstract-tech-blue/900/600",
    size: "full",
    href: null,
    badge: "Nuevo",
  },
  {
    id: "sideevents",
    name: "Side Events",
    tagline: "Cada momento, una experiencia",
    img: "https://picsum.photos/seed/celebration-party/900/600",
    size: "half",
    href: "/about/side-events",
  },
  {
    id: "invitacion",
    name: "Invitación Digital",
    tagline: "Tu evento, contado con diseño",
    img: "https://picsum.photos/seed/elegant-wedding/1400/700",
    size: "half",
    href: "/about/invitacion-digital",
  },
  {
    id: "gestion",
    name: "Gestión de Invitados",
    tagline: "Control total, sin hojas de cálculo",
    img: "https://picsum.photos/seed/social-event-guests/900/600",
    size: "wide",
    href: "/about/guest-management",
  },
  {
    id: "whatsapp",
    name: "Envíos Automáticos",
    tagline: "Tu invitación llega sola",
    img: "https://picsum.photos/seed/phone-message/700/600",
    size: "narrow",
    href: "/about/envios-whatsapp",
  },
  {
    id: "pases",
    name: "Pases Digitales",
    tagline: "Acceso sin papel, en Apple Wallet",
    img: "https://picsum.photos/seed/golden-pass/700/600",
    size: "narrow",
    href: "/about/pases-digitales",
  },
  {
    id: "mesas",
    name: "Acomodo de Mesas",
    tagline: "Nadie sentado donde no es",
    img: "https://picsum.photos/seed/elegant-dining/900/600",
    size: "wide",
    href: "/about/mapa-de-mesas",
  },
];

export default function ProductsPage() {
  return (
    <div className={styles.page}>
      <Header />

      {/* Intro */}
      <section className={styles.intro}>
        <p className={styles.intro_eyebrow}>La familia completa</p>
        <h1 className={styles.intro_title}>
          Todo lo que necesitas<br />para tu evento.
        </h1>
      </section>

      {/* Bento grid */}
      <section className={styles.bento_wrap}>
        <div className={styles.bento}>
          {PRODUCTS.map((p) => (
            <div key={p.id} className={`${styles.card} ${styles[`card_${p.size}`]}`}>

              {/* Background image */}
              <img src={p.img} alt="" className={styles.card_img} />

              {/* Gradient overlay */}
              <div className={styles.card_overlay} />

              {/* Content */}
              <div className={styles.card_content}>
                {p.badge && <span className={styles.badge}>{p.badge}</span>}
                <h2 className={styles.card_name}>{p.name}</h2>
                <p className={styles.card_tagline}>{p.tagline}</p>
                {p.href ? (
                  <Link href={p.href} className={styles.card_link}>
                    Conocer más <ArrowRight size={13} strokeWidth={2.5} />
                  </Link>
                ) : (
                  <span className={styles.card_soon}>Próximamente</span>
                )}
              </div>

            </div>
          ))}
        </div>
      </section>
          <FooterLand />

</div>
  );
}
