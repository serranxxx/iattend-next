import BackButton from "@/components/BackButton/BackButton";
import { reviews_list } from "@/helpers/SEO/reviews";
import { Metadata } from "next";
import Script from "next/script";
import { IoMdReturnLeft } from "react-icons/io";
import { FooterLand } from "@/components/LandPage/Footer/Footer";

/* =========================
   SEO METADATA
========================= */
export const metadata: Metadata = {
  title: "Opiniones y Reseñas de I attend | Invitaciones Digitales",
  description:
    "Conoce las opiniones reales de quienes han organizado sus eventos con I attend. Experiencias sobre invitaciones digitales, gestión de invitados y confirmaciones de asistencia.",
  keywords: [
    "opiniones I attend",
    "reseñas invitaciones digitales",
    "testimonios bodas digitales",
    "experiencias I attend",
    "reviews plataforma eventos",
    "opiniones usuarios invitaciones",
  ],
  openGraph: {
    title: "Opiniones y Reseñas de I attend | Invitaciones Digitales",
    description:
      "Conoce las experiencias reales de quienes han organizado sus bodas y eventos con I attend.",
    url: "https://iattend.site/about/opiniones",
    siteName: "I attend",
    images: [
      {
        url: "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/meta.jpg",
        width: 1200,
        height: 630,
        alt: "I attend – Opiniones de usuarios",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Opiniones de I attend | Invitaciones Digitales",
    description:
      "Experiencias reales de personas que han organizado sus bodas y eventos con I attend.",
    images: ["https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/meta.jpg"],
  },
  robots: { index: true, follow: true },
};

/* =========================
   PAGE COMPONENT
========================= */
export default function ReviewsPage() {
  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "I attend",
    applicationCategory: "EventManagementApplication",
    operatingSystem: "Web",
    review: reviews_list.map((review) => ({
      "@type": "Review",
      reviewBody: review.review,
      author: {
        "@type": "Person",
        name: review.name,
      },
      reviewRating: review.review
        ? {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        }
        : undefined,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: reviews_list.length,
    },
  };

  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column',
      maxHeight: '100vh', overflow: 'auto', width: '100%'
    }}>
      {/* =========================
          REVIEWS SCHEMA (JSON-LD)
      ========================= */}
      <Script
        id="reviews-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewsSchema),
        }}
      />

      {/* =========================
          REVIEWS CONTENT
      ========================= */}
      <div className="seo_second_container">
        <section className="seo_container" id="invitacion-reviews">

          <div className="action_wrap">
            <BackButton></BackButton>
          </div>
          <h1>Opiniones de quienes ya usan I attend</h1>

          <p>
            Estas son algunas experiencias reales de personas que han organizado
            sus eventos utilizando <strong>I attend</strong>.
          </p>

          {reviews_list.map((review, index) => (
            <article key={index}>
              <blockquote>“{review.review}”</blockquote>
              <p>
                <strong>{review.name}</strong>
              </p>
            </article>
          ))}
        </section>
      </div>
          <FooterLand />

</div>
  );
}
