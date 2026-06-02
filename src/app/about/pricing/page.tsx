import type { Metadata } from "next";
import styles from "./page.module.css";
import { Header } from "@/components/LandPage/Header/Header";
import Link from "next/link";
import { Check, Star, Gift, Mail, Sparkles, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Precios | I attend",
  description: "Conoce los planes de I attend: PRO y Lite con gestión completa de invitados.",
};

/* ── Plans ───────────────────────────── */
const PLANS = [
  {
    id: "pro",
    name: "PRO",
    tagline: "La experiencia completa: invita, gestiona y automatiza.",
    price: 3499,
    popular: true,
    features: [
      "Invitación Digital",
      "Gestión de Invitados",
      "Envíos Automáticos por WhatsApp",
      "Acomodo de Mesas",
      "Pases Digitales + Apple Wallet",
      "3 Side Events",
      "LIA — AI Assistant",
    ],
  },
  {
    id: "lite",
    name: "Lite",
    tagline: "Invitación digital con control de invitados.",
    price: 2499,
    originalPrice: 3125,
    discount: "20% OFF",
    features: [
      "Invitación Digital",
      "Gestión de Invitados",
      "Acomodo de Mesas",
      "1 Side Event",
    ],
  },
];

/* ── Pain points ─────────────────────── */
const PAIN_POINTS = [
  {
    product: "Invitación Digital",
    headline: "Sin imprenta. Sin reimpresiones. Sin excusas.",
    desc: "Un link, todo el evento. Modifícala cuantas veces quieras — tus invitados siempre ven la versión actualizada, sin que tengas que volver a mandar nada.",
  },
  {
    product: "Gestión de Invitados",
    headline: "Olvídate del Excel de 200 filas.",
    desc: "Sabes en tiempo real quién confirmó, quién canceló y quién aún no responde — sin tener que mandar un 'oye, ¿ya confirmaste?' más.",
  },
  {
    product: "Envíos Automáticos",
    headline: "200 invitados en 2 minutos.",
    desc: "Sin copiar y pegar, sin arriesgar tu número de WhatsApp. Cada invitado recibe su link personalizado directo a su celular con el API oficial de Meta.",
  },
  {
    product: "Acomodo de Mesas",
    headline: "El seating chart que no te quitará el sueño.",
    desc: "Arrastra, mueve, reorganiza cuantas veces quieras. Cuando estés listo, cada invitado ya sabe exactamente dónde sentarse desde su pase digital.",
  },
  {
    product: "Pases Digitales",
    headline: "El día del evento, que nada te abrume.",
    desc: "Sin listas impresas, sin filas en la entrada, sin buscar nombres en un Excel a las 7pm. Todo en la palma de la mano desde Apple Wallet.",
  },
  {
    product: "Side Events",
    headline: "Porque tu boda no es un solo momento.",
    desc: "La cena de bienvenida, el brunch del día siguiente, el civil — cada evento con sus propios invitados, confirmaciones y pases. Todo conectado.",
  },
  {
    product: "LIA — AI Assistant",
    headline: "Respuestas a las 2am sin que tú estés despierto.",
    desc: "Cuando algún invitado entre en pánico por el dress code a media noche, LIA responde por ti — siempre disponible dentro de la invitación.",
  },
];

/* ── Feature → SEO page links ───────── */
const FEATURE_LINKS: Record<string, string> = {
  "Invitación Digital":               "/about/invitacion-digital",
  "Gestión de Invitados":             "/about/guest-management",
  "Envíos Automáticos por WhatsApp":  "/about/envios-whatsapp",
  "Acomodo de Mesas":                 "/about/mapa-de-mesas",
  "Pases Digitales + Apple Wallet":   "/about/pases-digitales",
  "3 Side Events":                    "/about/side-events",
  "1 Side Event":                     "/about/side-events",
};

/* ── Gift steps ──────────────────────── */
const GIFT_STEPS = [
  {
    icon: <Gift size={26} strokeWidth={1.5} />,
    num: "01",
    title: "Elige y personaliza",
    desc: "Selecciona el plan que quieres regalar, escribe un mensaje personal y pon el correo de la pareja.",
  },
  {
    icon: <Mail size={26} strokeWidth={1.5} />,
    num: "02",
    title: "Nosotros lo enviamos",
    desc: "Ellos reciben un correo cuidado con tu mensaje, un código de activación y el link para empezar.",
  },
  {
    icon: <Sparkles size={26} strokeWidth={1.5} />,
    num: "03",
    title: "Ellos lo abren como regalo",
    desc: "Al entrar a I attend encuentran una tarjeta envuelta. La abren con animación y confetti — y su invitación ya está lista para usarse.",
  },
];

