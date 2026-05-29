import React from "react";
import BackButton from "@/components/BackButton/BackButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gestión de Invitados para Boda | RSVP Digital | I attend",
    description:
        "Controla tu lista de invitados, confirmaciones de asistencia y envíos por WhatsApp desde un solo lugar. Gestión de invitados con RSVP digital, pases y notificaciones en tiempo real.",
    keywords: [
        "gestión de invitados boda",
        "lista de invitados boda",
        "RSVP digital boda",
        "confirmación de asistencia boda",
        "control de invitados evento",
        "administrar invitados boda",
        "plataforma gestión invitados",
        "confirmaciones boda digital",
        "invitados confirmados boda",
        "I attend guest management",
    ],
    openGraph: {
        title: "Gestión de Invitados para Boda | RSVP Digital | I attend",
        description:
            "Todo el control de tus invitados en un solo lugar: lista, envíos automáticos por WhatsApp, confirmaciones en tiempo real y pases digitales.",
        url: "https://iattend.site/about/guest-management",
        siteName: "I attend",
        images: [
            {
                url: "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/meta.jpg",
                width: 1200,
                height: 630,
                alt: "I attend – Gestión de invitados y RSVP digital",
            },
        ],
        locale: "es_MX",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Gestión de Invitados para Boda | RSVP Digital | I attend",
        description:
            "Lista de invitados, envíos por WhatsApp, confirmaciones en tiempo real y pases digitales. Todo desde I attend.",
        images: ["https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/meta.jpg"],
    },
    robots: { index: true, follow: true },
};

export default function GuestManagementPage() {
    const guestManagementSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Gestión de Invitados — I attend",
        description:
            "Plataforma de gestión de invitados para bodas y eventos. Controla listas, RSVP digital, envíos automáticos por WhatsApp, pases digitales y notificaciones en tiempo real.",
        applicationCategory: "EventManagementApplication",
        operatingSystem: "Web",
        brand: {
            "@type": "Brand",
            name: "I attend",
        },
        url: "https://iattend.site/about/guest-management",
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
            "Lista de invitados digital",
            "Confirmación de asistencia (RSVP digital)",
            "Envíos automáticos por WhatsApp",
            "Códigos de acceso y links mágicos",
            "Control de pases",
            "Pases digitales compatibles con Apple Wallet",
            "Descarga de listas en Excel",
            "Notificaciones en tiempo real",
            "Categorías de invitados personalizadas",
        ],
    };

    return (
        <div className="seo_first_container">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(guestManagementSchema) }}
            />

            {/* ================= CONTENIDO ================= */}
            <div className="seo_second_container">
                <section className="seo_container" id="guest-management">

                    <div className="action_wrap">
                        <BackButton />
                    </div>

                    <h1>Gestión de invitados para boda: RSVP digital con I attend</h1>

                    <p>
                        El módulo de <strong>gestión de invitados de I attend</strong> te da
                        el <strong>control total de tu lista de invitados</strong>
                        desde el inicio hasta el día del evento.
                        Sin hojas de cálculo, sin mensajes dispersos, sin confusiones.
                        Todo en un solo lugar.
                    </p>

                    <p>
                        Diseñado especialmente para bodas y eventos sociales,
                        te permite organizar, invitar y hacer seguimiento de cada invitado
                        de forma <strong>clara, digital y en tiempo real</strong>.
                    </p>

                    <h2>Crea tu lista de invitados y agrégales categorías</h2>

                    <p>
                        Agrega a tus invitados con su nombre, teléfono y número de acompañantes.
                        Puedes crear <strong>categorías personalizadas</strong> como familia, amigos,
                        compañeros de trabajo o padrinos, lo que te ayuda a clasificar tu lista
                        y tener mejor control desde el inicio.
                    </p>

                    <p>
                        Los invitados recién agregados entran a la <strong>lista de espera</strong>:
                        están registrados pero aún no reciben la invitación.
                        Tú decides cuándo y a quién invitar.
                    </p>

                    <h2>Invítalos con un clic — envío automático por WhatsApp</h2>

                    <p>
                        Cuando estés listo, marca a tus invitados y la plataforma les envía
                        automáticamente su <a href="/about/invitacion-paperless">invitación digital</a>
                        por <a href="/about/envios-whatsapp"><strong>WhatsApp con el API oficial de Meta</strong></a>.
                        Sin copiar y pegar mensajes, sin hacerlo uno por uno.
                    </p>

                    <p>
                        Cada invitado recibe un <strong>link mágico personalizado</strong>
                        que lo lleva directo a su invitación, ya identificado,
                        listo para confirmar su asistencia en segundos.
                    </p>

                    <h2>RSVP digital: confirmaciones en tiempo real</h2>

                    <p>
                        Cuando un invitado confirma su asistencia,
                        pasa automáticamente a la tabla de <strong>confirmados</strong>.
                        Si cancela, va a <strong>cancelados</strong>.
                        Siempre sabes exactamente quiénes van a tu evento
                        sin tener que preguntar a nadie.
                    </p>

                    <p>
                        Al confirmar, el sistema genera automáticamente el
                        <strong> <a href="/about/pases-digitales">pase digital</a></strong> del invitado,
                        con su nombre, datos del evento y, si tienes
                        <a href="/about/mapa-de-mesas"> mesas asignadas</a>, su número de mesa.
                        El pase es compatible con <strong>Apple Wallet</strong>.
                    </p>

                    <h2>Notificaciones en tiempo real</h2>

                    <p>
                        Cada vez que un invitado confirma o cancela,
                        puedes recibir una <strong>notificación en tiempo real</strong>.
                        No tienes que estar revisando la plataforma constantemente —
                        I attend te avisa cuando hay una respuesta nueva.
                    </p>

                    <h2>Descarga tu lista en Excel cuando quieras</h2>

                    <p>
                        Puedes <strong>descargar en formato Excel</strong>
                        cualquiera de tus listas: espera, esperando respuesta,
                        confirmados y cancelados.
                        Ideal para compartir con coordinadores, proveedores
                        o para tener un respaldo fuera de la plataforma.
                    </p>

                    <h2>Todo el control de tus invitados en un solo lugar</h2>

                    <p>
                        Con la <strong>gestión de invitados de I attend</strong>,
                        sabes en todo momento cuántos pases tienes disponibles,
                        cuántos están confirmados, cuántos están pendientes
                        y cuántos cancelaron.
                        La información está siempre actualizada,
                        organizada y lista para el día de tu evento.
                    </p>

                </section>
            </div>
        </div>
    );
}
