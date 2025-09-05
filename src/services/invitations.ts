// src/services/invitations.ts

import { Invitation } from "@/types/invitation";
import { api } from "./apiInvitation";



// Traer todas las invitaciones (puedes filtrar activas desde frontend)
export async function getAllInvitations(): Promise<Invitation[]> {
  const res = await api.get("/inv");
  return res.data.data as Invitation[];
}

// Solo las activas (si tu backend no tiene filtro, filtramos aquí)
export async function getLiveInvitations(): Promise<Invitation[]> {
  const invitations = await getAllInvitations();
  return invitations.filter((inv) => inv.active);
}

// Buscar invitación por slugs (label + eventName)
export async function getInvitationBySlugs(label: string, eventName: string): Promise<Invitation | null> {
  try {
    const res = await api.get(`/inv/${encodeURIComponent(label)}/${encodeURIComponent(eventName)}`);
    return res.data.data ?? null;
  } catch (err) {
    return null;
  }
}