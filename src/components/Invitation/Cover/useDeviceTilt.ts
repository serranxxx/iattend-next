// useDeviceTilt.ts
import { useEffect, useRef, useState } from "react";

type Tilt = { x: number; y: number; supported: boolean; needsPermission?: boolean };

export function useDeviceTilt(max = 15, smoothing = 0.12) {
  const [tilt, setTilt] = useState<Tilt>({ x: 0, y: 0, supported: false });
  const target = useRef({ x: 0, y: 0 });
  const anim = useRef<number | null>(null);

  // Suavizado por rAF
  const tick = () => {
    const curr = { x: tilt.x, y: tilt.y };
    const nextX = curr.x + (target.current.x - curr.x) * smoothing;
    const nextY = curr.y + (target.current.y - curr.y) * smoothing;
    setTilt((t) => ({ ...t, x: nextX, y: nextY }));
    anim.current = requestAnimationFrame(tick);
  };

  // Mouse fallback (en desktop)
  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const nx = (e.clientX / innerWidth) * 2 - 1; // -1..1
      const ny = (e.clientY / innerHeight) * 2 - 1; // -1..1
      target.current = { x: nx * max, y: ny * max };
    };
    window.addEventListener("mousemove", onMouse, { passive: true });
    return () => window.removeEventListener("mousemove", onMouse);
  }, [max]);

  // DeviceOrientation (móviles)
  useEffect(() => {
    const hasDO = "DeviceOrientationEvent" in window;
    const hasPermissionAPI =
      // @ts-ignore
      typeof DeviceOrientationEvent !== "undefined" && typeof (DeviceOrientationEvent as any).requestPermission === "function";

    setTilt((t) => ({ ...t, supported: hasDO, needsPermission: !!hasPermissionAPI }));

    const onOrient = (e: DeviceOrientationEvent) => {
      // gamma: izquierda/derecha (-90..90) → x
      // beta: adelante/atrás (-180..180) → y
      const gamma = e.gamma ?? 0;
      const beta = e.beta ?? 0;

      // Normalizamos a rango -1..1 y aplicamos límites
      const nx = Math.max(-1, Math.min(1, gamma / 45)); // 45° ≈ límite cómodo
      const ny = Math.max(-1, Math.min(1, beta / 45));
      target.current = { x: nx * max, y: ny * max };
    };

    // Arrancamos la animación
    if (anim.current == null) anim.current = requestAnimationFrame(tick);

    if (hasDO && !hasPermissionAPI) {
      window.addEventListener("deviceorientation", onOrient, true);
      return () => {
        window.removeEventListener("deviceorientation", onOrient, true);
        if (anim.current) cancelAnimationFrame(anim.current);
      };
    }

    return () => {
      if (anim.current) cancelAnimationFrame(anim.current);
    };
  }, [max, smoothing]); // eslint-disable-line

  // Método para pedir permiso en iOS (llámalo en un click)
  const requestPermission = async () => {
    try {
      // @ts-ignore
      const res = await DeviceOrientationEvent.requestPermission();
      if (res === "granted") {
        const onOrient = (e: DeviceOrientationEvent) => {
          const gamma = e.gamma ?? 0;
          const beta = e.beta ?? 0;
          const nx = Math.max(-1, Math.min(1, gamma / 45));
          const ny = Math.max(-1, Math.min(1, beta / 45));
          target.current = { x: nx * max, y: ny * max };
        };
        window.addEventListener("deviceorientation", onOrient, true);
        setTilt((t) => ({ ...t, needsPermission: false, supported: true }));
      }
    } catch {}
  };

  return { tilt, requestPermission };
}
