import type { Metadata } from "next";
import { Fragment, type ReactNode } from "react";
import styles from "./page.module.css";
import { Header } from "@/components/LandPage/Header/Header";
import Link from "next/link";
import { Star, Gift, Mail, Sparkles, ShoppingCart, Wand2, Check } from "lucide-react";
import { FooterLand } from "@/components/LandPage/Footer/Footer";
import { descriptionSegments, formatMXN, formatMXNMonthly, getPlans, longestInstallment, planHighlights, planText, type Plan, type PlanInstallment } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Planes y Precios | I attend",
  description: "Elige el plan que va con tu boda. Desde invitación digital hasta gestión completa de invitados, confirmaciones automáticas, mapa de mesas y pases digitales. Sin sorpresas, sin complicaciones.",
  keywords: [
    "precios invitaciones digitales",
    "plan boda I attend",
    "gestión de invitados precio",
    "invitación digital costo",
    "plan pro boda",
    "plan lite boda",
    "I attend precios",
  ],
  openGraph: {
    title: "Planes y Precios | I attend",
    description: "Plan Pro o Lite — elige el que va con tu boda. Invitación digital, invitados, mesas, pases y envíos automáticos. Sin sorpresas.",
    url: "https://iattend.site/about/pricing",
    siteName: "I attend",
    images: [{ url: "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/meta.jpg", width: 1200, height: 630, alt: "I attend – Planes y Precios" }],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planes y Precios | I attend",
    description: "Plan Pro o Lite — elige el que va con tu boda. Todo lo que necesitas, sin sorpresas.",
    images: ["https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/meta.jpg"],
  },
};

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

/* ── Plans ───────────────────────────── */
// Todo el contenido de la tarjeta (nombre, frase, precio, descripción y "Y además
// incluye") sale del catálogo: se edita en Admin → Planes de iattend-vite, que
// muestra una vista previa de esta misma tarjeta.
type PlanCard = {
  id: string;
  name: string;
  tagline: string;
  desc: ReactNode;
  price: number | null;
  // Plazo más largo a meses sin intereses, para la leyenda bajo el precio.
  msi: PlanInstallment | null;
  popular: boolean;
  extras: { label: string; note: string }[];
};


const renderDescription = (plan: Plan): ReactNode =>
  descriptionSegments(planText(plan, plan.description)).map((seg, i) =>
    seg.href ? (
      <Link key={i} href={seg.href} className={styles.desc_link}>
        <strong>{seg.text}</strong>
      </Link>
    ) : (
      // Los saltos de línea del editor de Admin → Planes se respetan.
      <Fragment key={i}>
        {seg.text.split("\n").map((linea, j) => (
          <Fragment key={j}>{j > 0 && <br />}{linea}</Fragment>
        ))}
      </Fragment>
    )
  );

// Se muestran los planes con "Landing" prendido en Admin → Planes, del más
// completo al más sencillo (sort_order descendente: Pro, Lite, Paperless). Pro
// lleva la etiqueta "Más popular".
function buildPlans(plans: Plan[]): PlanCard[] {
  return plans
    .filter((p) => p.show_landing)
    .sort((a, b) => b.sort_order - a.sort_order)
    .map((plan) => ({
      id: plan.id,
      name: plan.name,
      tagline: plan.tagline,
      desc: renderDescription(plan),
      price: plan.price?.amount ?? null,
      msi: longestInstallment(plan),
      popular: plan.id === "pro",
      extras: planHighlights(plan).map((h) => ({ label: h.title, note: h.note })),
    }));
}

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


