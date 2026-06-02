import BackButton from "@/components/BackButton/BackButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Side Events para Bodas y Eventos | I attend",
    description:
        "Organiza cenas de bienvenida, brunch de despedida, civil, pool party y más con Side Events de I attend. Gestión independiente de invitados, confirmaciones y pases para cada evento paralelo.",
    keywords: [
        "side events boda",
        "eventos paralelos boda",
        "cena de bienvenida boda",
        "brunch de despedida boda",
        "eventos secundarios boda destino",
        "gestión eventos boda",
        "confirmaciones independientes eventos",
        "organizar side events",
        "I attend side events",
    ],
    openGraph: {
        title: "Side Events para Bodas y Eventos | I attend",
        description:
            "Crea y gestiona eventos paralelos a tu boda: cena de bienvenida, civil, brunch y más. Cada Side Event tiene sus propios invitados, confirmaciones y pases digitales.",
        url: "https://iattend.site/about/side-events",
        siteName: "I attend",
        images: [
            {
                url: "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/meta.jpg",
                width: 1200,
                height: 630,
                alt: "I attend – Side Events para bodas y eventos",
            },
        ],
        locale: "es_MX",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Side Events para Bodas | I attend",
        description:
            "Gestiona cenas de bienvenida, brunch, civil y más eventos paralelos con confirmaciones e invitados independientes.",
        images: ["https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/meta.jpg"],
    },
    robots: { index: true, follow: true },
};

