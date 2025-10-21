import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { createClient } from "@/lib/supabase/server";
import { getUserInitials } from "@/lib/data/profile";
import { GraduationCap, LogOut, Mail } from "lucide-react";
import { MobileNav } from "@/components/mobile-nav";

export async function SiteHeader() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  const user = data?.claims;

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Mobile Navigation */}
          <MobileNav user={user ? { email: user.email as string, full_name: user.full_name as string | null } : null} />
          
          {/* Logo */}
          <Link href="/" className="font-semibold text-sm hover:text-primary transition-colors">
            CMDHD Boundaries
          </Link>
        </div>
        
            <div className="hidden md:flex items-center gap-1">
              {user && (
                <Link
                  href="/protected"
                  className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                >
                  Training Hub
                </Link>
              )}
              <Link
                href="/presentation"
                className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                Presentation
              </Link>
              <Link
                href="/scenarios"
                className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                Scenarios
              </Link>
              <Link
                href="/policy"
                className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                Policy
              </Link>
              <Link
                href="/feedback"
                className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                Feedback
              </Link>
            </div>

        <div className="flex items-center gap-2">
          {user ? (
            <div className="flex items-center gap-4">
              {/* Email Display - Desktop Only */}
              <div className="hidden md:flex items-center gap-2 rounded-md bg-muted/50 px-3 py-1.5">
                <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground max-w-[200px] truncate">
                  {user.email}
                </span>
              </div>
              
              {/* Separator - Desktop Only */}
              <Separator orientation="vertical" className="h-6 hidden md:block" />
              
              {/* Avatar with Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={undefined} alt={user.email || 'User'} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {getUserInitials(user.full_name as string | null || null, user.email || '')}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.full_name || 'Participant'}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/protected" className="cursor-pointer">
                      <GraduationCap className="mr-2 h-4 w-4" />
                      <span>Training Hub</span>
                    </Link>
                  </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <form action={async () => {
                    'use server'
                    const { signOut } = await import('@/app/auth/logout/actions')
                    await signOut()
                  }} className="w-full">
                    <button type="submit" className="flex w-full items-center text-sm">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </button>
                  </form>
                </DropdownMenuItem>
              </DropdownMenuContent>
              </DropdownMenu>
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

