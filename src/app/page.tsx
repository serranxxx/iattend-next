import { Metadata } from 'next';
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: "I attend | Tu evento, bajo control — en menos de una tarde",
  description:
    "Deja de perseguir confirmaciones. Con I attend organizas tus invitados, envías invitaciones digitales por WhatsApp y tienes todo tu evento bajo control desde un solo lugar. Sin estrés, sin complicaciones.",
  keywords: [
    "invitaciones digitales",
    "invitaciones para boda",
    "invitaciones paperless",
    "gestión de invitados",
    "confirmaciones automáticas",
    "envíos por WhatsApp",
    "mapa de mesas",
    "pases digitales",
    "organizar boda",
    "plataforma para eventos",
    "RSVP digital",
    "Lia asistente AI",
    "asistente inteligente para bodas",
    "I attend",
  ],
  authors: [{ name: "I attend" }],
  creator: "I attend",
  metadataBase: new URL("https://iattend.site"),
  openGraph: {
    title: "I attend | Tu evento, bajo control",
    description:
      "Tu invitación, tus invitados y sus confirmaciones, en un solo lugar. Empieza hoy y ten todo listo en menos de una tarde.",
    url: "https://iattend.site",
    siteName: "I attend",
    images: [
      {
        url: "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/landing/linkimg.jpg",
        width: 800,
        height: 1200,
        alt: "I attend – Tu evento, bajo control",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "I attend | Tu evento, bajo control",
    description:
      "Deja de perseguir confirmaciones. Gestiona invitados, envía invitaciones y ten todo tu evento en un solo lugar.",
    images: ["https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/landing/linkimg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomeRedirect() {
  redirect('/about')
}
