import type { Metadata } from "next";
import styles from "./page.module.css";
import { Header } from "@/components/LandPage/Header/Header";
import { FooterLand } from "@/components/LandPage/Footer/Footer";
import { CollaboratorCTA } from "@/components/LandPage/CollaboratorCTA/CollaboratorCTA";
import Link from "next/link";
import {
  MessageCircle, Mail, Instagram, Linkedin,
  CalendarDays, ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Habla con nosotros | I attend",
  description: "¿Tienes dudas sobre I attend o quieres ver una demo? Escríbenos por WhatsApp, email o redes sociales. El equipo responde rápido.",
  openGraph: {
    title: "Habla con nosotros | I attend",
    description: "¿Tienes dudas o quieres una demo? Escríbenos por WhatsApp, email o redes sociales. Estamos aquí para ayudarte.",
    url: "https://iattend.site/about/contact-us",
    siteName: "I attend",
    images: [{ url: "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/meta.jpg", width: 1200, height: 630, alt: "I attend – Habla con nosotros" }],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Habla con nosotros | I attend",
    description: "Escríbenos por WhatsApp, email o redes sociales. El equipo de I attend responde rápido.",
    images: ["https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/meta.jpg"],
  },
};

const CONTACTS = [
  {
    icon: <MessageCircle size={26} strokeWidth={1.5} />,
    label: "WhatsApp",
    value: "+52 614 533 8500",
    href: "https://wa.me/526145338500",
    cta: "Escríbenos",
  },
  {
    icon: <Mail size={26} strokeWidth={1.5} />,
    label: "Email",
    value: "contacto.iattend@gmail.com",
    href: "mailto:contacto.iattend@gmail.com",
    cta: "Enviar correo",
  },
  {
    icon: <Instagram size={26} strokeWidth={1.5} />,
    label: "Instagram",
    value: "@iattend.mx",
    href: "https://instagram.com/iattend.mx",
    cta: "Seguirnos",
  },
  {
    icon: <Linkedin size={26} strokeWidth={1.5} />,
    label: "LinkedIn",
    value: "iattend",
    href: "https://www.linkedin.com/company/i-attend/",
    cta: "Conectar",
  },
];


export default function ContactUsPage() {
  return (
    <div className={styles.page}>
      <Header />

      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.hero_title}>HABLEMOS.</h1>
        <p className={styles.hero_sub}>
          Estamos a un mensaje. Elige cómo quieres contactarnos.
        </p>
      </section>

      {/* Contact cards */}
      <section className={styles.contacts_section}>
        <div className={styles.contacts_grid}>
          {CONTACTS.map((c) => (
            <Link key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className={styles.contact_card}>
              <div className={styles.contact_icon}>{c.icon}</div>
              <div className={styles.contact_info}>
                <span className={styles.contact_label}>{c.label}</span>
                <span className={styles.contact_value}>{c.value}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Schedule meeting */}
      <section className={styles.schedule_section}>
        <div className={styles.schedule_card}>
          <div className={styles.schedule_left}>
            <CalendarDays size={32} strokeWidth={1.5} className={styles.schedule_icon} />
            <div>
              <h2 className={styles.schedule_title}>Agenda una llamada</h2>
              <p className={styles.schedule_desc}>
                ¿Tienes preguntas sobre I attend o quieres ver cómo funciona antes de decidir?
                Agendemos 20 minutos y te mostramos todo.
              </p>
            </div>
          </div>
          <Link href="https://calendar.app.google/pw8B74XMXiu4uBNq7" target="_blank" rel="noopener noreferrer" className={styles.schedule_btn}>
            Agendar llamada <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </div>
      </section>

      <CollaboratorCTA />

      <FooterLand />
    </div>
  );
}
