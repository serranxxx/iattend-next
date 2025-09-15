// app/[invitation_label]/[invitation_name]/page.tsx
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server"; // tu helper de server
import type { Metadata } from "next";
import Invitation from "@/components/Invitation/Invitation/Invitation";
import { NewInvitation } from "@/types/new_invitation";

// (Opcional) Si tus invitaciones cambian seguido:
export const dynamic = "force-dynamic"; // o usa revalidate si prefieres cache

type Params = {
  params: {
    invitation_label: string;
    invitation_name: string;
  };
};

// (Opcional) metadata dinámica según la invitación
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const supabase = await createClient();
  const label = decodeURIComponent(params.invitation_label);
  const name = decodeURIComponent(params.invitation_name);

  const { data } = await supabase.from("invitations").select("data").eq("label", label).eq("name", name).maybeSingle();

  if (!data?.data) {
    return {
      title: "I attend",
      description: "Diseña, comparte, celebra.",
    };
  }

  const inv = data.data;
  return {
    title: inv?.cover?.title ?? "Invitación",
    description: inv?.cover?.subtitle ?? "Invitación digital",
    openGraph: {
      title: inv?.cover?.title ?? "Invitación",
      // description: inv?.cover?.subtitle ?? "Invitación digital",
      // images: inv?.cover?.image ? [inv.cover.image] : undefined,
    },
  };
}

export default async function InvitationDynamicPage({ params }: Params) {
  const supabase = await createClient();

  // Normaliza/decodifica por si vienen espacios o caracteres especiales
  const label = decodeURIComponent(params.invitation_label);
  const name = decodeURIComponent(params.invitation_name);
  let loader = true;
  let invitation: NewInvitation | null = null;

  // Consulta pública (RLS debe permitir SELECT a anon)
  const { data, error } = await supabase.from("invitations").select("data").eq("label", label).eq("name", name).maybeSingle();

  if (error) {
    // si quieres ver el error en logs
    console.error("[Supabase error]", error);
    notFound();
  }

  if (!data?.data) {
    notFound();
  }

  if (data) {
    invitation = data.data;
    loader = false;
  }

  // tu JSONB

  return invitation && <Invitation invitation={invitation} loader={loader} />;
}
