// app/[preview_label]/[preview_name]/page.tsx
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { Metadata, ResolvingMetadata } from "next";
import Invitation from "@/components/Invitation/Invitation/Invitation";
import { InvitationType, NewInvitation } from "@/types/new_invitation";
import { getPublicServerClient } from "@/lib/supabase/public-server";
import { Layout } from "antd";

export const dynamic = "force-dynamic";

type RouteParams = {
  preview_label: string;
  preview_name: string;
};

// 👇 OJO: En Next 15, los tipos generados pueden declarar params como Promise<...>
type PageProps = {
  params: Promise<RouteParams>;
  // En algunos setups searchParams también es Promise:
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

// ------- Metadata dinámica -------
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { preview_label, preview_name } = await params; // 👈 await
  const supabase = await createClient();

  const label = decodeURIComponent(preview_label);
  const name = decodeURIComponent(preview_name);

  const { data } = await supabase.from("invitations").select("data").eq("label", label).eq("name", name).maybeSingle();

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
  };
}

// ------- Página -------
export default async function InvitationDynamicPage({ params }: PageProps) {
  const { preview_label, preview_name } = await params; // 👈 await
  const supabase = await getPublicServerClient();

  const label = decodeURIComponent(preview_label);
  const name = decodeURIComponent(preview_name);

  const { data, error } = await supabase
    .from("invitations")
    .select("data, type, mongo_id")
    .eq("label", label)
    .eq("name", name)
    .maybeSingle();

  if (error) {
    console.error("[Supabase error]", error);
    notFound();
  }

  if (!data?.data) notFound();

  const invitation = data!.data as NewInvitation;
  const mongoID = data.mongo_id as string | null;

  const loader = false;

  return <Invitation height={null} dev={false} invitation={invitation} loader={loader} type={"open" as InvitationType} mongoID={mongoID} />;

  //
}
