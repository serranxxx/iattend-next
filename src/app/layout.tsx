import type { Metadata } from "next";
import { AppProvider } from "@/context/AppProvider";
import "@/styles/globals.css";
import { AntdProvider } from "@/context/AntdProvider";
import 'antd/dist/reset.css'
import { AntdRegistry } from '@ant-design/nextjs-registry'


export const metadata: Metadata = {
  themeColor: "#0c171b",
  title: {
    default: "I attend | Invitaciones Digitales y Gestión de Invitados",
    template: "%s | I attend",
  },
  description:
    "Crea invitaciones digitales personalizadas, gestiona tu lista de invitados y confirma asistencias en tiempo real. La plataforma todo-en-uno para bodas y eventos.",
  keywords: [
    "invitaciones digitales",
    "invitaciones para boda",
    "gestión de invitados",
    "confirmación de asistencia",
    "RSVP digital",
    "invitación paperless",
    "bodas",
    "eventos",
    "I attend",
    "pases digitales",
    "mapa de mesas",
    "envíos por WhatsApp",
  ],
  metadataBase: new URL("https://iattend.site"),
  authors: [{ name: "I attend" }],
  creator: "I attend",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
};


const CRITICAL_FONTS = [
  "denver-serial-bold.woff2",
  "denver-serial-bold-italic.woff2",
  "michigan-signature.woff2",
  "luxora-grotesk-light.woff2",
  "windsor-bold.woff2",
];

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="es" >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0c171b" />
        {/* Fuentes de marca del hero/header: se piden desde el HTML, sin esperar al CSS ni al JS */}
        {CRITICAL_FONTS.map((file) => (
          <link key={file} rel="preload" href={`/assets/fonts/${file}`} as="font" type="font/woff2" crossOrigin="anonymous" />
        ))}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Solo las familias de Google que de verdad usa el CSS */}
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="scroll-invitation">
        <AppProvider>
          <AntdProvider>
            <AntdRegistry>
              {children}
            </AntdRegistry>

          </AntdProvider>
        </AppProvider>
      </body>
    </html>
  );
}
