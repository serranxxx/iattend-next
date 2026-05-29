import React from "react";
import BackButton from "@/components/BackButton/BackButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Envíos Automáticos de Invitaciones por WhatsApp | I attend",
    description:
        "Envía invitaciones digitales por WhatsApp de forma automática usando el API oficial de Meta. Sin riesgo de bloqueo, con sistema de créditos y envíos masivos seguros para bodas y eventos.",
    keywords: [
        "enviar invitaciones por WhatsApp",
        "envíos automáticos WhatsApp bodas",
        "envío masivo invitaciones WhatsApp",
        "API WhatsApp invitaciones",
        "invitaciones WhatsApp boda",
        "envío automático invitados",
        "mandar invitaciones digitales WhatsApp",
        "WhatsApp API eventos",
        "I attend WhatsApp",
    ],
    openGraph: {
        title: "Envíos Automáticos de Invitaciones por WhatsApp | I attend",
        description:
            "Envía invitaciones digitales por WhatsApp de forma automática con el API oficial de Meta. Sin bloqueos, con créditos incluidos y control total desde I attend.",
        url: "https://iattend.site/about/envios-whatsapp",
        siteName: "I attend",
        images: [
            {
                url: "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/meta.jpg",
                width: 1200,
                height: 630,
                alt: "I attend – Envíos automáticos de invitaciones por WhatsApp",
            },
        ],
        locale: "es_MX",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Envíos Automáticos por WhatsApp | I attend",
        description:
            "Manda invitaciones digitales por WhatsApp de forma automática y segura con el API oficial de Meta.",
        images: ["https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/meta.jpg"],
    },
    robots: { index: true, follow: true },
};

export default function WhatsAppDeliveryPage() {
    const whatsappDeliverySchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Envíos Automáticos por WhatsApp — I attend",
        description:
            "Sistema de envío automático de invitaciones por WhatsApp con el API oficial de Meta. Envíos seguros, masivos y sin riesgo de bloqueo para bodas y eventos.",
        applicationCategory: "EventManagementApplication",
        operatingSystem: "Web",
        brand: {
            "@type": "Brand",
            name: "I attend",
        },
        url: "https://iattend.site/about/envios-whatsapp",
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
            "Envío automático de invitaciones por WhatsApp",
            "API oficial de WhatsApp (Meta)",
            "Envíos masivos sin riesgo de bloqueo",
            "Sistema de créditos por envío",
            "300 créditos incluidos en I attend PRO",
            "Compra de créditos adicionales",
            "Link mágico personalizado por invitado",
        ],
    };

    return (
        <div className="seo_first_container">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(whatsappDeliverySchema) }}
            />

            {/* ================= CONTENIDO ================= */}
            <div className="seo_second_container">
                <section className="seo_container" id="envios-whatsapp">

                    <div className="action_wrap">
                        <BackButton />
                    </div>

                    <h1>Envíos automáticos de invitaciones por WhatsApp con I attend</h1>

                    <p>
                        Con I attend puedes <strong>enviar tu invitación digital por WhatsApp</strong>
                        de forma <strong>automática, masiva y segura</strong>,
                        sin poner en riesgo tu número personal.
                        Con un solo clic, cada invitado recibe su invitación directamente
                        en su WhatsApp, con un enlace personalizado para acceder a ella.
                    </p>

                    <p>
                        No tienes que copiar y pegar mensajes ni escribir uno por uno.
                        I attend lo hace todo por ti.
                    </p>

                    <h2>Envíos seguros con el API oficial de WhatsApp (Meta)</h2>

                    <p>
                        Para garantizar que tus envíos no sean bloqueados,
                        I attend utiliza el <strong>API oficial de WhatsApp de Meta</strong>.
                        A diferencia de herramientas no oficiales o envíos manuales masivos,
                        el API oficial permite realizar <strong>envíos múltiples de forma controlada</strong>
                        y dentro de las políticas de la plataforma.
                    </p>

                    <p>
                        Esto significa que tus <a href="/about/invitacion-paperless">invitaciones digitales</a>
                        llegan correctamente a cada invitado,
                        sin arriesgar restricciones ni bloqueos en tu número.
                    </p>

                    <h2>Cada invitado recibe un link mágico personalizado</h2>

                    <p>
                        Al enviar la invitación por WhatsApp, cada invitado recibe un
                        <strong> link mágico único</strong> que lo lleva directamente
                        a su invitación personalizada.
                        No necesita ingresar ningún código —
                        el enlace lo identifica automáticamente y le da acceso inmediato.
                    </p>

                    <p>
                        Desde ahí puede confirmar su asistencia, revisar el itinerario,
                        ver su mesa asignada y guardar su
                        <a href="/about/pases-digitales"> pase digital en Apple Wallet</a>.
                    </p>

                    <h2>Sistema de créditos para envíos</h2>

                    <p>
                        Los <strong>envíos automáticos por WhatsApp</strong> funcionan
                        con un <strong>sistema de créditos</strong>.
                        Cada invitación enviada por WhatsApp consume <strong>1 crédito</strong>,
                        lo que te da un control claro sobre cuántos mensajes has mandado
                        y cuántos envíos tienes disponibles.
                    </p>

                    <h2>I attend PRO: 300 créditos incluidos</h2>

                    <p>
                        El <strong>paquete I attend PRO</strong> incluye
                        <strong> 300 créditos de envío por WhatsApp</strong>,
                        suficientes para la mayoría de las bodas y eventos
                        sin necesidad de comprar créditos adicionales.
                    </p>

                    <p>
                        Si tu lista de invitados es más grande,
                        puedes <strong>comprar créditos adicionales</strong> de forma independiente
                        y usarlos cuando los necesites.
                        Solo pagas por los envíos que realmente utilizas.
                    </p>

                    <h2>Control total desde la plataforma</h2>

                    <p>
                        Desde el panel de <a href="/about/guest-management">gestión de invitados</a> de I attend
                        puedes ver el estado de cada envío:
                        quiénes recibieron la invitación, quiénes confirmaron
                        y quiénes aún no han respondido.
                        Todo centralizado, sin salir de la plataforma.
                    </p>

                    <p>
                        Con los <strong>envíos automáticos por WhatsApp de I attend</strong>,
                        invitar a toda tu lista se convierte en un proceso de segundos,
                        sin estrés, sin riesgo de bloqueos y con la certeza
                        de que cada invitado recibió su invitación correctamente.
                    </p>

                </section>
            </div>
        </div>
    );
}
