"use client";

import { useEffect, useRef } from "react";

export default function GoogleTranslate() {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    // 1) define el callback en window (Google lo busca global)
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "es",
          includedLanguages: "en,es,fr,it,de,pt",
          layout:
            (window as any).google.translate.TranslateElement.InlineLayout
              .SIMPLE,
        },
        "google_translate_element"
      );
    };

    // 2) inyecta el script solo una vez
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return <div id="google_translate_element" className="gt-widget"></div>;
}