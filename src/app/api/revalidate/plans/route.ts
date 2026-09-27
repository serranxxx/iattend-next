import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { PLANS_CACHE_TAG } from "@/lib/plans";

// Lo llama iattend--backend cada vez que se guarda un plan en Admin → Planes,
// para que la landing deje de servir el catálogo en caché (5 min) y lo pida de
// nuevo en la siguiente visita. Protegido con un secreto compartido.
export async function POST(req: Request) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret || req.headers.get("x-revalidate-secret") !== secret) {
    return NextResponse.json({ ok: false, msg: "No autorizado" }, { status: 401 });
  }

  revalidateTag(PLANS_CACHE_TAG);
  return NextResponse.json({ ok: true, revalidated: PLANS_CACHE_TAG });
}
