import React from "react";
import BackButton from "@/components/BackButton/BackButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pases Digitales para Bodas | Apple Wallet | I attend",
    description:
        "Al confirmar asistencia, cada invitado recibe un pase digital personalizado con su nombre, mesa asignada y los datos del evento. Compatible con Apple Wallet. Ideal para bodas y eventos.",
    keywords: [
        "pases digitales boda",
        "pase digital para evento",
        "guardar pase Apple Wallet",
        "pase digital invitado",
        "boleto digital boda",
        "acceso digital evento",
        "pases personalizados bodas",
        "pase con mesa asignada",
        "digital pass boda",
        "I attend pases",
    ],
    openGraph: {
        title: "Pases Digitales para Bodas | Apple Wallet | I attend",
        description:
            "Cada invitado confirmado recibe su pase digital personalizado con mesa asignada, compatible con Apple Wallet. Sin papel, sin filas, sin errores.",
        url: "https://iattend.site/about/pases-digitales",
        siteName: "I attend",
        images: [
            {
                url: "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/meta.jpg",
                width: 1200,
                height: 630,
                alt: "I attend – Pases digitales para bodas con Apple Wallet",
            },
        ],
        locale: "es_MX",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Pases Digitales para Bodas | Apple Wallet | I attend",
        description:
            "Pases digitales personalizados con mesa asignada y compatibles con Apple Wallet para bodas y eventos.",
        images: ["https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/meta.jpg"],
    },
    robots: { index: true, follow: true },
};

export default function DigitalPassesPage() {
    const digitalPassSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Pases Digitales I attend",
        description:
            "Pases digitales personalizados para bodas y eventos. Al confirmar asistencia, cada invitado recibe un pase digital con su información, mesa asignada y compatibilidad con Apple Wallet.",
        applicationCategory: "EventManagementApplication",
        operatingSystem: "Web, iOS",
        brand: {
            "@type": "Brand",
            name: "I attend",
        },
        url: "https://iattend.site/about/pases-digitales",
        offers: {
            "@type": "Offer",
            priceCurrency: "MXN",
            availability: "https://schema.org/InStock",
            url: "https://iattend.mx/precios",
        },
        audience: {
            "@type": "Audience",
            audienceType: "Personas que organizan bodas y eventos sociales",
        },
        featureList: [
            "Pase digital personalizado por invitado",
            "Compatible con Apple Wallet",
            "Asignación automática de mesa en el pase",
            "Pases generados automáticamente al confirmar asistencia",
            "Múltiples pases desde una sola invitación",
            "Acceso digital desde la invitación o Apple Wallet",
            "Actualización automática si cambian los datos del evento",
        ],
    };

    return (
        <div className="seo_first_container">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(digitalPassSchema) }}
            />

            {/* ================= CONTENIDO ================= */}
            <div className="seo_second_container">
                <section className="seo_container" id="pases-digitales">

                    <div className="action_wrap">
                        <BackButton />
                    </div>

                    <h1>Pases digitales para bodas y eventos — ahora en Apple Wallet</h1>

                    <p>
                        Los <strong>pases digitales de I attend</strong> son la forma más moderna
                        y práctica de controlar el acceso a tu evento.
                        Cuando un invitado <a href="/about/guest-management">confirma su asistencia</a>,
                        el sistema genera automáticamente un <strong>pase digital personalizado</strong>
                        con su nombre, los datos del evento y, si usas el módulo de mesas,
                        su <strong>mesa asignada</strong>.
                    </p>

                    <p>
                        Sin boletos físicos, sin hojas impresas ni confusiones.
                        Cada invitado tiene su acceso siempre disponible desde su celular.
                    </p>

                    <h2>Compatible con Apple Wallet</h2>

                    <p>
                        Los pases digitales de I attend son compatibles con <strong>Apple Wallet</strong>.
                        Cada invitado puede guardar su pase directamente en su iPhone
                        con un solo toque, igual que una tarjeta de embarque o una entrada a un concierto.
                    </p>

                    <p>
                        Esto significa que el pase estará siempre a la mano,
                        accesible desde la pantalla de bloqueo,
                        sin necesidad de abrir ninguna app ni buscar en mensajes.
                        La experiencia de llegada al evento se vuelve
                        <strong> más rápida, moderna y sin fricciones</strong>.
                    </p>

                    <p>
                        Si los datos del evento cambian — horario, lugar u otro detalle —
                        el pase en Apple Wallet <strong>se actualiza automáticamente</strong>,
                        asegurando que tus invitados siempre tengan la información correcta.
                    </p>

                    <h2>Pase generado automáticamente al confirmar asistencia</h2>

                    <p>
                        En cuanto un invitado <a href="/about/guest-management">confirma su asistencia</a>,
                        I attend genera su pase digital de forma automática.
                        No necesitas hacer nada manualmente.
                        El pase incluye el <strong>nombre del invitado</strong>,
                        la <strong>fecha y hora del evento</strong>,
                        y si tienes el <a href="/about/mapa-de-mesas">mapa de mesas</a> activo,
                        también aparece su <strong>número de mesa</strong>.
                    </p>

                    <p>
                        Solo los invitados confirmados reciben un pase válido,
                        lo que mantiene tu evento organizado y con acceso controlado
                        desde el primer momento.
                    </p>

                    <h2>Mesa asignada visible en el pase digital</h2>

                    <p>
                        Cuando utilizas el módulo de <strong><a href="/about/mapa-de-mesas">organización por mesas</a></strong>,
                        el pase digital muestra de forma clara la
                        <strong> mesa asignada a cada invitado</strong>.
                        Tus invitados saben exactamente dónde sentarse desde que llegan,
                        lo que elimina confusiones y agiliza la recepción.
                    </p>

                    <h2>Múltiples pases desde una sola invitación</h2>

                    <p>
                        Si un invitado tiene acompañantes aprobados,
                        I attend genera un <strong>pase digital por cada asistente confirmado</strong>.
                        Todos los pases están organizados dentro de la
                        <a href="/about/invitacion-paperless"> invitación digital</a>,
                        accesibles para el invitado principal y cada uno de sus acompañantes.
                    </p>

                    <p>
                        Esto es ideal para bodas donde los invitados traen pareja o familia,
                        ya que cada persona tiene su pase individual,
                        con su nombre y mesa correspondiente.
                    </p>

                    <h2>Control de acceso claro y sin papel</h2>

                    <p>
                        Los <strong>pases digitales de I attend</strong>
                        están diseñados para ser rápidos de mostrar y fáciles de verificar.
                        Ya sea desde la <a href="/about/invitacion-paperless">invitación digital</a>
                        o directamente desde Apple Wallet,
                        el pase se presenta en segundos y hace que el acceso a tu evento
                        sea <strong>ordenado, moderno y completamente sin papel</strong>.
                    </p>

                </section>
            </div>
        </div>
    );
}
