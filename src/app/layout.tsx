import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppProvider } from "@/context/AppProvider";
import "@/styles/globals.css";
import { AntdProvider } from "@/context/AntdProvider";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "I attend",
  description: "Diseña, comparte, celebra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppProvider>
          <AntdProvider>
            {children}
            <Script
              id="pinterest-sdk"
              src="https://assets.pinterest.com/js/pinit.js"
              strategy="afterInteractive"
            />
          </AntdProvider>
        </AppProvider>
      </body>
    </html>
  );
}
