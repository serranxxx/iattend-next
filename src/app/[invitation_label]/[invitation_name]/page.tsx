// app/[invitation_label]/[invitation_name]/page.tsx
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { Metadata } from "next";
import Invitation from "@/components/Invitation/Invitation/Invitation";
import { InvitationType, NewInvitation } from "@/types/new_invitation";
import { getPublicServerClient } from "@/lib/supabase/public-server";
import { getTranslatedInvitationFromCache } from "@/lib/translation/cache";
import { getTranslatedCopy } from "@/lib/translation/copy-cache";

export const dynamic = "force-dynamic";

type RouteParams = {
  invitation_label: string;
  invitation_name: string;
};

type PageProps = {
  params: Promise<RouteParams>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

// ------- Metadata dinámica -------
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { invitation_label, invitation_name } = await params;
  const supabase = await createClient();

  const label = decodeURIComponent(invitation_label);
  const name = decodeURIComponent(invitation_name);

  const { data } = await supabase
    .from("invitations")
    .select("data")
    .eq("label", label)
    .eq("name", name)
    .maybeSingle();

  if (!data?.data) {
    return { title: "I attend", description: "Diseña, comparte, celebra." };
  }

  const inv = data.data as NewInvitation;

  return {
    title: inv?.cover?.title?.text?.value,
    description: inv.greeting.title,
    openGraph: {
      title: inv?.cover?.title?.text?.value ?? "Invitación",
      description: inv.greeting.title,
      images: inv?.cover?.image?.prod
        ? [{ url: inv.cover.image.prod, width: 1200, height: 630, alt: inv?.cover?.title?.text?.value ?? "Invitación" }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: inv?.cover?.title?.text?.value ?? "Invitación",
      description: inv.greeting.title,
      images: inv?.cover?.image?.prod ? [inv.cover.image.prod] : undefined,
    },
    icons: {
      icon: [
        { url: "/icon.png", type: "image/png" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: "/apple-icon.png",
    },
  };
}

// ------- Página -------
export default async function InvitationDynamicPage({ params, searchParams }: PageProps) {
  const { invitation_label, invitation_name } = await params;
  const q = (await searchParams) ?? {}; // 👈 ahora sí existe `q`

  const supabase = await getPublicServerClient();

  const label = decodeURIComponent(invitation_label);
  const name = decodeURIComponent(invitation_name);

  const { data, error } = await supabase
    .from("invitations")
    .select("data, type, mongo_id, id")
    .eq("label", label)
    .eq("name", name)
    .maybeSingle();

  if (error) {
    console.error("[Supabase error]", error);
    notFound();
  }
  if (!data?.data) notFound();

  const invitation = data.data as NewInvitation;
  const type = data.type as InvitationType;
  const mongoID = data.mongo_id as string | null;
  const id = String(data.id); // 👈 define `id`

  const lang = typeof q.lang === "string" ? q.lang : undefined;

  const invitationForRender =
    lang
      ? await getTranslatedInvitationFromCache({
        invitationId: id,     // 👈 ahora existe
        invitation,
        lang,
        sourceLang: "es",      // si tu contenido base es ES
      })
      : invitation;

  const loader = false;

  const ui = lang
  ? await getTranslatedCopy("invitation_ui_v1", lang, "es")
  : await getTranslatedCopy("invitation_ui_v1", "es", "es");

  console.log(ui)

  return (
    <Invitation
      height={null}
      dev={false}
      ui={ui}  
      invitation={invitationForRender}
      loader={loader}
      type={type}
      mongoID={mongoID}
    />
  );
}