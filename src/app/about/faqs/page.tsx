import { faqs_list } from "@/helpers/SEO/faqs";
import { Metadata } from "next";
import Script from "next/script";

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
  console.log("faqs: ", faqs_list);
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
      <section style={{
        maxHeight: '100%', overflow: 'auto'
      }}>
        <h1>Preguntas frecuentes</h1>

        {faqs_list?.map((faq, index) => (
          <article key={index} >
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
          </article>
        ))}
      </section>
    </>
  );
}
