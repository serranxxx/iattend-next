import React from "react";
import Head from "next/head";

export default function WorkflowPage() {
    const workflowSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Cómo funciona I attend",
        "description":
            "Flujo de trabajo paso a paso para organizar eventos con I attend. Crea tu lista de invitados, diseña tu invitación, compártela y controla confirmaciones y acomodos sin complicarte.",
        "applicationCategory": "EventManagementApplication",
        "operatingSystem": "Web",
        "brand": {
            "@type": "Brand",
            "name": "I attend"
        },
        "url": "https://iattend.site/about/como-funciona",
        "audience": {
            "@type": "Audience",
            "audienceType": "Personas que organizan bodas y eventos sociales"
        },
        "featureList": [
            "Creación de lista de invitados",
            "Diseño de invitaciones digitales",
            "Envío de invitaciones",
            "Confirmación de asistencia en tiempo real",
            "Organización de mesas",
            "Pases digitales personalizados"
        ],
        "offers": {
            "@type": "Offer",
            "priceCurrency": "MXN",
            "availability": "https://schema.org/InStock",
            "url": "https://iattend.mx/precios"
        }
    };

    return (
        <>
            {/* ================= SEO HEAD ================= */}
            <Head>
                <title>Cómo Funciona I attend | Organiza tu Evento Paso a Paso</title>

                <meta
                    name="description"
                    content="Descubre cómo funciona I attend. Organiza tu evento paso a paso: crea tu lista de invitados, diseña tu invitación, compártela y controla confirmaciones y acomodos sin complicarte."
                />

                <meta
                    name="keywords"
                    content="cómo organizar un evento, cómo funciona I attend, organizar eventos paso a paso, gestión de invitados, invitaciones digitales"
                />

                <meta name="robots" content="index, follow" />
                <meta name="author" content="I attend" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Cómo Funciona I attend | Organiza tu Evento Paso a Paso"
                />
                <meta
                    property="og:description"
                    content="Organiza tu evento sin estrés con un flujo claro y sencillo. I attend te guía paso a paso desde el primer invitado hasta el gran día."
                />
                <meta property="og:url" content="https://iattend.site/about/como-funciona" />
                <meta property="og:site_name" content="I attend" />
                <meta
                    property="og:image"
                    content="https://iattend.site/about/como-funciona.jpg"
                />
                <meta property="og:locale" content="es_MX" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Cómo Funciona I attend | Organiza tu Evento Paso a Paso"
                />
                <meta
                    name="twitter:description"
                    content="Un flujo claro y sencillo para organizar tu evento sin complicarte."
                />
                <meta
                    name="twitter:image"
                    content="https://iattend.site/about/como-funciona.jpg"
                />

                {/* Schema.org */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(workflowSchema)
                    }}
                />
            </Head>

            {/* ================= CONTENIDO ================= */}
            <section id="flujo-de-trabajo" style={{
                maxHeight: '100%', overflow: 'auto'
            }}>

                <h2>Cómo funciona I attend: organiza tu evento paso a paso, sin complicarte</h2>

                <p>
                    <strong>I attend</strong> está diseñada para que organizar tu evento
                    sea un proceso claro, intuitivo y sin estrés.
                    Desde la creación de tu lista de invitados hasta el control final de confirmaciones,
                    todo el flujo de trabajo está pensado para acompañarte
                    <strong>paso a paso</strong>, sin procesos complicados ni herramientas externas.
                </p>

                <p>
                    A continuación te mostramos cómo funciona I attend
                    y cómo puedes gestionar tu evento de principio a fin
                    desde una sola plataforma.
                </p>

                <h3>1. Haz tu lista de invitados</h3>

                <p>
                    El primer paso para organizar tu evento es crear tu
                    <strong>lista de invitados digital</strong>.
                    Desde I attend puedes agregar y organizar a tus invitados
                    en un solo lugar, clasificarlos por categorías
                    y definir acompañantes de forma sencilla.
                </p>

                <p>
                    Esta lista se convierte en la base de toda la organización,
                    permitiéndote tener control desde el primer invitado
                    y facilitando la gestión conforme tu evento avanza.
                </p>

                <h3>2. Diseña tu invitación</h3>

                <p>
                    Una vez creada tu lista, puedes
                    <strong>diseñar tu invitación digital</strong>
                    de manera fácil y sin complicaciones.
                    Personaliza cada sección, agrega la información de tu evento
                    y adapta el diseño para que refleje tu estilo.
                </p>

                <p>
                    No necesitas conocimientos de diseño.
                    I attend te permite crear una invitación clara,
                    visual y completamente editable en cualquier momento.
                </p>

                <h3>3. Comparte con tus invitados</h3>

                <p>
                    Cuando tu invitación está lista,
                    puedes <strong>compartirla con tus invitados</strong>
                    de forma rápida y directa.
                    Envía la invitación por WhatsApp,
                    utiliza links personalizados o códigos de acceso,
                    según la privacidad que elijas para tu evento.
                </p>

                <p>
                    Este paso asegura que cada invitado reciba
                    la información correcta y pueda confirmar su asistencia
                    de forma sencilla desde su celular.
                </p>

                <h3>4. Controla confirmaciones y acomodo</h3>

                <p>
                    Conforme tus invitados responden,
                    puedes <strong>visualizar las confirmaciones en tiempo real</strong>.
                    I attend organiza automáticamente a tus invitados
                    en confirmados, cancelados o pendientes,
                    dándote una vista clara del estado de tu evento.
                </p>

                <p>
                    Además, puedes asignar mesas,
                    generar pases digitales personalizados
                    y mantener el control total del acomodo,
                    todo desde la misma plataforma.
                </p>

                <h3>Un flujo de trabajo claro y sin estrés</h3>

                <p>
                    El flujo de trabajo de <strong>I attend</strong>
                    está diseñado para acompañarte en cada etapa,
                    eliminando la confusión y el trabajo manual.
                    Todo fluye de forma natural,
                    permitiéndote enfocarte en disfrutar tu evento
                    mientras la plataforma se encarga de la organización.
                </p>

                <p>
                    Si buscas una forma <strong>simple, ordenada y digital</strong>
                    de organizar eventos, I attend te guía paso a paso
                    desde el inicio hasta el gran día.
                </p>

            </section>

        </>
    );
}
