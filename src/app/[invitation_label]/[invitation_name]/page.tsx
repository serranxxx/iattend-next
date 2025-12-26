import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Invitation from "@/components/Invitation/Invitation/Invitation";
import { InvitationType, NewInvitation } from "@/types/new_invitation";
import { createClient } from "@/lib/supabase/server";
import { getPublicServerClient } from "@/lib/supabase/public-server";
import { getTranslatedInvitationFromCache } from "@/lib/translation/cache";
import { getTranslatedCopy } from "@/lib/translation/copy-cache";

export const dynamic = "force-dynamic";

// --------------------
// Types
// --------------------
type RouteParams = {
  invitation_label: string;
  invitation_name: string;
};

type PageProps = {
  params: RouteParams;
  searchParams?: {
    lang?: string;
    password?: string;
  };
};

// --------------------
// Metadata dinámica
// --------------------
export async function generateMetadata({
  params,
}: {
  params: RouteParams;
}): Promise<Metadata> {
  const { invitation_label, invitation_name } = params;
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
    return {
      title: "I attend",
      description: "Diseña, comparte, celebra.",
    };
  }

  const inv = data.data as NewInvitation;

  const title = inv?.cover?.title?.text?.value ?? "Invitación";
  const description = inv.greeting?.title ?? "Invitación digital";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: inv?.cover?.image?.prod
        ? [
            {
              url: inv.cover.image.prod,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: inv?.cover?.image?.prod
        ? [inv.cover.image.prod]
        : undefined,
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

// --------------------
// Página
// --------------------
export default async function InvitationDynamicPage({
  params,
  searchParams = {},
}: PageProps) {
  const { invitation_label, invitation_name } = params;

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
  const invitationID = String(data.id);

  const lang =
    typeof searchParams.lang === "string"
      ? searchParams.lang
      : undefined;

  const password =
    typeof searchParams.password === "string"
      ? searchParams.password
      : undefined;

  const invitationForRender = lang
    ? await getTranslatedInvitationFromCache({
        invitationId: invitationID,
        invitation,
        lang,
        sourceLang: "es",
      })
    : invitation;

  const ui = await getTranslatedCopy(
    "invitation_ui_v1",
    lang ?? "es",
    "es"
  );

  return (
    <Invitation
      height={null}
      dev={false}
      ui={ui}
      invitation={invitationForRender}
      password={password}
      invitationID={invitationID}
      loader={false}
      type={type}
      mongoID={mongoID}
    />
  );
}
