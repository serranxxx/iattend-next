"use client";

import { useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const supabase = createClient();
  useEffect(() => {
    const getInv = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const { data, error } = await supabase.from("invitations").select("*").eq("user_id", user?.id);

      if (error) {
        console.log(error);
        return;
      } else {
        console.log(data);
      }
    };

    getInv();
  }, [supabase]);

  return <main style={{ maxWidth: 360, margin: "48px auto" }}>hello</main>;
}
