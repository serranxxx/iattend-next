import BackButton from "@/components/BackButton/BackButton";
import { faqs_list } from "@/helpers/SEO/faqs";
import { Metadata } from "next";
import Script from "next/script";
import { IoMdReturnLeft } from "react-icons/io";
import { FooterLand } from "@/components/LandPage/Footer/Footer";

/* =========================
   SEO METADATA
========================= */
export const metadata: Metadata = {
  title: "Preguntas Frecuentes sobre Invitaciones Digitales | I attend",
  description:
    "Resuelve todas tus dudas sobre invitaciones digitales, gestión de invitados, confirmaciones de asistencia y envíos automáticos por WhatsApp con I attend.",
  keywords: [
    "preguntas frecuentes invitaciones digitales",
    "dudas invitación digital boda",
    "cómo funciona I attend",
    "FAQ invitaciones digitales",
    "RSVP dudas frecuentes",
    "confirmación de asistencia bodas",
    "I attend FAQs",
  ],
  openGraph: {
    title: "Preguntas Frecuentes sobre Invitaciones Digitales | I attend",
    description:
      "Resuelve todas tus dudas sobre invitaciones digitales, gestión de invitados y envíos por WhatsApp con I attend.",
    url: "https://iattend.site/about/faqs",
    siteName: "I attend",
    images: [
      {
        url: "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/meta.jpg",
        width: 1200,
        height: 630,
        alt: "I attend – Preguntas frecuentes",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preguntas Frecuentes | I attend",
    description:
      "Resuelve tus dudas sobre invitaciones digitales, gestión de invitados y confirmaciones de asistencia.",
    images: ["https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/meta.jpg"],
  },
  robots: { index: true, follow: true },
};

/* =========================
   PAGE COMPONENT
========================= */
export default function FAQsPage() {
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column',
      maxHeight: '100vh', overflow: 'auto', width: '100%'
    }}>
      {/* =========================
                FAQ SCHEMA (JSON-LD)
            ========================= */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs_list?.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* =========================
                FAQ CONTENT
            ========================= */}
      <div className="seo_second_container">
        <section className="seo_container" id="invitacion-faqs">

          <div className="action_wrap">
            <BackButton></BackButton>
          </div>
          <h1>Preguntas frecuentes</h1>

          {faqs_list?.map((faq, index) => (
            <article key={index} >
              <h2>{faq.question}</h2>
              <p>{faq.answer}</p>
            </article>
          ))}
        </section>
      </div>
          <FooterLand />

</div>
  );
}
