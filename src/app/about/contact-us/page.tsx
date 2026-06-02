import type { Metadata } from "next";
import styles from "./page.module.css";
import { Header } from "@/components/LandPage/Header/Header";
import Link from "next/link";
import {
  MessageCircle, Mail, Instagram, Linkedin,
  CalendarDays, ArrowRight, TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact us | I attend",
  description: "Contáctanos por WhatsApp, email o redes sociales. También puedes agendar una llamada con el equipo de I attend.",
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
              <span className={styles.contact_cta}>{c.cta} →</span>
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
          {/* Replace this href with your Calendly link */}
          <Link href="https://calendar.app.google/pw8B74XMXiu4uBNq7" target="_blank" rel="noopener noreferrer" className={styles.schedule_btn}>
            Agendar llamada <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </div>
      </section>

      {/* Programa de colaboradores */}
      <section className={styles.work_section}>
        <div className={styles.work_inner}>
          <TrendingUp size={36} strokeWidth={1.5} className={styles.work_icon} />
          <p className={styles.work_eyebrow}>Programa de colaboradores</p>
          <h2 className={styles.work_title}>¿Te gustaría generar<br />ingresos extra?</h2>
          <p className={styles.work_desc}>
            Si conoces parejas que están planeando su boda, si trabajas en el mundo de los eventos
            o simplemente te gusta recomendar lo que usas — hay una oportunidad aquí para ti.
            Sé distribuidor de I attend y gana por cada cliente que llegue contigo.
          </p>
          <Link href="https://wa.me/526145338500" target="_blank" className={styles.work_cta}>
            Me interesa, cuéntame más <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </div>
      </section>
    </div>
  );
}
