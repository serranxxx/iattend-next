import type { Metadata } from "next";
import styles from "./page.module.css";
import { Header } from "@/components/LandPage/Header/Header";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FooterLand } from "@/components/LandPage/Footer/Footer";

export const metadata: Metadata = {
  title: "This is us | I attend",
  description: "La historia de I attend: cómo una invitación de boda se convirtió en la plataforma para bodas y eventos especiales.",
};

const COLLAGE = [
  { seed: "wedding-flowers-white",  w: 600, h: 440 },
  { seed: "elegant-couple-wedding", w: 600, h: 440 },
  { seed: "wedding-reception-hall", w: 600, h: 440 },
  { seed: "wedding-planning-table", w: 600, h: 440 },
  { seed: "couple-celebration",     w: 600, h: 440 },
];

const BOTTOM_PHOTOS = [
  { seed: "bridal-bouquet-white",   w: 800, h: 600 },
  { seed: "wedding-ceremony-light", w: 800, h: 600 },
  { seed: "celebration-reception",  w: 800, h: 600 },
];

export default function ThisIsUsPage() {
  return (
    <div className={styles.page}>
      <Header />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <video autoPlay muted loop playsInline className={styles.hero_video}>
          <source src="https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/landing/video.mp4" type="video/mp4" />
        </video>
        <div className={styles.hero_overlay} />
        <div className={styles.hero_content}>
          <p className={styles.hero_eyebrow}>Quiénes somos</p>
          <h1 className={styles.hero_title}>Our Story</h1>
        </div>
      </section>

      {/* ── Intro: texto + collage ── */}
      <section className={styles.intro}>
        <div className={styles.intro_left}>
          <p className={styles.intro_text}>
            I attend nació del momento más real que puede vivir una pareja: necesitar
            una invitación de boda que los representara de verdad, no solo un archivo
            genérico enviado por WhatsApp.
          </p>
          <p className={styles.intro_text}>
            Alberto le construyó algo único a Pau. La reacción de sus invitados
            fue la primera señal de que había algo aquí — y las preguntas de
            amigos y conocidos hicieron el resto.
          </p>
          <img
            src={`https://picsum.photos/seed/wedding-tall-portrait/500/620`}
            alt=""
            className={styles.intro_tall_img}
          />
        </div>

        <div className={styles.intro_right}>
          <div className={styles.collage}>
            <img src={`https://picsum.photos/seed/${COLLAGE[0].seed}/${COLLAGE[0].w}/${COLLAGE[0].h}`} alt="" className={`${styles.collage_img} ${styles.collage_1}`} />
            <img src={`https://picsum.photos/seed/${COLLAGE[1].seed}/${COLLAGE[1].w}/${COLLAGE[1].h}`} alt="" className={`${styles.collage_img} ${styles.collage_2}`} />
            <img src={`https://picsum.photos/seed/${COLLAGE[2].seed}/${COLLAGE[2].w}/${COLLAGE[2].h}`} alt="" className={`${styles.collage_img} ${styles.collage_3}`} />
            <img src={`https://picsum.photos/seed/${COLLAGE[3].seed}/${COLLAGE[3].w}/${COLLAGE[3].h}`} alt="" className={`${styles.collage_img} ${styles.collage_4}`} />
          </div>
        </div>
      </section>

      {/* ── What we believe ── */}
      <section className={styles.what}>
        <div className={styles.what_left}>
          <span className={styles.what_eyebrow}>Nuestra misión</span>
          <h2 className={styles.what_title}>Lo que<br />nos mueve</h2>
        </div>
        <div className={styles.what_right}>
          <p className={styles.what_big}>
            Que planear tu boda sea una experiencia bonita, no un estrés.
          </p>
          <p className={styles.what_body}>
            Creemos que detrás de cada boda hay una historia que merece ser contada
            con cuidado. Nuestro trabajo es darte las herramientas para que puedas
            enfocarte en lo que importa: disfrutar el proceso de tu momento.
            Invitaciones digitales, gestión de invitados, pases con Apple Wallet,
            acomodo de mesas y envíos automáticos — todo en un solo lugar, sin complicaciones.
          </p>
        </div>
      </section>

      {/* ── Bottom photos ── */}
      <section className={styles.photos}>
        {BOTTOM_PHOTOS.map((p) => (
          <div key={p.seed} className={styles.photo_wrap}>
            <img
              src={`https://picsum.photos/seed/${p.seed}/${p.w}/${p.h}`}
              alt=""
              className={styles.photo}
            />
          </div>
        ))}
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta_section}>
        <h2 className={styles.cta_title}>¿Listo para empezar?</h2>
        <div className={styles.cta_row}>
          <Link href="/about/contact-us" className={styles.cta_primary}>
            Contáctanos <ArrowRight size={18} strokeWidth={2.5} />
          </Link>
        </div>
      </section>
          <FooterLand />

</div>
  );
}
