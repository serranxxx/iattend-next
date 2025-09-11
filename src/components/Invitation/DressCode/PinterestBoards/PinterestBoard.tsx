"use client";
import { useEffect, useRef } from "react";

export default function PinterestWidget() {
    const built = useRef(false);

    useEffect(() => {
        // Evita doble ejecución en dev (Strict Mode)
        if (built.current) return;
        built.current = true;

        // Cuando el SDK ya está cargado, “construye” los widgets del DOM actual
        (window as any).PinUtils?.build?.();
    }, []);
    return (

        <a
            data-pin-do="embedBoard"
            data-pin-board-width="800"
            data-pin-scale-height="220"
            data-pin-scale-width="80"
            href={`https://www.pinterest.com/albserranx/flores/`}
        />
    );
}