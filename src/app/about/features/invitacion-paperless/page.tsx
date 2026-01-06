import React from "react";
import Head from "next/head";

export default function Page() {
    const schemaProduct = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Invitaciones Digitales Paperless I attend",
        "description":
            "Invitaciones digitales paperless para bodas y eventos. Totalmente personalizables, editables sin límites y fáciles de compartir.",
        "brand": {
            "@type": "Brand",
            "name": "I attend"
        },
        "category": "Digital Invitations",
        "url": "https://iattend.site/about/features/invitaciones-paperless",
        "image": "https://iattend.site/about/features/invitaciones-paperlessjpg",
        "offers": {
            "@type": "Offer",
            "priceCurrency": "MXN",
            "availability": "https://schema.org/InStock",
            "url": "https://iattend.mx/precios"
        },
        "audience": {
            "@type": "Audience",
            "audienceType": "Parejas que planean bodas y eventos especiales"
        }
    };

    return (
        <>
            {/* ================= SEO & METADATA ================= */}
            <Head>
                <title>Invitaciones Digitales Paperless para Bodas | I attend</title>

                <meta
                    name="description"
                    content="Crea invitaciones digitales paperless para bodas y eventos. Personaliza cada sección, edita sin límites y comparte una invitación moderna, elegante y sin papel con I attend."
                />

                <meta
                    name="keywords"
                    content="invitaciones digitales, invitaciones paperless, invitaciones para bodas, invitaciones sin papel, invitaciones digitales personalizadas, invitaciones modernas"
                />

                <meta name="robots" content="index, follow" />
                <meta name="author" content="I attend" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Invitaciones Digitales Paperless para Bodas | I attend"
                />
                <meta
                    property="og:description"
                    content="Diseña invitaciones digitales modernas, personalizables y sin papel. Edita cuantas veces quieras y comparte una experiencia única para tu evento."
                />
                <meta
                    property="og:url"
                    content="https://iattend.site/about/features/invitaciones-paperless"
                />
                <meta property="og:site_name" content="I attend" />
                <meta
                    property="og:image"
                    content="https://iattend.site/about/features/invitaciones-paperless.jpg"
                />
                <meta property="og:locale" content="es_MX" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Invitaciones Digitales Paperless para Bodas | I attend"
                />
                <meta
                    name="twitter:description"
                    content="Invitaciones digitales sin papel, personalizables y fáciles de crear. Diseña, edita y comparte tu evento con I attend."
                />
                <meta
                    name="twitter:image"
                    content="https://iattend.site/about/features/invitaciones-paperless.jpg"
                />

                {/* Schema.org */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemaProduct)
                    }}
                />
            </Head>

            {/* ================= CONTENIDO ================= */}
            <section id="invitaciones-paperless" style={{
                maxHeight: '100%', overflow: 'auto'
            }}>

                <h2>Invitaciones paperless digitales para bodas y eventos especiales</h2>

                <p>
                    Las <strong>invitaciones paperless de I attend</strong> son la alternativa moderna, elegante y sostenible
                    a la invitación tradicional. Se trata de <strong>invitaciones digitales personalizadas</strong>,
                    diseñadas para bodas y eventos especiales, que te permiten compartir toda la información de tu evento
                    de forma clara, visual y accesible desde cualquier dispositivo.
                </p>

                <p>
                    Este tipo de <strong>invitaciones digitales sin papel</strong> están pensadas para facilitarte todo el proceso:
                    desde la creación hasta la edición y el envío. No necesitas experiencia en diseño ni conocimientos técnicos.
                    En I attend, todo está diseñado para que <strong>no batalles</strong> y disfrutes creando una invitación
                    que realmente represente tu evento.
                </p>

                <p>
                    Puedes <strong>crear tu invitación digital desde cero</strong>, eligiendo cada sección y personalizando
                    cada detalle, o bien <strong>mandarla a hacer</strong> si prefieres delegar el diseño.
                    En ambos casos, tendrás una invitación flexible, editable y lista para adaptarse a cualquier cambio.
                </p>

                <h3>Una invitación digital completa, clara y fácil de usar</h3>

                <p>
                    Cada invitación paperless de I attend inicia con una <strong>portada con cuenta regresiva</strong>,
                    ideal para generar expectativa y emoción antes del gran día. Esta cuenta regresiva se actualiza
                    automáticamente y se convierte en el primer impacto visual para tus invitados.
                </p>

                <p>
                    Después, encontrarás un <strong>saludo inicial</strong>, donde puedes escribir un mensaje especial,
                    emotivo o informativo para dar la bienvenida a tus invitados y marcar el tono de tu evento desde el primer momento.
                </p>

                <p>
                    La <strong>sección de familia</strong> te permite compartir a las personas más importantes de tu evento,
                    como padres, padrinos, damas de honor u otros acompañantes especiales, dándole un toque más humano,
                    cercano y significativo a tu invitación digital.
                </p>

                <p>
                    También puedes incluir una <strong>sección de cita o frase</strong>, perfecta para agregar esa frase
                    que los representa, una dedicatoria especial o un mensaje que forme parte de su historia como pareja.
                </p>

                <h3>Itinerario dinámico para bodas y eventos</h3>

                <p>
                    El <strong>itinerario dinámico</strong> es una de las secciones más importantes de la invitación digital.
                    Aquí puedes organizar cada momento de tu boda o evento de manera clara, visual y ordenada.
                </p>

                <p>
                    Puedes agregar múltiples momentos como ceremonia, recepción, fiesta o cualquier actividad relevante,
                    incluyendo <strong>horarios, mapas interactivos, ubicaciones, información del clima y fotografías</strong>.
                    Además, puedes añadir tantos momentos como necesites, sin límites, para que tus invitados
                    tengan toda la información en un solo lugar.
                </p>

                <h3>Dress code claro y visual</h3>

                <p>
                    La invitación incluye una <strong>sección de dress code</strong> diseñada para comunicar el código de vestimenta
                    de forma visual y fácil de entender. Puedes agregar <strong>imágenes, paletas de colores</strong>
                    o incluso un <strong>enlace a Pinterest</strong> para que tus invitados tengan una referencia clara
                    y eviten confusiones.
                </p>

                <h3>Mesa de regalos digital integrada</h3>

                <p>
                    Con la <strong>mesa de regalos digital</strong> puedes compartir hasta <strong>tres opciones</strong>,
                    ya sea tarjetas de regalo, enlaces externos o datos para recibir transferencias.
                    Todo se muestra con una <strong>estética limpia, cuidada y elegante</strong>,
                    integrada perfectamente al diseño de tu invitación.
                </p>

                <h3>Módulo de actividades y recomendaciones</h3>

                <p>
                    El <strong>módulo de actividades</strong> está pensado especialmente para bodas destino
                    o eventos con invitados foráneos. Aquí puedes recomendar <strong>dónde hospedarse,
                        dónde comer o qué lugares visitar</strong> antes o después del evento,
                    ayudando a tus invitados a planear mejor su experiencia.
                </p>

                <h3>Avisos importantes y galería de fotos</h3>

                <p>
                    La invitación paperless también cuenta con una <strong>sección de avisos importantes</strong>,
                    ideal para comunicar cualquier información relevante como cambios de horario,
                    recomendaciones especiales o notas importantes para tus invitados.
                </p>

                <p>
                    Además, puedes incluir una <strong>galería de fotos</strong> donde compartas recuerdos,
                    momentos especiales o imágenes significativas, haciendo que tu invitación digital
                    sea más emocional y memorable.
                </p>

                <h3>Invitaciones digitales 100% personalizables y editables</h3>

                <p>
                    Uno de los mayores beneficios de las <strong>invitaciones digitales de I attend</strong>
                    es que son <strong>totalmente personalizables</strong>. Puedes editar el contenido,
                    el diseño y las secciones <strong>las veces que quieras</strong>, incluso después de haber compartido la invitación.
                </p>

                <p>
                    Esto te permite adaptarte a cualquier cambio de último momento sin estrés,
                    sin reimprimir y sin costos adicionales, ofreciendo siempre información actualizada
                    a tus invitados.
                </p>

                <p>
                    Con I attend, obtienes una <strong>invitación paperless moderna</strong>,
                    diseñada para adaptarse a tu evento de forma única y especial,
                    combinando diseño, funcionalidad y facilidad de uso en una sola experiencia digital.
                </p>

            </section>

        </>
    );
}