export default function SideEventsPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Side Events — I attend",
        description:
            "Módulo de Side Events de I attend para organizar eventos paralelos a bodas y celebraciones. Gestión independiente de invitados, confirmaciones y pases digitales.",
        applicationCategory: "EventManagementApplication",
        operatingSystem: "Web",
        brand: {
            "@type": "Brand",
            name: "I attend",
        },
        url: "https://iattend.site/about/side-events",
        offers: {
            "@type": "Offer",
            priceCurrency: "MXN",
            availability: "https://schema.org/InStock",
            url: "https://iattend.mx/precios",
        },
        featureList: [
            "Eventos paralelos con nombre, fecha, horario y ubicación",
            "Lista de invitados independiente por Side Event",
            "Confirmación de asistencia separada",
            "Pase digital propio por evento",
            "Dashboard con confirmados, pendientes y cancelados",
            "Incluido en planes PRO (3 Side Events) y Lite (1 Side Event)",
        ],
    };

    return (
        <div className="seo_first_container">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            <div className="seo_second_container">
                <section className="seo_container" id="side-events">

                    <div className="action_wrap">
                        <BackButton />
                    </div>

                    <h1>Side Events: organiza cada momento de tu boda o evento</h1>

                    <p>
                        Los <strong>Side Events de I attend</strong> son eventos paralelos que ocurren
                        antes, durante o después de tu evento principal. Cada uno tiene sus propios
                        invitados, horario, ubicación y confirmaciones — completamente independientes
                        del evento central.
                    </p>

                    <p>
                        Con Side Events, I attend deja de ser solo una herramienta para invitaciones y se
                        convierte en una <strong>plataforma completa de gestión de experiencias</strong>,
                        pensada para bodas, congresos, viajes grupales y cualquier evento donde una
                        sola invitación no es suficiente para representar todo lo que va a pasar.
                    </p>

                    <h2>¿Qué es un Side Event?</h2>

                    <p>
                        Un Side Event es cualquier actividad complementaria que forma parte de la
                        experiencia de tu evento principal pero que no incluye a todos los invitados,
                        tiene su propio horario o requiere confirmación separada.
                    </p>

                    <h3>Ejemplos en una boda</h3>

                    <ul className="seo_feature_list">
                        <li>Cena de bienvenida (welcome dinner)</li>
                        <li>Despedida de solteros / solteras</li>
                        <li>Ceremonia civil</li>
                        <li>Brunch de despedida</li>
                        <li>Pool party</li>
                        <li>Ensayo de ceremonia</li>
                        <li>Tour por la ciudad (ideal para bodas destino)</li>
                    </ul>


                    <h2>Cómo funcionan los Side Events en I attend</h2>

                    <p>
                        Cada Side Event que creas dentro de I attend es un evento propio con toda la
                        información que tus invitados necesitan.
                    </p>

                    <h3>Información independiente por evento</h3>

                    <p>
                        Al crear un Side Event puedes configurar:
                    </p>

                    <ul className="seo_feature_list">
                        <li><strong>Nombre del evento</strong></li>
                        <li><strong>Fecha y hora</strong></li>
                        <li><strong>Ubicación</strong></li>
                        <li><strong>Descripción o mensaje personalizado</strong></li>
                        <li><strong>Imagen o portada</strong></li>
                        <li><strong>Capacidad máxima</strong> (opcional)</li>
                    </ul>

                    <h2>Invitados específicos por Side Event</h2>

                    <p>
                        No todos los invitados del evento principal están invitados a todos los
                        Side Events. Tú decides quién recibe invitación para cada actividad — y
                        cada invitado solo ve los eventos a los que fue invitado.
                    </p>

                    <p>
                        Por ejemplo, en una boda puedes tener:
                    </p>

                    <ul className="seo_feature_list">
                        <li>200 invitados a la boda</li>
                        <li>40 invitados a la cena de bienvenida</li>
                        <li>15 invitados al brunch de despedida</li>
                    </ul>

                    <p>
                        Cada lista es independiente, y la <a href="/about/guest-management">gestión de invitados</a> de
                        cada evento se maneja por separado, sin mezclar confirmaciones ni listas.
                    </p>

                    <h2>Confirmación de asistencia separada</h2>

                    <p>
                        Cada invitado puede confirmar o cancelar su asistencia a cada Side Event
                        de forma independiente. Un invitado puede confirmar la boda, rechazar la cena
                        de bienvenida y confirmar el brunch — sin que eso afecte su estado en el
                        evento principal.
                    </p>

                    <p>
                        Esto te da estadísticas claras y reales para cada actividad, facilitando
                        la logística con proveedores, restaurantes o coordinadores de cada momento.
                    </p>


                    <h2>Dashboard con métricas por evento</h2>

                    <p>
                        Desde tu panel de administración puedes ver, para cada Side Event:
                    </p>

                    <ul className="seo_feature_list">
                        <li>Total de invitados</li>
                        <li>Confirmados</li>
                        <li>Pendientes de respuesta</li>
                        <li>Cancelados</li>
                        <li>Porcentaje de asistencia</li>
                        <li>Capacidad restante (si definiste un límite)</li>
                    </ul>

                    <h2>Experiencia del invitado</h2>

                    <p>
                        Dentro de la <a href="/about/invitacion-paperless">invitación digital</a>,
                        tus invitados pueden ver todos los momentos a los que están invitados de
                        forma clara y ordenada. La experiencia se presenta como una línea de tiempo:
                    </p>

                    <ul className="seo_feature_list">
                        <li><strong>Viernes — </strong>18:00 Cena de bienvenida</li>
                        <li><strong>Sábado — </strong>17:00 Ceremonia · 20:00 Recepción</li>
                        <li><strong>Domingo — </strong>10:00 Brunch de despedida</li>
                    </ul>

                    <p>
                        Cada invitado solo ve los eventos para los que tiene invitación, lo que
                        hace que su experiencia sea completamente personalizada y sin información
                        irrelevante.
                    </p>

                    <h2>¿En qué planes está disponible?</h2>

                    <p>
                        Los Side Events están incluidos en los planes <strong>PRO</strong> (hasta 3 Side Events)
                        y <strong>Lite</strong> (1 Side Event). Si necesitas más, puedes contactarnos
                        para un plan personalizado.
                    </p>

                    <p>
                        Son especialmente útiles para <strong>bodas destino</strong>, donde los
                        invitados viajan desde lejos y la experiencia va mucho más allá del día de
                        la boda.
                    </p>

                </section>
            </div>
        </div>
    );
}
