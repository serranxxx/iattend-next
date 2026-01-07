import BackButton from "@/components/BackButton/BackButton";
import { faqs_list } from "@/helpers/SEO/faqs";
import { Metadata } from "next";
import Script from "next/script";
import { IoMdReturnLeft } from "react-icons/io";

/* =========================
   SEO METADATA
========================= */
export const metadata: Metadata = {
  title: "Preguntas Frecuentes | I attend",
  description:
    "Resuelve todas tus dudas sobre invitaciones digitales, gestión de invitados, confirmaciones de asistencia y envíos automáticos por WhatsApp con I attend.",
};

/* =========================
   PAGE COMPONENT
========================= */
export default function FAQsPage() {
  return (
    <>
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
      <div style={{ width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '36px', boxSizing: 'border-box', maxHeight: '100%', overflow: 'auto' }}>
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
    </>
  );
}
