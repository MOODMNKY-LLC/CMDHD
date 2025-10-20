import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "@/components/logout-button";

  const nav = [
    { href: "/", label: "Home" },
    { href: "/demo", label: "Demo" },
    { href: "/presentation", label: "Presentation" },
    { href: "/scenarios", label: "Scenarios" },
    { href: "/counties", label: "Counties" },
    { href: "/resources", label: "Resources" },
    { href: "/policy", label: "Policy" },
    { href: "/feedback", label: "Feedback" },
  ];

export async function SiteHeader() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  const user = data?.claims;

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold text-sm">
          CMDHD Boundaries
        </Link>
        <nav className="hidden md:flex items-center gap-4 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {user ? (
            <div className="flex items-center gap-3 text-sm">
              <span className="text-muted-foreground">Hey, {user.email}!</span>
              <LogoutButton />
            </div>
          ) : (
            <>
              <Button asChild size="sm" variant="outline">
                <Link href="/auth/login">Sign in</Link>
              </Button>
              <Button asChild size="sm">
                <Link href="/auth/sign-up">Sign up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

