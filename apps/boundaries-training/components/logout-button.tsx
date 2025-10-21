"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "@/app/auth/logout/actions";

export function LogoutButton() {
  return (
    <form action={signOut}>
      <Button type="submit">Logout</Button>
    </form>
  );
}
