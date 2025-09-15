// app/[invitation_label]/[invitation_name]/page.tsx
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { Metadata, ResolvingMetadata } from "next";
import Invitation from "@/components/Invitation/Invitation/Invitation";
import { NewInvitation } from "@/types/new_invitation";

export const dynamic = "force-dynamic";

// Tipos locales claros y sin pelearse con PageProps de Next
type RouteParams = {
  invitation_label: string;
  invitation_name: string;
};

type PageProps = {
  params: RouteParams;
  searchParams?: Record<string, string | string[] | undefined>; // opcional
};

// ---- Metadata dinámica (firma recomendada por Next) ----
export async function generateMetadata({ params }: PageProps, _parent?: ResolvingMetadata): Promise<Metadata> {
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

  const inv = data.data as NewInvitation;

  return {
    title: inv?.cover?.title?.text?.value ?? "Invitación",
    // description: inv?.cover?.subtitle ?? "Invitación digital",
    openGraph: {
      title: inv?.cover?.title?.text?.value ?? "Invitación",
      // description: inv?.cover?.subtitle ?? "Invitación digital",
      // images: inv?.cover?.image?.prod ? [inv.cover.image.prod] : undefined,
    },
  };
}

// ---- Página ----
export default async function InvitationDynamicPage({ params }: PageProps) {
  const supabase = await createClient();

  const label = decodeURIComponent(params.invitation_label);
  const name = decodeURIComponent(params.invitation_name);

  const { data, error } = await supabase.from("invitations").select("data").eq("label", label).eq("name", name).maybeSingle();

  if (error) {
    console.error("[Supabase error]", error);
    notFound();
  }

  if (!data?.data) {
    notFound();
  }

  const invitation = data!.data as NewInvitation;
  const loader = false;

  return <Invitation invitation={invitation} loader={loader} />;
}
