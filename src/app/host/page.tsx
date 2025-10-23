"use client";
import Invitation from "@/components/Invitation/Invitation/Invitation";
import { InvitationType, NewInvitation } from "@/types/new_invitation";
import { useEffect, useRef, useState } from "react";

const HOST_ORIGIN = "http://localhost:3001"; // 👈 sin ruta

export default function Page() {

  const [invitation, setInvitation] = useState<NewInvitation | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.parent?.postMessage({ type: "REMOTE_READY" }, HOST_ORIGIN);
  }, []);

  useEffect(() => {
    function onMessage(ev: MessageEvent) {
      if (ev.origin !== HOST_ORIGIN) return;
      const { type, payload } = ev.data || {};
      if (type === "HOST_PROPS" && payload?.invitationConfig) {
        setInvitation(payload.invitationConfig as NewInvitation); // 👈 guarda el objeto directo
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const height = el.getBoundingClientRect().height;
      window.parent?.postMessage({ type: "REMOTE_HEIGHT", payload: { height } }, HOST_ORIGIN);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return invitation ? (
    <Invitation height={"100vh"} dev={true} invitation={invitation} loader={false} type={"open" as InvitationType} mongoID={null} />
  ) : (
    <></>
  );
}
