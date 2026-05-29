import React from "react";
import BackButton from "@/components/BackButton/BackButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Acomodo de Mesas para Boda | Seating Chart Digital | I attend",
    description:
        "Organiza el acomodo de mesas de tu boda con un mapa interactivo. Asigna invitados confirmados, define capacidades y mueve mesas con drag & drop. Fácil, visual y sin estrés.",
    keywords: [
        "acomodo de mesas boda",
        "organización de mesas boda",
        "seating chart boda",
        "mapa de mesas evento",
        "asignar invitados a mesas",
        "organizar mesas bodas",
        "seating chart digital",
        "distribución de mesas boda",
        "acomodo de invitados boda",
        "I attend mesas",
    ],
    openGraph: {
        title: "Acomodo de Mesas para Boda | Seating Chart Digital | I attend",
        description:
            "Organiza el acomodo de mesas de tu boda con un mapa interactivo. Asigna invitados confirmados, mueve mesas con drag & drop y genera pases con mesa incluida.",
        url: "https://iattend.site/about/mapa-de-mesas",
        siteName: "I attend",
        images: [
            {
                url: "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/meta.jpg",
                width: 1200,
                height: 630,
                alt: "I attend – Acomodo de mesas para boda",
            },
        ],
        locale: "es_MX",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Acomodo de Mesas para Boda | I attend",
        description:
            "Organiza el acomodo de tus invitados con un seating chart digital. Drag & drop, capacidades por mesa y pases con número de mesa incluido.",
        images: ["https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/meta.jpg"],
    },
    robots: { index: true, follow: true },
};

export default function TableOrganizationPage() {
    const tableOrganizationSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Acomodo de Mesas I attend",
        description:
            "Módulo de acomodo de mesas para bodas y eventos. Crea un mapa interactivo, asigna invitados confirmados y organiza tu seating chart de forma visual y sencilla.",
        applicationCategory: "EventManagementApplication",
        operatingSystem: "Web",
        brand: {
            "@type": "Brand",
            name: "I attend",
        },
        url: "https://iattend.site/about/mapa-de-mesas",
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
            "Mapa de mesas interactivo con drag & drop",
            "Creación de mesas personalizadas",
            "Asignación de invitados confirmados",
            "Capacidad máxima por mesa",
            "Búsqueda y filtros de invitados",
            "Transferencia de invitados entre mesas",
            "Mesa asignada visible en el pase digital",
        ],
    };

    return (
        <div className="seo_first_container">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(tableOrganizationSchema) }}
            />

            {/* ================= CONTENIDO ================= */}
            <div className="seo_second_container">
                <section className="seo_container" id="mapa-mesas">

                    <div className="action_wrap">
                        <BackButton />
                    </div>

                    <h1>Acomodo de mesas para boda: seating chart digital con I attend</h1>

                    <p>
                        El <strong>acomodo de mesas de I attend</strong> es el módulo diseñado para
                        resolver una de las tareas más delicadas de cualquier boda o evento:
                        <strong> organizar quién se sienta dónde</strong>.
                        Todo se hace de forma visual, ordenada y completamente digital,
                        sin hojas de cálculo ni papeles pegados en la pared.
                    </p>

                    <p>
                        Una vez que tienes tu <strong><a href="/about/guest-management">lista de invitados confirmados</a></strong>,
                        puedes comenzar a crear tu seating chart y asignar a cada persona su mesa.
                    </p>

                    <h2>Mapa de mesas interactivo con drag & drop</h2>

                    <p>
                        El <strong>mapa de mesas</strong> es un espacio visual donde ves tus mesas
                        y tus invitados confirmados al mismo tiempo.
                        Puedes <strong>crear tantas mesas como necesites</strong>,
                        darles un nombre, definir su <strong>capacidad máxima de invitados</strong>
                        y acomodarlas libremente dentro del mapa.
                    </p>

                    <p>
                        Para reorganizar el salón, simplemente <strong>arrastra y suelta las mesas</strong>
                        con el cursor.
                        Puedes simular la distribución real de tu venue de forma rápida
                        e intuitiva, sin necesidad de empezar desde cero cada vez.
                    </p>

                    <h2>Asignar invitados confirmados a sus mesas</h2>

                    <p>
                        Solo los <a href="/about/guest-management"><strong>invitados confirmados</strong></a> pueden ser
                        asignados a una mesa, lo que garantiza que tu
                        <strong> seating chart refleje tu lista real de asistencia</strong>.
                        Puedes asignar invitados directamente desde el módulo de mesas
                        o desde la tabla de confirmados, como te resulte más cómodo.
                    </p>

                    <p>
                        Cuando un invitado queda asignado, su
                        <strong> <a href="/about/pases-digitales">pase digital</a> se actualiza automáticamente</strong>
                        para mostrar su número de mesa.
                        Así, tus invitados saben exactamente dónde sentarse
                        desde que llegan al evento.
                    </p>

                    <h2>Edición total: mover, transferir y reorganizar sin estrés</h2>

                    <p>
                        Selecciona cualquier mesa y entra a editarla para:
                        <strong> agregar invitados</strong> de la lista de confirmados,
                        <strong> transferir invitados</strong> a otra mesa o
                        <strong> retirarlos</strong> si es necesario.
                    </p>

                    <p>
                        Puedes reorganizar cuantas veces necesites,
                        incluso en los días previos al evento,
                        sin perder el control de las capacidades ni del estado de cada invitado.
                    </p>

                    <h2>Búsqueda y filtros para organizar más rápido</h2>

                    <p>
                        La lista de invitados confirmados incluye una
                        <strong> barra de búsqueda</strong> y
                        <strong> filtros inteligentes</strong> para identificar rápidamente
                        quiénes asisten solos y quiénes vienen acompañados.
                    </p>

                    <p>
                        Esto agiliza el acomodo de mesas cuando tienes grupos, parejas
                        o familias que necesitas sentar juntos,
                        sin revisar tu lista manualmente una y otra vez.
                    </p>

                    <h2>Seating chart claro, flexible y sin papel</h2>

                    <p>
                        Con el <strong>acomodo de mesas de I attend</strong>,
                        organizar a tus invitados deja de ser un dolor de cabeza.
                        Tienes toda la distribución en un solo lugar,
                        puedes hacer cambios en cualquier momento
                        y cada invitado llega al evento sabiendo perfectamente dónde sentarse.
                    </p>

                    <p>
                        Compatible con eventos de cualquier tamaño,
                        desde una boda íntima hasta una recepción de cientos de personas.
                    </p>

                </section>
            </div>
        </div>
    );
}
