import React, { useEffect, useRef, useState } from "react";
import styles from './swipe.module.css'
import { FaUnlock } from "react-icons/fa";

type Props = {
  label?: string;
  onConfirm: () => void;
  disabled?: boolean;
  resetOnConfirm?: boolean; // vuelve al inicio tras confirmar
  threshold?: number;       // 0..1 porcentaje mínimo (default 0.85)
};

export default function SwipeToConfirm({
  label = "Desliza para desbloquear",
  onConfirm,
  disabled = false,
  resetOnConfirm = false,
  threshold = 0.85,
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const knobRef = useRef<HTMLButtonElement>(null);

  const [dragX, setDragX] = useState(0);
  const [maxX, setMaxX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const startX = useRef(0);

  useEffect(() => {
    const calc = () => {
      if (!trackRef.current || !knobRef.current) return;
      const trackW = trackRef.current.clientWidth;
      const knobW = knobRef.current.clientWidth;
      setMaxX(Math.max(0, trackW - knobW - 8)); // “colchón” visual
      setDragX(0);
    };
    calc();
    const obs = new ResizeObserver(calc);
    if (trackRef.current) obs.observe(trackRef.current);
    return () => obs.disconnect();
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    if (disabled || confirmed) return;
    // capturar desde el propio knob (más fiable en iOS)
    knobRef.current?.setPointerCapture(e.pointerId);
    setDragging(true);
    startX.current = e.clientX - dragX;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;

    // En mouse: si no hay botón presionado, ignora
    if (e.pointerType === "mouse" && (e as any).buttons === 0) return;

    // En mobile: evita que el navegador haga scroll/gestos
    e.preventDefault();

    const x = e.clientX - startX.current;
    setDragX(Math.max(0, Math.min(x, maxX)));
  };

  const release = () => {
    if (!dragging) return;
    setDragging(false);
    const done = dragX >= maxX * threshold;
    if (done) {
      setConfirmed(true);
      setDragX(maxX);
      onConfirm?.();
      if (resetOnConfirm) {
        setTimeout(() => {
          setConfirmed(false);
          setDragX(0);
        }, 800);
      }
    } else {
      setDragX(0);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (disabled || confirmed) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setConfirmed(true);
      setDragX(maxX);
      onConfirm?.();
      if (resetOnConfirm) {
        setTimeout(() => {
          setConfirmed(false);
          setDragX(0);
        }, 800);
      }
    }
  };

  return (
    <div className={styles.stc_wrapper}>
      <div
        ref={trackRef}
        className={`${styles.stc_track} ${disabled ? styles.stc_disabled : ""}`}
        aria-disabled={disabled}
      >
        <div className={`${styles.stc_label} ${confirmed ? styles.stc_label__hidden : ""}`}>
          {label}
        </div>

        <div className={styles.stc_progress} style={{ width: dragX + 56 }} />

        <button
          ref={knobRef}
          type="button"
          className={`${styles.stc_knob} ${dragging ? styles.stc_knob__drag : ""} ${
            confirmed ? styles.stc_knob__ok : ""
          }`}
          style={{ transform: `translate(${dragX}px, -50%)` }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={release}
          onPointerCancel={release}
          onPointerLeave={release}         // <-- respaldo extra
          onKeyDown={onKeyDown}
          aria-label={confirmed ? "Confirmado" : "Desliza para desbloquear"}
          disabled={disabled}
        >
          <FaUnlock size={18} />
        </button>
      </div>
    </div>
  );
}