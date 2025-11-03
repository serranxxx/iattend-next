"use client";

import { useEffect, useRef } from "react";

interface GoogleTranslateProps {
  id?: string | null; // 👈 prop opcional con un valor por defecto
}

export default function GoogleTranslate({ id }: GoogleTranslateProps) {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    // 1️⃣ Define el callback global para Google
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "es", // idioma original de la página
          includedLanguages: "nl,en,es,fr,it,de,pt",
          layout:
            (window as any).google.translate.TranslateElement.InlineLayout
              .SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );

      // 2️⃣ Espera un poco y fuerza el idioma a holandés (nl)]
      if (id === "68ffdb9cd673a17f84312991") {
        setTimeout(() => {
          const select = document.querySelector(
            ".goog-te-combo"
          ) as HTMLSelectElement | null;

          if (select) {
            select.value = "nl"; // código del idioma holandés
            select.dispatchEvent(new Event("change")); // dispara la traducción
          }
        }, 500); // esperar a que el widget se cargue
      }

    };

    // 3️⃣ Inyecta el script de Google Translate
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return <div id="google_translate_element" className="gt-widget"></div>;
}