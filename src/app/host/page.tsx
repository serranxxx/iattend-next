"use client";
import Invitation from "@/components/Invitation/Invitation/Invitation";
import { InvitationType, NewInvitation } from "@/types/new_invitation";
import { useEffect, useRef, useState } from "react";

// 👇 Lista de orígenes permitidos
const ALLOWED_ORIGINS = [
  "http://localhost:3001",
  "https://i-attend.vercel.app",
  "https://i-attend-224dh.ondigitalocean.app",
];

export default function Page() {
  const [invitation, setInvitation] = useState<NewInvitation | null>(null);
  const [hostOrigin, setHostOrigin] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  // Handshake inicial
  useEffect(() => {
    // Opción segura: envía a todos los hosts permitidos
    ALLOWED_ORIGINS.forEach((origin) => {
      window.parent?.postMessage({ type: "REMOTE_READY" }, origin);
    });
  }, []);

  // Escuchar mensajes desde cualquiera de los hosts válidos
  useEffect(() => {
    function onMessage(ev: MessageEvent) {
      if (!ALLOWED_ORIGINS.includes(ev.origin)) return; // valida el origen
      const { type, payload } = ev.data || {};

      // Guardamos el host válido para responderle después
      if (!hostOrigin) setHostOrigin(ev.origin);

      if (type === "HOST_PROPS" && payload?.invitationConfig) {
        setInvitation(payload.invitationConfig as NewInvitation);
      }
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [hostOrigin]);

  // Reportar la altura al host correcto
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      const height = el.getBoundingClientRect().height;
      if (hostOrigin) {
        window.parent?.postMessage(
          { type: "REMOTE_HEIGHT", payload: { height } },
          hostOrigin
        );
      } else {
        // Enviar a todos los hosts si aún no se identificó uno
        ALLOWED_ORIGINS.forEach((origin) => {
          window.parent?.postMessage(
            { type: "REMOTE_HEIGHT", payload: { height } },
            origin
          );
        });
      }
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, [hostOrigin]);

  return (
    invitation ? (
      <Invitation
        height="100vh"
        dev={true}
        invitation={invitation}
        loader={false}
        type={"open" as InvitationType}
        mongoID={null}
      />
    ) : null
  );
}