import type { Metadata } from "next";
import { Patrick_Hand } from "next/font/google";
import { PopsWeb } from "@/components/Pops/PopsWeb/PopsWeb";
import { PopsMobile } from "@/components/Pops/PopsMobile/PopsMobile";
import { PaperLife } from "@/components/Pops/PaperLife/PaperLife";
import styles from "./page.module.css";

// Manuscrita del collage (anotaciones, números, pies de polaroid).
const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-patrick",
});

// La landing vive en www.iattend.mx (iattend.site sirve la app).
// Imagen al compartir el link: etiqueta "Pops by I attend" sobre el tablero, cuadrada.
const OG_IMAGE = "https://www.iattend.mx/pops/og-pops.jpg";

export const metadata: Metadata = {
  title: "Pops — invitaciones digitales para lo que surja | I attend",
  description:
    "Send a Pop: una invitación digital en minutos para la cena del viernes, la junta de ventas o la posada. Confirmación en un toque, envío por WhatsApp y pase de Apple Wallet. Todo en un solo link.",
  keywords: [
    "pops",
    "invitación digital rápida",
    "invitación por whatsapp",
    "invitación para cena",
    "invitación para cumpleaños",
    "invitación para posada",
    "confirmación de asistencia",
    "I attend pops",
  ],
  alternates: { canonical: "https://www.iattend.mx/pops" },
  openGraph: {
    title: "Pops by I attend — Para lo que surja, Send a Pop.",
    description: "Una invitación en minutos. La cena del viernes, la junta de ventas, la posada: todo en un solo link.",
    url: "https://www.iattend.mx/pops",
    siteName: "I attend",
    images: [{ url: OG_IMAGE, width: 1200, height: 1200, alt: "Pops by I attend — Send a Pop." }],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Pops by I attend — Send a Pop.",
    description: "Una invitación en minutos, todo en un solo link.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

// Escala los lienzos fijos (1440 web / 390 mobile) al ancho real antes del
// primer pintado, para que no haya salto ni scroll horizontal. Escribe un
// <style> en el <head> (no toca atributos que React hidrata).
const ZOOM_SCRIPT = `(function(){var d=document,r=d.documentElement,s=d.getElementById('pops-zoom');if(!s){s=d.createElement('style');s.id='pops-zoom';d.head.appendChild(s);}function z(){var w=r.clientWidth;s.textContent=':root{--pops-zoom-web:'+Math.min(1,w/1440)+';--pops-zoom-mobile:'+Math.min(1.5,w/390)+'}';}z();addEventListener('resize',z);})();`;

// Oculta los papeles animables antes del primer pintado para que "caigan" al
// cargar (ver PaperLife). Si el JS no monta en 4s, se muestran tal cual.
const PAPER_PRELOAD_SCRIPT = `(function(){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;var s=document.createElement('style');s.id='paper-preload';s.textContent='[data-anim]:not([data-in]){opacity:0}';document.head.appendChild(s);setTimeout(function(){if(!window.__paperLife)s.remove();},4000);})();`;

export default function PopsPage() {
  return (
    <main className={`${styles.page} ${patrickHand.variable}`}>
      <script dangerouslySetInnerHTML={{ __html: ZOOM_SCRIPT + PAPER_PRELOAD_SCRIPT }} />
      <span aria-hidden="true" className={styles.rulerTop} />
      <span aria-hidden="true" className={styles.rulerLeft} />
      <span aria-hidden="true" className={styles.rulerRight} />

      <PaperLife>
        <div className={styles.web}>
          <PopsWeb />
        </div>
        <div className={styles.mobile}>
          <PopsMobile />
        </div>
      </PaperLife>

      <span aria-hidden="true" className={styles.light} />
    </main>
  );
}
