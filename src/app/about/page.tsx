import { HeroSection } from "@/components/LandPage/HERO/HERO";
import { Header } from "@/components/LandPage/Header/Header";
import styles from "./page.module.css";
import { FooterLand } from "@/components/LandPage/Footer/Footer";
import type { Metadata } from "next";
import { SocialProof } from "@/components/LandPage/SocialProof/SocialProof";
import { HowWorks } from "@/components/LandPage/HowWorks/HowWorks";
import { Action } from "@/components/LandPage/Action/Action";
import { Frequent } from "@/components/LandPage/Frequent/Frequent";
import { Final } from "@/components/LandPage/Final/Final";

export const metadata: Metadata = {
  title: "I attend | Invitaciones Digitales y Gestión de Invitados para Bodas",
  description:
    "Crea invitaciones digitales personalizadas, gestiona tu lista de invitados y confirma asistencias en tiempo real. Todo en un solo lugar para bodas y eventos especiales.",
  keywords: [
    "invitaciones digitales",
    "invitaciones para boda",
    "invitaciones paperless",
    "gestión de invitados",
    "RSVP digital",
    "confirmación de asistencia",
    "pases digitales",
    "mapa de mesas",
    "envíos por WhatsApp",
    "organizar boda",
    "plataforma para eventos",
    "I attend",
    "guest management",
    "event planning",
  ],
  authors: [{ name: "I attend" }],
  creator: "I attend",
  openGraph: {
    title: "I attend | Invitaciones Digitales y Gestión de Invitados",
    description:
      "Crea invitaciones digitales personalizadas, gestiona tu lista de invitados y confirma asistencias en tiempo real. La plataforma todo-en-uno para bodas y eventos especiales.",
    url: "https://iattend.site/about",
    siteName: "I attend",
    images: [
      {
        url: "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/meta.jpg",
        width: 1200,
        height: 630,
        alt: "I attend – Invitaciones digitales y gestión de invitados",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "I attend | Invitaciones Digitales para Bodas",
    description:
      "Crea invitaciones digitales personalizadas y gestiona tu lista de invitados en tiempo real con I attend.",
    images: ["https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/meta.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function LandPage() {
  return (
    <div className={styles.main_container_land} id="land-scroll-container">
      <Header />
      <div className={styles.bg_blur} />

      <HeroSection></HeroSection>
      <div id="hero-sentinel" />
      <SocialProof></SocialProof>
      <HowWorks></HowWorks>
      <Action />
      <Frequent />
      <Final />
      <FooterLand></FooterLand>

    </div>
  );
}
