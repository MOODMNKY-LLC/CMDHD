"use client";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    
    // Force refresh to update server components with new auth state
    router.refresh();
    router.push("/auth/login");
  };

  return <Button onClick={logout}>Logout</Button>;
}
