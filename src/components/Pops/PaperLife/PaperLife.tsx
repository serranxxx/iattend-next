"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./paperLife.module.css";

/**
 * "Física de papel" para el collage de Pops. Los elementos se marcan con
 * atributos y aquí solo se orquesta; todo el movimiento vive en el CSS:
 *
 *  data-anim   entrada al verse: drop (cae sobre la mesa) · slap (etiqueta
 *              que se pega de golpe) · pop (sticker/estrella) · rise (sube
 *              desde abajo) · swing (etiqueta colgante) · write (se escribe) · fade
 *  data-idle   vida en reposo tras la entrada: flutter · float · nudge · snip
 *  data-hover  wiggle · spin · swing
 *  data-depth  px de deriva con el cursor (brisa / paralaje)
 *  data-anim-group  los del mismo grupo entran juntos en cuanto uno se ve
 *              (p. ej. slides de un carrusel que quedan fuera de pantalla)
 */
export const PaperLife = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    (window as unknown as { __paperLife?: boolean }).__paperLife = true;
    if (!root || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root?.querySelectorAll<HTMLElement>("[data-anim]").forEach((el) => el.setAttribute("data-in", ""));
      return;
    }

    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    // Cada papel con su propio carácter: hacia dónde cae y cómo respira.
    root.querySelectorAll<HTMLElement>("[data-anim], [data-idle]").forEach((el) => {
      const sign = Math.random() < 0.5 ? -1 : 1;
      el.style.setProperty("--drop-rot", `${sign * rand(3, 8)}deg`);
      el.style.setProperty("--fl-amp", `${-sign * rand(0.7, 1.8)}deg`);
      el.style.setProperty("--fl-dur", `${rand(3.6, 6.4)}s`);
      el.style.setProperty("--fl-delay", `${-rand(0, 6)}s`);
      if (!el.hasAttribute("data-anim")) el.setAttribute("data-live", "");
    });
    root.querySelectorAll<HTMLElement>("[data-depth]").forEach((el) => {
      el.style.setProperty("--depth", el.dataset.depth ?? "0");
    });

    // Al terminar la entrada, pasa a su animación de reposo.
    const onEnd = (e: AnimationEvent) => {
      const el = e.currentTarget as HTMLElement;
      if (e.target === el && !el.hasAttribute("data-live")) el.setAttribute("data-live", "");
    };

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left);
        const enter = (el: HTMLElement, delay: string) => {
          if (el.hasAttribute("data-in")) return;
          el.style.setProperty("--in-delay", delay);
          el.addEventListener("animationend", onEnd as EventListener);
          el.setAttribute("data-in", "");
          io.unobserve(el);
        };
        visible.forEach((entry, i) => {
          const el = entry.target as HTMLElement;
          const delay = `${Math.min(i, 10) * 70}ms`;
          enter(el, delay);
          const group = el.dataset.animGroup;
          if (group) {
            root.querySelectorAll<HTMLElement>(`[data-anim-group="${group}"]`).forEach((g) => enter(g, delay));
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.12 },
    );
    root.querySelectorAll<HTMLElement>("[data-anim]").forEach((el) => io.observe(el));

    // Brisa: los papeles derivan suave hacia el cursor (con inercia).
    let raf = 0;
    const target = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };
    const tick = () => {
      cur.x += (target.x - cur.x) * 0.06;
      cur.y += (target.y - cur.y) * 0.06;
      root.style.setProperty("--mx", cur.x.toFixed(4));
      root.style.setProperty("--my", cur.y.toFixed(4));
      raf = Math.abs(target.x - cur.x) + Math.abs(target.y - cur.y) > 0.001 ? requestAnimationFrame(tick) : 0;
    };
    const onMove = (e: PointerEvent) => {
      target.x = (e.clientX / innerWidth) * 2 - 1;
      target.y = (e.clientY / innerHeight) * 2 - 1;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const canHover = matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (canHover) addEventListener("pointermove", onMove, { passive: true });

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div ref={ref} className={styles.root}>
      {children}
    </div>
  );
};
