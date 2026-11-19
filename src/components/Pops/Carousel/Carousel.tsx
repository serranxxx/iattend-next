"use client";

import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./carousel.module.css";

/** Carrusel horizontal con scroll-snap (mobile) y dots que siguen a la tarjeta activa. */
export const Carousel = ({
  children,
  label,
  trackClassName,
  dotsClassName,
}: {
  children: ReactNode;
  label: string;
  trackClassName?: string;
  dotsClassName?: string;
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const count = Children.count(children);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setActive(max > 0 ? Math.round((el.scrollLeft / max) * (count - 1)) : 0);
  }, [count]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    return () => el.removeEventListener("scroll", update);
  }, [update]);

  return (
    <>
      <div
        ref={trackRef}
        role="region"
        aria-label={label}
        tabIndex={0}
        className={`scroll-cont ${styles.track} ${trackClassName ?? ""}`}
      >
        {children}
      </div>
      <div aria-hidden="true" className={`${styles.dots} ${dotsClassName ?? ""}`}>
        {Array.from({ length: count }, (_, i) => (
          <span key={i} className={i === active ? styles.dotOn : styles.dot} />
        ))}
        <span className={styles.hint}>desliza →</span>
      </div>
    </>
  );
};