/* ── Gift steps ──────────────────────── */
const _GIFT_STEPS = [
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
export default async function PricingPage() {
  const PLANS = buildPlans(await getPlans());
  const featured = PLANS.find((p) => p.popular);
  const rest = PLANS.filter((p) => p !== featured);

  const renderCard = (plan: PlanCard) => (
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
        {plan.price !== null && (
          <div className={styles.card_price_block}>
            <span className={styles.price}>{formatMXN(plan.price)}</span>
            <span className={styles.price_note}>MXN · pago único</span>
            {plan.msi && (
              <span className={styles.price_msi}>
                o hasta {plan.msi.months} pagos de {formatMXNMonthly(plan.msi.monthly)}
              </span>
            )}
          </div>
        )}
      </div>

      <p className={styles.card_desc}>{plan.desc}</p>

      {plan.extras.length > 0 && (
        <div className={styles.card_extras}>
          <span className={styles.card_extras_label}>Y además incluye:</span>
          <ul className={styles.extras_list}>
            {plan.extras.map((e) => (
              <li key={e.label} className={styles.extras_item}>
                <div className={styles.extras_header}>
                  <Check size={13} strokeWidth={2.5} className={styles.extras_check} />
                  <span className={styles.extras_label}>{e.label}</span>
                </div>
                <p className={styles.extras_note}>{e.note}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      <a href={`${APP_URL}/checkout?plan=${plan.id}`} className={styles.card_cta}>
        <ShoppingCart size={15} strokeWidth={2} /> Comprar {plan.name}
      </a>
      {/* <a href={`${APP_URL}/preview-mood`} className={styles.card_cta_free}>
        o pruébala gratis →
      </a> */}
    </div>
  );

  return (
    <div className={styles.page}>

      {/* Fixed video background */}


      <Header />

      <div className={styles.video_bg}>
        <video autoPlay muted loop playsInline className={styles.video}>
          <source src="https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/landing/bucket.mp4" type="video/mp4" />
        </video>
        <div className={styles.video_overlay} />

        {/* Hero */}
        <div className={styles.hero_cont} >
          <section className={styles.hero}>
            <h1 className={styles.hero_title}>Hecho para<br />tu momento.</h1>
            <p className={styles.hero_sub}>
              Cada boda es diferente. Encuentra el nivel que se adapta a lo que tú necesitas organizar.
            </p>
            <a href={`${APP_URL}/checkout?openWizard=true`} className={styles.hero_cta}>
              <Wand2 size={16} strokeWidth={2} /> Mira cómo funciona
            </a>
            <p className={styles.hero_cta_note}>Sin tarjeta · tu portada lista en minutos</p>
          </section>

          {/* Plan cards */}
          <section className={styles.cards_section}>
            {/* Pro a la izquierda; a la derecha, apilados, el resto de planes con
                "Landing" prendido en Admin → Planes (Lite, Paperless…). Con un solo
                grupo, una columna centrada. */}
            <div className={`${styles.cards_col} ${featured && rest.length ? "" : styles.cards_col_single}`}>
              {featured && renderCard(featured)}
              {rest.length > 0 && (
                <div className={styles.cards_stack}>
                  {rest.map(renderCard)}
                </div>
              )}
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
        </div>

        <FooterLand />

      </div>

      

      {/* Regala I attend */}
      {/* <section className={styles.gift_section}>
        <div className={styles.gift_inner}>

     
          <div className={styles.gift_header}>
            
            <div className={styles.gift_header_row}>
              <h2 className={styles.gift_title} style={{position:'relative'}}>Regala
                <img src="/landing/items/green.png" alt="I attend" className={styles.gift_logo} />
              </h2>
              <p className={styles.gift_eyebrow}>El regalo que nadie espera y todos agradecen</p>
              <p className={styles.gift_desc}>
                Alguien que conoces está planeando su boda. Dales I attend y que ellos diseñen cada detalle.
              </p>
            </div>
          </div>

          
          <div className={styles.gift_cols}>


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


            <div className={styles.gift_right}>
              <img src="/landing/items/letter.png" alt="Gift mockup" className={styles.gift_mockup} />

            </div>

          </div>


          <div className={styles.gift_cta_wrap}>
            <Link href="/about/contact-us" className={styles.gift_cta}>
              <Gift size={18} strokeWidth={2} /> Regalar I attend
            </Link>
          </div>

        </div>
      </section> */}
    </div>
  );
}