/* ── Page ────────────────────────────── */
export default function PricingPage() {
  return (
    <div className={styles.page}>

      {/* Fixed video background */}
      <div className={styles.video_bg}>
        <video autoPlay muted loop playsInline className={styles.video}>
          <source src="https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/landing/bucket.mp4" type="video/mp4" />
        </video>
        <div className={styles.video_overlay} />
      </div>

      <Header />

      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.hero_title}>Hecho para<br />tu momento.</h1>
        <p className={styles.hero_sub}>
          Cada boda es diferente. Encuentra el nivel que se adapta a lo que tú necesitas organizar.
        </p>
      </section>

      {/* Plan cards — stacked column */}
      <section className={styles.cards_section}>
        <div className={styles.cards_col}>
          {PLANS.map((plan) => (
            <div key={plan.id} className={`${styles.card} ${plan.popular ? styles.card_popular : ""}`}>
              {plan.popular && (
                <div className={styles.popular_badge}>
                  <Star size={13} fill="currentColor" strokeWidth={0} /> Más popular
                </div>
              )}
              <div className={styles.card_top}>
                <div>
                  <h2 className={styles.card_name}>{plan.name}</h2>
                  <p className={styles.card_tagline}>{plan.tagline}</p>
                </div>
                <div className={styles.card_price_block}>
                  {plan.originalPrice && (
                    <div className={styles.price_row}>
                      <span className={styles.original}>${plan.originalPrice.toLocaleString()}</span>
                      <span className={styles.discount_tag}>{plan.discount}</span>
                    </div>
                  )}
                  <span className={styles.price}>${plan.price.toLocaleString()}</span>
                </div>
              </div>
              <ul className={styles.card_features}>
                {plan.features.map((f) => (
                  <li key={f} className={styles.card_feature}>
                    <Check size={13} strokeWidth={2.5} />
                    {FEATURE_LINKS[f] ? (
                      <Link href={FEATURE_LINKS[f]} className={styles.feature_link}>
                        {f} <ArrowUpRight size={11} strokeWidth={2.5} />
                      </Link>
                    ) : f}
                  </li>
                ))}
              </ul>
              <a href="https://www.iattend.site/login?mode=register" className={styles.card_cta}>Comenzar</a>
            </div>
          ))}
        </div>
      </section>

      {/* Pain points */}
      <section className={styles.pain_section}>
        <div className={styles.pain_inner}>
          <p className={styles.pain_eyebrow}>Cada funcionalidad resuelve algo real</p>
          <h2 className={styles.pain_title}>Por qué funciona</h2>
          <div className={styles.pain_list}>
            {PAIN_POINTS.map((p, i) => (
              <div key={p.product} className={styles.pain_item}>
                <div className={styles.pain_row}>
                  <span className={styles.pain_num_circle}>{i + 1}</span>
                  <span className={styles.pain_product_tag}>{p.product}</span>
                </div>
                <p className={styles.pain_headline}>{p.headline}</p>
                <p className={styles.pain_desc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regala I attend */}
      <section className={styles.gift_section}>
        <div className={styles.gift_inner}>

          {/* Hook header */}
          <div className={styles.gift_header}>
            <p className={styles.gift_eyebrow}>El regalo que nadie espera y todos agradecen</p>
            <h2 className={styles.gift_title}>REGALA I ATTEND</h2>
            <p className={styles.gift_desc}>
              Regálales la herramienta con la que van a organizar toda su boda.
              Que se vaya el estrés y quede solo el momento.
            </p>
          </div>

          {/* 2-col: steps left, mockup right */}
          <div className={styles.gift_cols}>

            {/* Left: steps + SpinSVGs */}
            <div className={styles.gift_left}>
              {GIFT_STEPS.map((s, i) => (
                <div key={s.num} className={styles.gift_step_item}>
                  <div className={styles.gift_step_row}>
                    <span className={styles.gift_step_circle}>{i + 1}</span>
                    <span className={styles.gift_step_tag}>{s.title}</span>
                  </div>
                  <p className={styles.gift_step_desc}>{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Right: envelope mockup */}
            <div className={styles.gift_right}>
              <div className={styles.gift_card}>
                <div className={styles.gift_card_stripe} />
                <div className={styles.gift_card_body}>
                  <p className={styles.gift_card_pre}>Alguien pensó en ti</p>
                  <p className={styles.gift_card_headline}>para este momento.</p>
                  <p className={styles.gift_card_sub}>Tu invitación de boda perfecta ya está lista.<br />Solo falta que tú la hagas tuya.</p>
                </div>
                <div className={styles.gift_card_footer}>
                  <span className={styles.gift_code_label}>Tu código de regalo:</span>
                  <span className={styles.gift_code}>IATT-XXXX</span>
                  <div className={styles.gift_open_btn}>ABRIR MI REGALO →</div>
                </div>
              </div>
            </div>

          </div>

          {/* CTA below */}
          <div className={styles.gift_cta_wrap}>
            <Link href="/about/contact-us" className={styles.gift_cta}>
              <Gift size={18} strokeWidth={2} /> Regalar I attend
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
